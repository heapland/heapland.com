import React from "react"
import Toc from "@theme/TOC"
import ChangelogPostItem from "@theme/ChangelogPostItem"

import type { Changelog } from "../../assets/changelogs"
import PageLayout from "@theme/PageLayout"
import moment from "moment"
import clsx from "clsx"
import { Link } from "@docusaurus/router"
import styles from "./styles.module.css"

function ChangelogPostPage({ content }: Changelog) {
  const { frontMatter, metadata } = content
  const { description, title, image, keywords } = frontMatter
  const _keywords = [...(keywords ?? [])]
  const imageUrl = image ?? "/img/tutorial/placeholder.png"
  const Content = (content as any) as React.ElementType

  return (
    <PageLayout
      description={description}
      image={imageUrl}
      keywords={_keywords}
      title={title}
      wrapperClassName="blog-wrapper"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div
            className={clsx("col col--2", styles.left__info)}
            style={{ padding: "15px 0 0 0" }}
          >
            <h5>
              <Link
                to="/changelog"
                href="/changelog"
                className={styles.back__to__allChangeLogs}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="16"
                  fill="currentColor"
                  className="arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                Back to All Changelog
              </Link>
            </h5>
            <h4>
              <h4 className={styles.post__date}>
                {moment(content.metadata.date).format("MMM D, YYYY")}
              </h4>
            </h4>
          </div>
          <main className="col col--10 ">
            <ChangelogPostItem frontMatter={frontMatter} metadata={metadata}>
              <Content />
            </ChangelogPostItem>
          </main>
          {content.toc != null && (
            <div className="col col--2 ">
              <Toc toc={content.toc} />
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

export default ChangelogPostPage
