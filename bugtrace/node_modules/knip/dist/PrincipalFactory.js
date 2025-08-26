import ts from 'typescript';
import { ProjectPrincipal } from './ProjectPrincipal.js';
import { debugLog } from './util/debug.js';
import { toRelative } from './util/path.js';
export class PrincipalFactory {
    principals = new Set();
    getPrincipalCount() {
        return this.principals.size;
    }
    createPrincipal(options) {
        const { cwd, compilerOptions, isFile, pkgName, isIsolateWorkspaces, compilers } = options;
        if (isFile && compilerOptions.module !== ts.ModuleKind.CommonJS)
            compilerOptions.moduleResolution ??= ts.ModuleResolutionKind.Bundler;
        if (!isIsolateWorkspaces) {
            const principal = this.findReusablePrincipal(compilerOptions);
            if (principal) {
                this.linkPrincipal(principal, cwd, compilerOptions, pkgName, compilers);
                return principal.principal;
            }
        }
        return this.addNewPrincipal(options);
    }
    findReusablePrincipal(compilerOptions) {
        const workspacePaths = compilerOptions?.paths ? Object.keys(compilerOptions.paths) : [];
        return Array.from(this.principals).find(principal => {
            if (compilerOptions.pathsBasePath && principal.principal.compilerOptions.pathsBasePath)
                return false;
            if (compilerOptions.baseUrl === principal.principal.compilerOptions.baseUrl) {
                return workspacePaths.every(p => !principal.pathKeys.has(p));
            }
            return !compilerOptions.baseUrl;
        });
    }
    linkPrincipal(principal, cwd, compilerOptions, pkgName, compilers) {
        const { pathsBasePath, paths } = compilerOptions;
        if (pathsBasePath)
            principal.principal.compilerOptions.pathsBasePath = pathsBasePath;
        principal.principal.compilerOptions.moduleResolution ??= compilerOptions.moduleResolution;
        for (const p of Object.keys(paths ?? {}))
            principal.pathKeys.add(p);
        principal.principal.addPaths(paths, cwd);
        principal.principal.addCompilers(compilers);
        principal.wsDirs.add(cwd);
        principal.pkgNames.add(pkgName);
    }
    addNewPrincipal(options) {
        const { cwd, compilerOptions, pkgName } = options;
        const pathKeys = new Set(Object.keys(compilerOptions?.paths ?? {}));
        const principal = new ProjectPrincipal(options);
        this.principals.add({ principal, wsDirs: new Set([cwd]), pathKeys, pkgNames: new Set([pkgName]) });
        return principal;
    }
    getPrincipals() {
        return Array.from(this.principals, p => p.principal);
    }
    getPrincipalByPackageName(packageName) {
        return Array.from(this.principals).find(principal => principal.pkgNames.has(packageName))?.principal;
    }
    deletePrincipal(principal) {
        const p = Array.from(this.principals).find(p => p.principal === principal);
        if (p) {
            debugLog('*', `Deleting principal at ${[...p.wsDirs].map(cwd => toRelative(cwd) || '.')} (${[...p.pkgNames]})`);
            this.principals.delete(p);
        }
    }
}
