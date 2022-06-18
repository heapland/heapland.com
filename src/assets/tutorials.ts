import type { Content, FrontMatter, Metadata } from "@theme/BlogPostPage"

type FlatTutorial = FrontMatter &
  Readonly<{
    content: string
    date: string
    link: string
    featured?: boolean
  }>

const tutorials: FlatTutorial[] = []

export type Tutorial = Readonly<{
  content: Readonly<{
    frontMatter: Omit<FlatTutorial, "link" | "date"> & { description?: string }
    metadata: Omit<Metadata, "title" | "tags"> & { truncated?: string }
    toc?: Content["toc"]
  }>
  external: true
}>

const normalize = (data: FlatTutorial[]): Tutorial[] =>
  data.map(({ author, content, date, featured, image, link, title }) => ({
    content: {
      frontMatter: {
        author,
        content,
        featured,
        image,
        title,
      },
      metadata: {
        date,
        formattedDate: date.toString(), // TODO format date
        permalink: link,
        truncated: "true",
      },
    },
    external: true,
  }))

export default normalize(tutorials)
