import { problemFlags } from "./problemUtils.js";
export function getExitCode(analysis, opts) {
    if (!analysis.types) {
        return 0;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.ignoreRules)) {
        return analysis.problems.length > 0 ? 1 : 0;
    }
    return analysis.problems.some((problem) => !opts.ignoreRules.includes(problemFlags[problem.kind])) ? 1 : 0;
}
//# sourceMappingURL=getExitCode.js.map