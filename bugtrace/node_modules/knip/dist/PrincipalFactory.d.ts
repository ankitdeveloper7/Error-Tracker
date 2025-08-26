import { ProjectPrincipal } from './ProjectPrincipal.js';
import type { PrincipalOptions } from './types/project.js';
export declare class PrincipalFactory {
    private principals;
    getPrincipalCount(): number;
    createPrincipal(options: PrincipalOptions): ProjectPrincipal;
    private findReusablePrincipal;
    private linkPrincipal;
    private addNewPrincipal;
    getPrincipals(): ProjectPrincipal[];
    getPrincipalByPackageName(packageName: string): ProjectPrincipal | undefined;
    deletePrincipal(principal: ProjectPrincipal): void;
}
