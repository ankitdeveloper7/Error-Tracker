import * as core from "@arethetypeswrong/core";
import { filterProblems, problemAffectsEntrypoint, problemKindInfo } from "@arethetypeswrong/core/problems";
import { allResolutionKinds, getResolutionOption, groupProblemsByKind } from "@arethetypeswrong/core/utils";
import chalk from "chalk";
import Table, {} from "cli-table3";
import { marked } from "marked";
import TerminalRenderer from "marked-terminal";
import { moduleKinds, problemFlags, resolutionKinds } from "../problemUtils.js";
import { asciiTable } from "./asciiTable.js";
export async function typed(analysis, { emoji = true, summary = true, format = "auto", ignoreRules = [] }) {
    let output = "";
    const problems = analysis.problems.filter((problem) => !ignoreRules || !ignoreRules.includes(problemFlags[problem.kind]));
    const grouped = groupProblemsByKind(problems);
    const entrypoints = Object.keys(analysis.entrypoints);
    marked.setOptions({
        renderer: new TerminalRenderer(),
    });
    out(`${analysis.packageName} v${analysis.packageVersion}`);
    if (analysis.types.kind === "@types") {
        out(`${analysis.types.packageName} v${analysis.types.packageVersion}`);
    }
    out();
    if (Object.keys(analysis.buildTools).length) {
        out("Build tools:");
        out(Object.entries(analysis.buildTools)
            .map(([tool, version]) => {
            return `- ${tool}@${version}`;
        })
            .join("\n"));
        out();
    }
    if (ignoreRules && ignoreRules.length) {
        out(chalk.gray(` (ignoring rules: ${ignoreRules.map((rule) => `'${rule}'`).join(", ")})\n`));
    }
    if (summary) {
        const defaultSummary = marked(!emoji ? " No problems found" : " No problems found 🌟");
        const summaryTexts = Object.keys(grouped).map((kind) => {
            const info = problemKindInfo[kind];
            const description = marked(`${info.description} ${info.docsUrl}`);
            return `${emoji ? `${info.emoji} ` : ""}${description}`;
        });
        out(summaryTexts.join("") || defaultSummary);
    }
    const entrypointNames = entrypoints.map((s) => `"${s === "." ? analysis.packageName : `${analysis.packageName}/${s.substring(2)}`}"`);
    const entrypointHeaders = entrypoints.map((s, i) => {
        const hasProblems = problems.some((p) => problemAffectsEntrypoint(p, s, analysis));
        const color = hasProblems ? "redBright" : "greenBright";
        return chalk.bold[color](entrypointNames[i]);
    });
    const getCellContents = memo((subpath, resolutionKind) => {
        var _a, _b, _c;
        const problemsForCell = groupProblemsByKind(filterProblems(problems, analysis, { entrypoint: subpath, resolutionKind }));
        const entrypoint = analysis.entrypoints[subpath].resolutions[resolutionKind];
        const resolution = entrypoint.resolution;
        const kinds = Object.keys(problemsForCell);
        if (kinds.length) {
            return kinds
                .map((kind) => (emoji ? `${problemKindInfo[kind].emoji} ` : "") + problemKindInfo[kind].shortDescription)
                .join("\n");
        }
        const jsonResult = !emoji ? "OK (JSON)" : "🟢 (JSON)";
        const moduleResult = entrypoint.isWildcard
            ? "(wildcard)"
            : (!emoji ? "OK " : "🟢 ") +
                moduleKinds[((_c = (_a = analysis.programInfo[getResolutionOption(resolutionKind)].moduleKinds) === null || _a === void 0 ? void 0 : _a[(_b = resolution === null || resolution === void 0 ? void 0 : resolution.fileName) !== null && _b !== void 0 ? _b : ""]) === null || _c === void 0 ? void 0 : _c.detectedKind) || ""];
        return (resolution === null || resolution === void 0 ? void 0 : resolution.isJson) ? jsonResult : moduleResult;
    });
    const flippedTable = format === "auto" || format === "table-flipped"
        ? new Table({
            head: ["", ...allResolutionKinds.map((kind) => chalk.reset(resolutionKinds[kind]))],
        })
        : undefined;
    if (flippedTable) {
        entrypoints.forEach((subpath, i) => {
            flippedTable.push([
                entrypointHeaders[i],
                ...allResolutionKinds.map((resolutionKind) => getCellContents(subpath, resolutionKind)),
            ]);
        });
    }
    const table = format === "auto" || !flippedTable
        ? new Table({
            head: ["", ...entrypointHeaders],
        })
        : undefined;
    if (table) {
        allResolutionKinds.forEach((kind) => {
            table.push([resolutionKinds[kind], ...entrypoints.map((entrypoint) => getCellContents(entrypoint, kind))]);
        });
    }
    switch (format) {
        case "table":
            out(table.toString());
            break;
        case "table-flipped":
            out(flippedTable.toString());
            break;
        case "ascii":
            out(asciiTable(table));
            break;
        case "auto":
            const terminalWidth = process.stdout.columns || 133; // This looks like GitHub Actions' width
            if (table.width <= terminalWidth) {
                out(table.toString());
            }
            else if (flippedTable.width <= terminalWidth) {
                out(flippedTable.toString());
            }
            else {
                out(asciiTable(table));
            }
            break;
    }
    return output.trimEnd();
    function out(s = "") {
        output += s + "\n";
    }
}
function memo(fn) {
    const cache = new Map();
    return (...args) => {
        const key = "" + args;
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
//# sourceMappingURL=typed.js.map