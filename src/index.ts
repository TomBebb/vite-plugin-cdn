import { Plugin } from 'vite'
import { ImportMap, PkgRef } from './types'
import { CdnConfig } from './types'
import { Cdn, getCdnPath } from './source'
import {join} from "path"
import fs from "fs/promises"
const prefix = '/@import-maps/'


function getImportMap(conf: Cdn, pkgs: PkgRef[]): ImportMap {
  return {

    imports: Object.fromEntries(pkgs.map(p =>[ p.name, getCdnPath( conf, p)]))
  }
}


export default function vitePluginCdn(conf: CdnConfig = {source: "jsdelivr"}): Plugin {

  let pkgRefs: PkgRef[] = []
  //const imports = getImportMap(conf.source!, )
  //console.log()
  return {
    name: 'vite-plugin-cdn',
    
    async config(conf, env) {

      const projectPkg = join(process.cwd(), "package.json")

      const content = await fs.readFile(projectPkg, "utf8")

      const {dependencies: deps} = JSON.parse(content)
      console.log(deps)
       pkgRefs = Object.entries(deps).map(d => ({
        name: String(d[0]!),
        version: d[1] === "*" ? undefined : String(d[1]!)
      }))
      console.log('refs', pkgRefs)

      console.log('config', conf)
      console.log('end', env)
      return {
        build: {
          rollupOptions: {
            external: pkgRefs.map(r => r.name)
          }
        },
         optimizeDeps: {
          exclude: pkgRefs.map(r => r.name),
       },
      }
    },
    transformIndexHtml: {
      enforce: 'pre',
      transform(html) {
        const importMap = getImportMap(conf.source!,  pkgRefs)
        console.log('transformHtml', conf, importMap)
        return {
          html,
          tags: [
            {
              tag: 'script',
              attrs: {
                type: 'importmap',
              },
              children: JSON.stringify(importMap, null, 2),
              injectTo: 'head-prepend',
            },
          ],
        }
      },
    },
  }
}
