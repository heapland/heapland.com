import React from "react"
import clsx from "clsx"

import Link from "@docusaurus/Link"
import PageLayout from "@theme/PageLayout"
import NewsLetterPostItem from "@theme/NewsLetterPostItem"

import seCss from "../../css/section.module.css"
import { NewsLetter } from "../../assets/newsLetters"
import styles from "./styles.module.css"
import moment from "moment"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Button from "@theme/Button"

type Props = Readonly<{
  items: NewsLetter[]
}>
function renderItem(allNewsletter: NewsLetter[]) {
  return allNewsletter.map(({ content }, i: number) => {
    const Content = (content as any) as React.ComponentType<{}>
    const { permalink, truncated } = content.metadata

    return (
      <Link
        href={permalink}
        to={permalink}
        key={content.metadata.permalink}
        className={clsx(
          "padding-bottom--sm",
          styles.newsletter__item__link,
          "margin-bottom--lg",
        )}
      >
        <main
          className={clsx("row", "padding-horiz--sm", styles.post__item__row)}
        >
          <div className={clsx("col col--3")}>
            <div className={styles.newsletter__date}>
              {moment(content.metadata.date).format("MMM D, YYYY")}
            </div>
          </div>
          <div className={clsx("col col--9 text-center ")}>
            <NewsLetterPostItem
              key={content.metadata.permalink}
              frontMatter={content.frontMatter}
              isNewsLetterList
              truncated={truncated}
              metadata={content.metadata}
              postNumber={allNewsletter.length - i}
            >
              <Content />
            </NewsLetterPostItem>
          </div>
        </main>
      </Link>
    )
  })
}
function NewsLetterListPage(props: Props) {
  const { siteConfig } = useDocusaurusContext()
  const allNewsletter = [...props.items].sort(
    (a, b) =>
      new Date(b.content.metadata.date).getTime() -
      new Date(a.content.metadata.date).getTime(),
  )
  const description = "Data Engineering Newsletter."

  return (
    <PageLayout
      canonical="/newsletter"
      description={description}
      title="Newsletter"
      wrapperClassName="newsletter-wrapper"
    >
      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={styles.jumbotron}>
          <div>
            <h1
              className={clsx(seCss.section__title, "margin-bottom--md")}
              style={{ color: "#fff" }}
            >
              Data Engineering Newsletter
            </h1>
            <p className={clsx(seCss.section__subtitle, "margin-bottom--lg")}>
              Follow on
              <a
                href={siteConfig.customFields.twitterUrl}
                className={clsx(styles.social__link, "margin-horiz--sm")}
              >
                twitter
              </a>
              to stay updated on Data Engineering best practices.
            </p>
            <Button
              className={styles.jumbotron__btn}
              href="https://github.com/gigahexhq/gigahex.com/issues/new?labels=Tutorial&template=share-content.yaml"
            >
              Share your Content
            </Button>
          </div>
        </div>
      </section>
      <div
        className={`container margin-vert--xl padding-horiz--lg ${seCss["section--center"]}`}
      >
        {renderItem(allNewsletter)}
      </div>
    </PageLayout>
  )
}

export default NewsLetterListPage
