import { toProductionEntry } from '../../util/input.js';
import { join } from '../../util/path.js';
import { hasDependency } from '../../util/plugin.js';
const title = 'Nuxt';
const enablers = ['nuxt'];
const isEnabled = ({ dependencies }) => hasDependency(dependencies, enablers);
const config = ['nuxt.config.{js,mjs,ts}'];
const production = [
    'app.{vue,jsx,tsx}',
    'error.{vue,jsx,tsx}',
    'pages/**/*.{vue,jsx,tsx}',
    'layouts/default.{vue,jsx,tsx}',
    'middleware/**/*.ts',
    'server/api/**/*.ts',
    'server/routes/**/*.ts',
    'server/middleware/**/*.ts',
    'server/plugins/**/*.ts',
];
const setup = async () => {
    if (globalThis && !('defineNuxtConfig' in globalThis)) {
        Object.defineProperty(globalThis, 'defineNuxtConfig', { value: (id) => id });
    }
};
const resolveConfig = async (localConfig) => {
    const srcDir = localConfig.srcDir ?? '.';
    const patterns = [
        'app.{vue,jsx,tsx}',
        'error.{vue,jsx,tsx}',
        join(typeof localConfig.dir?.pages === 'string' ? localConfig.dir.pages : 'pages', '**/*.{vue,jsx,tsx}'),
        join(typeof localConfig.dir?.layouts === 'string' ? localConfig.dir.layouts : 'layouts', '**/*.{vue,jsx,tsx}'),
        join(typeof localConfig.dir?.middleware === 'string' ? localConfig.dir.middleware : 'middleware', '**/*.ts'),
        'server/api/**/*.ts',
        'server/routes/**/*.ts',
        'server/middleware/**/*.ts',
        'server/plugins/**/*.ts',
    ];
    return patterns.map(pattern => toProductionEntry(join(srcDir, pattern)));
};
const note = `Knip works best with [explicit imports](https://nuxt.com/docs/guide/concepts/auto-imports#explicit-imports).
Nuxt allows to [disable auto-imports](https://nuxt.com/docs/guide/concepts/auto-imports#disabling-auto-imports).`;
export const docs = { note };
export default {
    title,
    enablers,
    isEnabled,
    config,
    production,
    setup,
    resolveConfig,
};
