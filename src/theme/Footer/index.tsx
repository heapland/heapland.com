import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import useMetadataContext from "@theme/useMetadataContext"

import sectionCss from "../../css/section.module.css"
import footerStyles from "./styles.module.css"

type Props = Readonly<{
  href?: string
  label: string
  to?: string
}>

const FooterLink = ({ to, href, label, ...props }: Props) => {
  const linkHref = useBaseUrl(href ?? "", { forcePrependBaseUrl: undefined })
  const linkTo = useBaseUrl(to ?? "")

  return (
    <a
      className={footerStyles.footer__link}
      {...(href != null
        ? {
            href: linkHref,
            rel: "noopener noreferrer",
            target: "_blank",
          }
        : { href: linkTo })}
      {...props}
    >
      {label}
    </a>
  )
}

const Footer = () => {
  const { siteConfig } = useDocusaurusContext()
  const metadataContext = useMetadataContext()
  const {
    themeConfig: {
      footer: { links },
    },
  } = siteConfig

  return (
    <footer
      className={clsx(footerStyles.footer, sectionCss.section, {
        [footerStyles["footer--alt"]]: metadataContext.altFooter,
      })}
    >
      <div
        className={clsx(
          footerStyles.footer__inner,
          sectionCss["section--inner"],
        )}
      >
        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--left"],
          )}
        >
          <div className={clsx(footerStyles.footer__logo__container)}>
            <img
              alt="Gigahex logo"
              className={footerStyles.footer__logo}
              height={30}
              src="/img/navbar/logo-min.png"
              title="Gigahex - Desktop app for Spark and Hadoop"
              width={120}
            />
            {/* <div className={clsx(footerStyles.footer__brand__name)}>
              Gigahex
            </div> */}
          </div>
          <p className={footerStyles.footer__tagline}>{siteConfig.tagline}</p>
        </div>

        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--right"],
          )}
        >
          {links.map((linkItem, i) => (
            <div key={i} className={footerStyles.footer__links}>
              <ul className={footerStyles.footer__items}>
                {linkItem.title != null && (
                  <li className={footerStyles.footer__title}>
                    {linkItem.title}
                  </li>
                )}

                {linkItem.items?.map((item) => (
                  <li
                    className={footerStyles.footer__item}
                    key={item.href ?? item.to}
                  >
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={footerStyles.footer__bottom}>
        <p className={footerStyles.footer__copyright}>
          {siteConfig.customFields.copyright}
        </p>
        <ul>
          <li className={footerStyles.footer__item}>
            <a className={footerStyles.footer__link} href="/privacy-notice/">
              Privacy
            </a>
          </li>
        </ul>
        <ul>
          <li className={footerStyles.footer__item}>
            <a className={footerStyles.footer__link} href="/terms/">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
