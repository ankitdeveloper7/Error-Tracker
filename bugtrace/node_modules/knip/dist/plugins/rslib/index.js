import { hasDependency } from '../../util/plugin.js';
const title = 'Rslib';
const enablers = ['rslib'];
const isEnabled = ({ dependencies }) => hasDependency(dependencies, enablers);
const entry = ['rslib*.config.{mjs,ts,js,cjs,mts,cts}'];
const resolveConfig = () => {
    return [];
};
export default {
    title,
    enablers,
    isEnabled,
    entry,
    resolveConfig,
};
