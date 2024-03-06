import { Cdn } from './source'

export type ImportMap = {
  imports?: Record<string, string>
  scope?: Record<string, string>
}
export interface CdnConfig {
  source?: Cdn
}
export interface PkgRef {
  name: string
  version?: string
}
