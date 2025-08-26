import type { ConfigurationChief } from '../ConfigurationChief.js';
import type { ConsoleStreamer } from '../ConsoleStreamer.js';
import type { DependencyDeputy } from '../DependencyDeputy.js';
import type { IssueCollector } from '../IssueCollector.js';
import type { IssueFixer } from '../IssueFixer.js';
import type { PrincipalFactory } from '../PrincipalFactory.js';
import type { Tags } from '../types/cli.js';
import type { Report } from '../types/issues.js';
import type { ModuleGraph } from '../types/module-graph.js';
interface AnalyzeOptions {
    analyzedFiles: Set<string>;
    chief: ConfigurationChief;
    collector: IssueCollector;
    deputy: DependencyDeputy;
    entryPaths: Set<string>;
    factory: PrincipalFactory;
    fixer: IssueFixer;
    graph: ModuleGraph;
    isFix: boolean;
    isIncludeLibs: boolean;
    isProduction: boolean;
    report: Report;
    streamer: ConsoleStreamer;
    tags: Tags;
    unreferencedFiles: Set<string>;
}
export declare const analyze: (options: AnalyzeOptions) => Promise<() => Promise<void>>;
export {};
