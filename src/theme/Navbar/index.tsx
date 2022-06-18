import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React, { ComponentProps, useCallback, useState, useEffect } from "react"
import BrowserOnly from "@docusaurus/BrowserOnly"

// import Button from "@theme/Button"
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll"
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize"
import GitHubButton from "react-github-btn"
import styles from "./styles.module.css"
import NavbarItem from "@theme/NavbarItem"
import { Link } from "@docusaurus/router"
// import ButtonDropdown from "../Button/ButtonDropdown"

const DefaultNavItemPosition = "right"

function splitNavItemsByPosition(
  items: Array<ComponentProps<typeof NavbarItem>>,
): {
  leftItems: Array<ComponentProps<typeof NavbarItem>>
  rightItems: Array<ComponentProps<typeof NavbarItem>>
} {
  const leftItems = items.filter(
    (item) =>
      // @ts-expect-error: temporary, will be fixed in Docusaurus TODO remove soon
      (item.position ?? DefaultNavItemPosition) === "left",
  )
  const rightItems = items.filter(
    (item) =>
      // @ts-expect-error: temporary, will be fixed in Docusaurus TODO remove soon
      (item.position ?? DefaultNavItemPosition) === "right",
  )
  return {
    leftItems,
    rightItems,
  }
}

function Navbar(): JSX.Element {
  const {
    siteConfig: {
      themeConfig: {
        navbar: { items },
      },
    },
  } = useDocusaurusContext()
  const [sidebarShown, setSidebarShown] = useState(false)
  const [colorChange, setColorchange] = useState(false)

  useLockBodyScroll(sidebarShown)

  const showSidebar = useCallback(() => {
    setSidebarShown(true)
  }, [])
  const hideSidebar = useCallback(() => {
    setSidebarShown(false)
  }, [])

  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false)
    }
  }, [windowSize])

  const { leftItems, rightItems } = splitNavItemsByPosition(items)

  return (
    <BrowserOnly>
      {() => {
        const changeNavbarColor = () => {
          if (window.scrollY >= 100) {
            setColorchange(true)
          } else {
            setColorchange(false)
          }
        }
        window.addEventListener("scroll", changeNavbarColor)
        return (
          <nav
            className={clsx("navbar", "navbar--light", "navbar--fixed-top", {
              "navbar-sidebar--show": sidebarShown,
              "bg-white": colorChange,
            })}
          >
            <div className={clsx("navbar__inner", styles.inner)}>
              <div className="navbar__items">
                <div
                  aria-label="Navigation bar toggle"
                  className="navbar__toggle"
                  role="button"
                  tabIndex={0}
                  onClick={showSidebar}
                  onKeyDown={showSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    role="img"
                    focusable="false"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M4 7h22M4 15h22M4 23h22"
                    />
                  </svg>
                </div>
                <Link className={clsx("navbar__brand", styles.brand)} to="/">
                  Gigahex
                </Link>

                <GitHubButton
                  href="https://github.com/gigahexhq/console"
                  data-icon="octicon-star"
                  data-show-count="true"
                  aria-label="Star gigahexhq/console on GitHub"
                >
                  Star
                </GitHubButton>
                {/* <span className={styles.indexCtasGitHubButtonWrapper}>
                  <iframe
                    className={styles.indexCtasGitHubButton}
                    src="https://ghbtns.com/github-btn.html?user=gigahexhq&amp;repo=console&amp;type=star&amp;count=true&amp;size=large"
                    width={140}
                    height={30}
                    title="GitHub Stars"
                  />
                </span> */}
                {leftItems.map((item, i) => (
                  <NavbarItem {...item} key={i} />
                ))}
              </div>
              <div className="navbar__items navbar__items--right">
                {rightItems.map((item, i) => (
                  <NavbarItem {...item} key={i} />
                ))}
              </div>
            </div>
            <div
              role="presentation"
              className="navbar-sidebar__backdrop"
              onClick={hideSidebar}
            />
            <div className="navbar-sidebar">
              <div className="navbar-sidebar__brand">
                <a
                  className={clsx("navbar__brand", styles.brand)}
                  href="/"
                  onClick={hideSidebar}
                >
                  Gigahex
                </a>
              </div>
              <div className="navbar-sidebar__items">
                <div className="menu document-menu">
                  <ul className="menu__list">
                    {items.map((item, i) => (
                      <NavbarItem
                        mobile
                        {...item}
                        {...(item.type !== "search" && {
                          onClick: hideSidebar,
                        })} // Search type def does not accept onClick
                        key={i}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        )
      }}
    </BrowserOnly>
  )
}

export default Navbar
