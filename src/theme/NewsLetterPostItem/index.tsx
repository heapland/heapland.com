import React from "react"
import clsx from "clsx"
import { MDXProvider } from "@mdx-js/react"

import MDXComponents from "@theme/MDXComponents"

import type { NewsLetter } from "../../assets/newsLetters"
import styles from "./styles.module.css"

type Props = Readonly<{
  children?: React.ReactNode
  frontMatter: NewsLetter["content"]["frontMatter"]
  isExternal?: boolean
  truncated?: string
  isNewsLetterList?: boolean
  metadata: NewsLetter["content"]["metadata"]
  postNumber: number
}>

function NewsLetterPostItem({
  children,
  frontMatter,
  isNewsLetterList = false,
  postNumber,
}: Props) {
  const { title } = frontMatter

  if (isNewsLetterList) {
    return (
      <div className={clsx(styles.newsletter__title, "margin-bottom--sm")}>
        <div>{title}</div>
        <div>#{postNumber}</div>
      </div>
    )
  }

  return (
    <article className="margin-bottom--xl">
      <header>
        <h1 className="margin-bottom--sm">{title}</h1>
      </header>

      <section className="markdown">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </section>
    </article>
  )
}

export default NewsLetterPostItem
