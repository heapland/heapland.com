import type { Content, FrontMatter, Metadata } from "@theme/BlogPostPage"

type FlatNewsLetter = FrontMatter &
  Readonly<{
    content: string
    date: string
    author: string
    link: string
  }>

export type NewsLetter = Readonly<{
  content: Readonly<{
    frontMatter: Omit<FlatNewsLetter, "link" | "date"> & {
      description?: string
    }
    metadata: Omit<Metadata, "title" | "tags"> & { truncated?: "true" }
    toc?: Content["toc"]
  }>
  external: true
}>
