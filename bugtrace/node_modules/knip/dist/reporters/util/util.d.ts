import { ISSUE_TYPE_TITLE } from '../../constants.js';
import { type Issue, type IssueSeverity, type IssueSymbol } from '../../types/issues.js';
import { Table } from '../../util/table.js';
export declare const dim: import("picocolors/types.js").Formatter;
export declare const bright: import("picocolors/types.js").Formatter;
export declare const getIssueTypeTitle: (reportType: keyof typeof ISSUE_TYPE_TITLE) => string;
export declare const getColoredTitle: (title: string, count: number) => string;
export declare const getDimmedTitle: (title: string, count: number) => string;
type LogIssueLine = {
    owner?: string;
    filePath: string;
    symbols?: IssueSymbol[];
    parentSymbol?: string;
    severity?: IssueSeverity;
};
export declare const getIssueLine: ({ owner, filePath, symbols, parentSymbol, severity }: LogIssueLine) => string;
export declare const convert: (issue: Issue | IssueSymbol) => {
    name: string;
    line: number | undefined;
    col: number | undefined;
    pos: number | undefined;
};
export declare const getTableForType: (issues: Issue[], options?: {
    isUseColors?: boolean;
}) => Table;
export {};
