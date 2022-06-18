import React from "react"
import clsx from "clsx"

import Button from "@theme/Button"
import PageLayout from "@theme/PageLayout"
import TutorialPostItem from "@theme/TutorialPostItem"

import seCss from "../../css/section.module.css"
import { Tutorial } from "../../assets/tutorials"
import styles from "./styles.module.css"

type Props = Readonly<{
  items: Tutorial[]
}>

function renderCards(cards: Tutorial[]) {
  return cards.map(({ content }) => {
    const Content = (content as any) as React.ComponentType<{}>
    const isExternal = typeof Content !== "function"

    return (
      <TutorialPostItem
        key={content.metadata.permalink}
        frontMatter={content.frontMatter}
        isExternal={isExternal}
        isTutorialPage
        metadata={content.metadata}
      >
        {isExternal ? undefined : <Content />}
      </TutorialPostItem>
    )
  })
}

function TutorialListPage(props: Props) {
  const all = [...props.items].sort(
    (a, b) =>
      new Date(b.content.metadata.date).getTime() -
      new Date(a.content.metadata.date).getTime(),
  )
  const featured = all.filter(
    ({ content }) => content.frontMatter.featured === true,
  )
  const description =
    "Resources from our community contributors and the Gigahex Team for learning and mastering Gigahex."

  return (
    <PageLayout
      canonical="/tutorial"
      description={description}
      title="Tutorials"
      wrapperClassName="blog-wrapper"
    >
      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotron__left}>
            <h1 className={seCss.section__title} style={{ color: "#fff" }}>
              Tutorials
            </h1>
            <p
              className={clsx(
                seCss.section__subtitle,
                styles.jumbotron__subtitle,
              )}
            >
              {description}
            </p>
            <Button
              className={styles.jumbotron__cta}
              href="https://github.com/gigahexhq/gigahex.com/issues/new?labels=Tutorial&template=submit-a-tutorial.md"
            >
              Submit a tutorial
            </Button>
          </div>
        </div>
      </section>

      <div className="container margin-vert--lg">
        {featured.length > 0 && (
          <>
            <h2 className={styles.cards__title}>Featured tutorials</h2>
            <div className="row">
              <main className={clsx("col", styles.cards__container)}>
                {renderCards(featured)}
              </main>
            </div>
          </>
        )}
      </div>
    </PageLayout>
  )
}

export default TutorialListPage
