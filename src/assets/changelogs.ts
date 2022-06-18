import type { Content, FrontMatter, Metadata } from "@theme/BlogPostPage"

type FlatChangelog = FrontMatter &
  Readonly<{
    content: string
    date: string
    author: string
    link: string
  }>

export type Changelog = Readonly<{
  content: Readonly<{
    frontMatter: Omit<FlatChangelog, "link" | "date"> & {
      description?: string
    }
    metadata: Omit<Metadata, "title" | "tags"> & { truncated?: "true" }
    toc?: Content["toc"]
  }>
  external: true
}>
