import { Plugin } from 'vite';

type Cdn = "esm.sh" | "jsdelivr";

interface CdnConfig {
    source?: Cdn;
}

declare function vitePluginCdn(conf?: CdnConfig): Plugin;

export { vitePluginCdn as default };
