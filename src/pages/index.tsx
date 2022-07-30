import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
// import TextLoop from "react-text-loop"
// import ReactTypingEffect from "react-typing-effect"

// import Button from "@theme/Button"
import PageLayout from "@theme/PageLayout"
// import FeaturesTiles from "../component/FeaturesTiles"
// import ButtonDropdown from "../theme/Button/ButtonDropdown"

// import ftrClsCss from "../css/index/footerConsole.module.css"
import juCss from "../css/index/jumbotron.module.css"
// import wthCss from "../css/index/watch.module.css"
import ftuCss from "../css/index/ftuCard.module.css"
import seCss from "../css/section.module.css"
import featTiles from "../css/index/featureTiles.module.css"
import priCss from "../css/index/pricing.module.css"
import { Link } from "react-router-dom"

type IFeatureCard = {
  title: any
  icon: any
}

const FeatureCard = ({ title, icon }: IFeatureCard) => {
  return (
    <div className={clsx(ftuCss.feature__card)}>
      <h2 className={clsx(ftuCss.feature__title, "margin-bottom--none")}>
        {title}
      </h2>

      <div className={ftuCss.feature__icon}>
        <img src={icon} alt="Features tile icon 01" width={80} height={80} />
      </div>
    </div>
  )
}

const Top = () => {
  return (
    <section className={clsx(seCss.section, juCss["hero-section"])}>
      <div className={clsx(juCss.jumbotron)}>
        <div className={juCss.jub__left__content}>
          <div className={juCss.jumbotron__title}>
            Universal interface
            <br /> for
            <span className="text__bg__gradient"> your storage services</span>
          </div>
          <div className={juCss.jumbotron__description}>
            Browse file systems, query databases and stream messages from message brokers all at one place.
          </div>

          <div className={clsx(juCss.jub__action__btns)}>
            <a href="#" className={juCss.view__repo__btn}>
              View the Repo
              <svg
                width={22}
                height={22}
                opacity=".5"
                style={{ marginLeft: "12px" }}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  color="#fff"
                  d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                ></path>
              </svg>
            </a>
            <a href="#" className={juCss.request__demo__btn}>
              Watch Demo
            </a>

            <br />
           
          </div>
        </div>
        <div className={juCss.jub__right__content}>
          <img
            src="/static/img/pages/landing/browsers-screenshot.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

const FeaturesCards = () => {
  return (
    <section
      className={clsx(
        "container",
        seCss.section,
        ftuCss.features__card__container,
      )}
    >
      <h1 className={clsx(ftuCss.semi__title)}>
        Develop faster <span className="text__bg__gradient">with Heapland</span>
      </h1>
      <div className={clsx(ftuCss.features__cards)}>
        <FeatureCard
          title={
            <>
              <span className="text__bg__gradient">Accelerate</span> development,
              debugging and analysis of application data and logs.
            </>
          }
          icon={"https://coder.com/_next/static/media/accelerate.90af2ebe.svg"}
        />
        <FeatureCard
          title={
            <>
              <span className="text__bg__gradient">Connect </span>
              with storage services running on public cloud or OnPremise infrastructure.
            </>
          }
          icon={"https://coder.com/_next/static/media/commit.e878e129.svg"}
        />
        <FeatureCard
          title={
            <>
              <span className="text__bg__gradient">Securely </span>
              run heapland to access the data behind your corporate firewall.
            </>
          }
          icon={"https://coder.com/_next/static/media/secure.75de3c95.svg"}
        />
      </div>
    </section>
  )
}

const SupportDB = () => {

  const [storage, setStorageCategory] = React.useState<{
    storageCategory: string
  }>({
    storageCategory: "dbms",
   
  })

  const onClickStorageTab = (storageCat: string) => {
    switch (storageCat) {
      case "dbms":
        setStorageCategory({
          storageCategory: storageCat,
        });
        break
      case "fs":
        setStorageCategory({
          storageCategory: storageCat,
        });
        break
      case "Mac":
        setStorageCategory({
          storageCategory: storageCat,
        });
        break
  
    }
  }

  const getActiveTab = (storageCategory: string, selectedStorage: string) => {
    if (storageCategory === selectedStorage) {
      return "tabs__item--active"
    } else {
      return ""
    }
  }
  return (
    <section className={clsx("container", ftuCss.supportdb__container)}>
      <div className={ftuCss.supportdb__left__content}>
        
        
        <div
          className={clsx(ftuCss.supportdb__scnd__title, "text__bg__gradient")}
        >
          Works with your favorite storage service
        </div>
        <div className={clsx("row", juCss.gigahex_installer_container)}>
          <div className={clsx("col col--12")} style={{ padding: 0 }}>
        <ul className={clsx("tabs tabs--block", juCss.os_tabs_container)}>
              <li
                className={clsx(
                  "tabs__item",
                  juCss.os_tab,
                  getActiveTab("dbms", storage.storageCategory),
                )}
                onClick={() => onClickStorageTab("dbms")}
              >
                Databases
              </li>
              <li
                className={clsx(
                  "tabs__item",
                  juCss.os_tab,
                  getActiveTab("fs", storage.storageCategory),
                )}
                onClick={() => onClickStorageTab("fs")}
              >
                Distributed File systems
              </li>
              <li
                className={clsx(
                  "tabs__item",
                  juCss.os_tab,
                  getActiveTab("Ubuntu", storage.storageCategory),
                )}
                onClick={() => onClickStorageTab("streams")}
              >
                Streams
              </li>
            </ul>
            </div>
            </div>

        <div className={ftuCss.db__logo_containers}>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/athena.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>PostgreSQL</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/azure-synapse.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>MariaDB</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/athena.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>MySQL</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/azure-synapse.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>Cassandra</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/athena.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>Amazon S3</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/azure-synapse.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>Kafka</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/athena.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>MongoDB</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/azure-synapse.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>MongoDB</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/athena.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>MongoDB</span>
        </Link>
        <Link to={"/"}>
        <figure data-for="figure-tooltip-Amazon Athena" data-tip="Amazon Athena" title="Amazon Athena" className={ftuCss.supportdb__db_logo} >
          <img src="https://popsql.com/static/landing/first-section/azure-synapse.svg" alt="Amazon Athena" loading="lazy"/>
          </figure>
          <span>MongoDB</span>
        </Link>
        </div>
      </div>

      
    </section>
  )
}

const FeaturesTiles = () => {
  return (
    <section
      className={clsx("container", featTiles.features__tiles__container)}
    >
      <div className={featTiles.feature__tiles}>
        <div className={featTiles.tile__content}>
          <div className={featTiles.tile__title}>
            Code with
            <span className="text__bg__gradient"> any editor or IDE</span>
          </div>
          <div className={featTiles.tile__desc}>
            Use code-server, VS Code Remote, JetBrains Remote, RStudio, and
            more.
          </div>
        </div>
        <div className={featTiles.tile__image}>
          <img
            style={{ float: "right" }}
            src="https://coder.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fide.00b47eda.png&w=828&q=75"
            alt=""
          />
        </div>
      </div>
      <div className={featTiles.feature__tiles}>
        <div className={featTiles.tile__image}>
          <img
            style={{ float: "left" }}
            src="https://coder.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflexibility.80da0175.png&w=828&q=75"
            alt=""
          />
        </div>
        <div className={featTiles.tile__content}>
          <div className={featTiles.tile__title}>
            Unlimited
            <span className="text__bg__gradient"> flexibility & power</span>
          </div>
          <div className={featTiles.tile__desc}>
            Use industry standard infrastructure-as-code systems like Terraform
            for unlimited flexibility. Customize or fork our templates or create
            your own to give your workspaces unlimited power. Integrate with
            your authentication, source control, and logging.
          </div>
        </div>
      </div>
      <div className={featTiles.feature__tiles}>
        <div className={featTiles.tile__content}>
          <div className={featTiles.tile__title}>
            Batteries
            <span className="text__bg__gradient"> included</span>
          </div>
          <div className={featTiles.tile__desc}>
            Build workspaces on production-ready templates available out of the
            box.
          </div>
        </div>
        <div className={featTiles.tile__image}>
          <img
            style={{ float: "right" }}
            src="https://coder.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbatteries.110d2c63.png&w=828&q=75"
            alt=""
          />
        </div>
      </div>
      <div className={featTiles.feature__tiles}>
        <div className={featTiles.tile__image}>
          <img
            style={{ float: "left" }}
            src="https://coder.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdotfiles.b4bba156.png&w=828&q=75"
            alt=""
          />
        </div>
        <div className={featTiles.tile__content}>
          <div className={featTiles.tile__title}>
            Personalize your
            <span className="text__bg__gradient"> workspace</span>
          </div>
          <div className={featTiles.tile__desc}>
            Use custom dotfiles and configurations. Execute personalization
            scripts to make standardized workspaces uniquely yours, safely and
            reliably.
          </div>
          <div className={featTiles.tile__desc}>
            ssh directly into your workspace to do anything you can on a local
            workstation but better and faster.
          </div>
        </div>
      </div>
    </section>
  )
}

const Pricing = () => {
  return (
    <section className={clsx("container", priCss.pricing__container)}>
      <div className={priCss.free__version}>
        <div className={priCss.pricing__label}>Pricing</div>
        <div className={priCss.desc}>
          Our entire developer experience is free and open source. Reach out
          when you have a mature deployment or enterprise needs.
        </div>
      </div>

      <div>
        <div className={priCss.community__version}>
          <div className={priCss.body__content}>
            <div className={priCss.community__label}>Community</div>
            <ul className={priCss.price__features}>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>Open Source</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>Always Free</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>Unlimited Users</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>Unlimited Workspaces</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>OpenID Connect</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>Sign in with GitHub</strong>
              </li>
            </ul>
          </div>

          <a href="#" className={priCss.view__repo__btn__bottom}>
            View the Repo
          </a>
        </div>
        <div className={priCss.enterprise__version}>
          <div className={priCss.body__content}>
            <div className={priCss.enterprise__label}>Enterprise</div>
            <ul className={priCss.price__features}>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>24/7 Enterprise Support</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>High Availability</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>Quotas</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>Auditing</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>RBAC</strong>
              </li>
              <li>
                <svg
                  className="MuiSvgIcon-root jss535"
                  focusable="false"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L7.999 11.587L13.293 6.293L14.707 7.707L8.001 14.413Z"
                    fill="#2DA557"
                  ></path>
                </svg>
                <strong>Air Gapped Deployment</strong>
              </li>
            </ul>
          </div>
          <a href="#" className={priCss.request__btn}>
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  )
}

const GetStartedSec = () => {
  const [copied, setCopied] = React.useState(false)

  const cmd = "curl -fsSL https://coder.com/install.sh | sh"
  React.useEffect(() => {
    let id
    if (copied) {
      id = setTimeout(() => {
        setCopied(false)
      }, 600)
    }
    return () => clearTimeout(id)
  }, [copied])
  return (
    <section className={clsx("container", seCss.get__started_sec)}>
      <div className={seCss.get__started}>
        <div className={seCss.get__started__label}>Get started</div>
        <div className={seCss.cmd__copy__box}>
          <div>
            <span className={seCss.dollar__sign}>$</span>
            {cmd}
          </div>
          <button
            className={seCss.copy__btn}
            onClick={async () => {
              await navigator.clipboard.writeText(cmd).then()
              setCopied(true)
            }}
          >
            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="752pt"
                height="752pt"
                version="1.1"
                viewBox="0 0 752 752"
              >
                <path
                  d="m554.07 285.07-212.64 221.16c-11.84 12.312-30.781 12.312-42.621 0l-106.08-111.29c-11.84-12.312-11.84-32.203 0-44.516 11.84-12.312 30.781-12.312 42.621 0l85.246 89.035 191.33-198.9c11.84-12.312 30.781-12.312 42.621 0 11.363 12.309 11.363 32.199-0.47656 44.512z"
                  fill="#4c52df"
                  fillRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 18 18"
                aria-hidden="true"
                width="18"
                height="18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.0557 1.05546C1.57143 0.539731 2.2709 0.25 3.00024 0.25H11.0002C11.7296 0.25 12.4291 0.539731 12.9448 1.05546C13.4605 1.57118 13.7502 2.27065 13.7502 3V4.25H15.0002C16.519 4.25 17.7502 5.48122 17.7502 7V15C17.7502 16.5188 16.519 17.75 15.0002 17.75H7.00024C5.48146 17.75 4.25024 16.5188 4.25024 15V13.75H3.00024C2.2709 13.75 1.57143 13.4603 1.0557 12.9445C0.539975 12.4288 0.250244 11.7293 0.250244 11V3C0.250244 2.27065 0.539975 1.57118 1.0557 1.05546ZM5.75024 15C5.75024 15.6904 6.30989 16.25 7.00024 16.25H15.0002C15.6906 16.25 16.2502 15.6904 16.2502 15V7C16.2502 6.30964 15.6906 5.75 15.0002 5.75H7.00024C6.30989 5.75 5.75024 6.30964 5.75024 7V15ZM12.2502 4.25H7.00024C5.48146 4.25 4.25024 5.48122 4.25024 7V12.25H3.00024C2.66872 12.25 2.35078 12.1183 2.11636 11.8839C1.88194 11.6495 1.75024 11.3315 1.75024 11V3C1.75024 2.66848 1.88194 2.35054 2.11636 2.11612C2.35078 1.8817 2.66872 1.75 3.00024 1.75H11.0002C11.3318 1.75 11.6497 1.8817 11.8841 2.11612C12.1185 2.35054 12.2502 2.66848 12.2502 3V4.25Z"
                  fill="#4D52E0"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={seCss.check__on__github}>
        <div className={seCss.label}>Check us out on</div>
        <div>
          <a className={seCss.github__name__icon}>
            <svg
              style={{ marginRight: 15 }}
              className="MuiSvgIcon-root jss79"
              focusable="false"
              viewBox="0 0 30 30"
              aria-hidden="true"
            >
              <path
                d="M15 0C6.71625 0 0 6.69143 0 14.9467C0 21.5503 4.29844 27.1534 10.2581 29.1292C11.0081 29.2674 11.2838 28.805 11.2838 28.4099C11.2838 28.0539 11.2697 26.876 11.2631 25.627C7.08937 26.5313 6.20906 23.8633 6.20906 23.8633C5.52656 22.136 4.54406 21.6764 4.54406 21.6764C3.18281 20.7488 4.64719 20.7674 4.64719 20.7674C6.15281 20.873 6.94594 22.3079 6.94594 22.3079C8.28375 24.5929 10.455 23.9324 11.3109 23.5503C11.445 22.5844 11.8341 21.9249 12.2634 21.5512C8.93156 21.1738 5.42906 19.8912 5.42906 14.1648C5.42906 12.5328 6.015 11.1997 6.975 10.1525C6.81937 9.77605 6.30562 8.25616 7.12031 6.19726C7.12031 6.19726 8.38031 5.79557 11.2463 7.72929C12.4425 7.39766 13.7259 7.23231 15.0009 7.22578C16.275 7.23138 17.5594 7.39766 18.7584 7.72929C21.6216 5.79557 22.8787 6.19726 22.8787 6.19726C23.6953 8.25616 23.1816 9.77605 23.0259 10.1525C23.9878 11.1988 24.57 12.5328 24.57 14.1648C24.57 19.9052 21.0609 21.1691 17.7206 21.54C18.2587 22.0043 18.7378 22.9132 18.7378 24.3079C18.7378 26.308 18.72 27.9176 18.72 28.4099C18.72 28.8078 18.99 29.274 19.7503 29.1273C25.7072 27.1487 30 21.5484 30 14.9467C30 6.69143 23.2838 0 15 0Z"
                fill="url(#paint0_linear_140_567)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_140_567"
                  x1="0"
                  y1="2.4829"
                  x2="30"
                  y2="2.4829"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#49DE82"></stop>
                  <stop offset="1" stopColor="#15B4C5"></stop>
                </linearGradient>
              </defs>
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <div className={seCss.join__us__on}>
        <div className={seCss.label}>Join us on</div>
        <a className={seCss.join__on__discord}>
          <svg
            style={{ marginRight: 15 }}
            className="MuiSvgIcon-root jss79"
            focusable="false"
            viewBox="0 0 48 36"
            aria-hidden="true"
            width="48"
            height="36"
          >
            <path
              d="M39.9826 2.9842C36.9723 1.60295 33.7442 0.585295 30.369 0.00244498C30.3075 -0.00880385 30.2461 0.0193076 30.2145 0.0755318C29.7993 0.813931 29.3394 1.77723 29.0174 2.53438C25.3872 1.9909 21.7756 1.9909 18.2198 2.53438C17.8977 1.7604 17.4211 0.813931 17.0041 0.0755318C16.9724 0.0211835 16.911 -0.00692794 16.8496 0.00244498C13.4762 0.583433 10.2481 1.60108 7.23597 2.9842C7.2099 2.99545 7.18754 3.0142 7.17271 3.03855C1.04968 12.1862 -0.627674 21.1091 0.19518 29.9213C0.198903 29.9644 0.223105 30.0056 0.256615 30.0318C4.29641 32.9986 8.20965 34.7996 12.0502 35.9934C12.1117 36.0122 12.1768 35.9897 12.2159 35.9391C13.1244 34.6985 13.9342 33.3903 14.6286 32.0146C14.6696 31.9341 14.6305 31.8385 14.5467 31.8066C13.2622 31.3194 12.039 30.7252 10.8625 30.0506C10.7694 29.9962 10.762 29.8631 10.8476 29.7994C11.0952 29.6139 11.3428 29.4208 11.5792 29.2259C11.622 29.1903 11.6816 29.1828 11.7319 29.2053C19.4615 32.7343 27.8296 32.7343 35.468 29.2053C35.5183 29.1809 35.5779 29.1885 35.6225 29.224C35.859 29.419 36.1066 29.6139 36.3561 29.7994C36.4417 29.8631 36.4361 29.9962 36.343 30.0506C35.1665 30.7383 33.9433 31.3194 32.6569 31.8048C32.5732 31.8366 32.5359 31.9341 32.5769 32.0146C33.2862 33.3884 34.096 34.6965 34.9877 35.9372C35.025 35.9897 35.092 36.0122 35.1534 35.9934C39.0126 34.7996 42.9258 32.9986 46.9656 30.0318C47.001 30.0056 47.0234 29.9662 47.0271 29.9231C48.0119 19.7353 45.3776 10.8856 40.044 3.04041C40.0309 3.0142 40.0087 2.99545 39.9826 2.9842ZM15.7829 24.5555C13.4558 24.5555 11.5383 22.4191 11.5383 19.7953C11.5383 17.1714 13.4186 15.035 15.7829 15.035C18.1658 15.035 20.0647 17.1902 20.0274 19.7953C20.0274 22.4191 18.1471 24.5555 15.7829 24.5555ZM31.4766 24.5555C29.1496 24.5555 27.2321 22.4191 27.2321 19.7953C27.2321 17.1714 29.1123 15.035 31.4766 15.035C33.8596 15.035 35.7584 17.1902 35.7213 19.7953C35.7213 22.4191 33.8596 24.5555 31.4766 24.5555Z"
              fill="url(#paint0_linear_140_1532)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_140_1532"
                x1="0"
                y1="3.06585"
                x2="47.2305"
                y2="3.06585"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#49DE82"></stop>
                <stop offset="1" stopColor="#15B4C5"></stop>
              </linearGradient>
            </defs>
          </svg>
          Discord
        </a>
      </div>
    </section>
  )
}

const Home = () => {
  const { siteConfig } = useDocusaurusContext()
  const title = "Heapland"

  return (
    <PageLayout
      canonical=""
      description={siteConfig.customFields.description}
      title={title}
    >
      <Top />
      
      <FeaturesCards />
      <SupportDB />
      <FeaturesTiles />
      <Pricing />
      <GetStartedSec />
    </PageLayout>
  )
}

export default Home
