export type ChangelogContentPaths = {
  contentPath: string
  contentPathLocalized: string
}

export interface ChangelogContent {
  changelogs: Changelog[]
  changelogList: ChangelogList
}

export interface ChangelogPluginOptions {
  id?: string
  path: string
  remarkPlugins: []
  routeBasePath: string
  include: string[]
  truncateMarker: RegExp
  changelogListComponent: string
  changelogPostComponent: string
  changelogDescription: string
  changelogTitle: string
}

export interface Changelog {
  id: string
  metadata: MetaData
}

export interface ChangelogListMetadata {
  permalink: string
  changelogDescription: string
  changelogTitle: string
}

export interface ChangelogList {
  metadata: ChangelogListMetadata
  items: string[]
}

export interface MetaData {
  permalink: string
  source: string
  description: string
  date: Date
  title: string
  truncated: boolean
}

export interface DateLink {
  date: Date
  link: string
}

export interface ItemsToMetadata {
  [key: string]: MetaData
}
