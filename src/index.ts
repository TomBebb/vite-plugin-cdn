import { Plugin } from 'vite'
import { ImportMap, PkgRef } from './types'
import { CdnConfig } from './types'
import { Cdn, getCdnPath } from './source'
import { join } from 'path'
import fs from 'fs/promises'
function getImportMap(conf: Cdn, pkgs: PkgRef[]): ImportMap {
  const mappedImports = pkgs.map(p => [p.name, getCdnPath(conf, p)])
  return {
    imports: Object.fromEntries(mappedImports),
  }
}

export default function vitePluginCdn(
  conf: CdnConfig = { source: 'jsdelivr' },
): Plugin {
  const exclude = new Set<string>(conf.exclude)
  let pkgRefs: PkgRef[] = []
  return {
    name: 'vite-plugin-cdn',

    async config(conf, env) {
      const projectPkg = join(process.cwd(), 'package.json')

      const content = await fs.readFile(projectPkg, 'utf8')

      const { dependencies: deps } = JSON.parse(content)
      pkgRefs = Object.entries(deps)
        .map(d => ({
          name: String(d[0]!),
          version: d[1] === '*' ? undefined : String(d[1]!),
        }))
        .filter(p => !exclude.has(p.name))
      return {
        build: {
          rollupOptions: {
            external: pkgRefs.map(r => r.name),
          },
        },
        optimizeDeps: {
          exclude: pkgRefs.map(r => r.name),
        },
      }
    },
    transformIndexHtml: {
      order: 'pre',
      async handler(html) {
        const importMap = getImportMap(conf.source ?? 'jsdelivr', pkgRefs)
        const children = JSON.stringify(importMap, null, 2)
        return {
          html,
          tags: [
            {
              tag: 'script',
              attrs: {
                type: 'importmap',
              },
              children,
              injectTo: 'head-prepend',
            },
          ],
        }
      },
    },
  }
}
