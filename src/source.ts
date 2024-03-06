import { PkgRef } from './types'

export type Cdn = 'esm.sh' | 'jsdelivr'

export function getCdnPath(cdn: Cdn, pkgRef: PkgRef): string {
  const refTxt = pkgRef.version
    ? `${pkgRef.name}@${pkgRef.version}`
    : pkgRef.name
  switch (cdn) {
    case 'jsdelivr':
      return `https://cdn.jsdelivr.net/npm/${refTxt}/+esm`
    case 'esm.sh':
      return `https://esm.sh/${refTxt}`
  }
}
