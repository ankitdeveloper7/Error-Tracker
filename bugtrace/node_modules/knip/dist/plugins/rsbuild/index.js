import { toEntry } from '../../util/input.js';
import { hasDependency } from '../../util/plugin.js';
const title = 'Rsbuild';
const enablers = ['@rsbuild/core'];
const isEnabled = ({ dependencies }) => hasDependency(dependencies, enablers);
const config = ['rsbuild*.config.{mjs,ts,js,cjs,mts,cts}'];
const resolveConfig = async (config) => {
    const inputs = new Set();
    if (config.source?.entry) {
        if (Array.isArray(config.source.entry))
            for (const entry of config.source.entry)
                inputs.add(toEntry(entry));
        if (typeof config.source.entry === 'string')
            inputs.add(toEntry(config.source.entry));
    }
    return Array.from(inputs);
};
export default {
    title,
    enablers,
    isEnabled,
    config,
    resolveConfig,
};
