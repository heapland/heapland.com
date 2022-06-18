export type NewsLetterContentPaths = {
  contentPath: string
  contentPathLocalized: string
}

export interface NewsLetterContent {
  newsLetters: NewsLetter[]
  newsLetterList: NewsLetterList
}

export interface NewsLetterPluginOptions {
  id?: string
  path: string
  remarkPlugins: []
  routeBasePath: string
  include: string[]
  truncateMarker: RegExp
  newsLetterListComponent: string
  newsLetterPostComponent: string
  newsLetterDescription: string
  newsLetterTitle: string
}

export interface NewsLetter {
  id: string
  metadata: MetaData
}

export interface NewsLetterListMetadata {
  permalink: string
  newsLetterDescription: string
  newsLetterTitle: string
}

export interface NewsLetterList {
  metadata: NewsLetterListMetadata
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
