import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
// import TextLoop from "react-text-loop"
// import ReactTypingEffect from "react-typing-effect"

import Button from "@theme/Button"
import PageLayout from "@theme/PageLayout"
// import FeaturesTiles from "../component/FeaturesTiles"
// import ButtonDropdown from "../theme/Button/ButtonDropdown"

import ftrClsCss from "../css/index/footerConsole.module.css"
import juCss from "../css/index/jumbotron.module.css"
import wthCss from "../css/index/watch.module.css"
import ftuCss from "../css/index/ftuCard.module.css"
import seCss from "../css/section.module.css"
import featTiles from "../css/index/featureTiles.module.css"

type IFeatureCard = {
  title: string
  desc: string
  icon: string
}

const FeatureCard = ({ title, desc, icon }: IFeatureCard) => {
  return (
    <div
      className={clsx(
        ftuCss.feature__card,
        "shadow--lw",
        "margin-bottom--lg",
        "padding--md",
      )}
    >
      <div className={clsx(ftuCss.feature__card__header, "margin-bottom--md")}>
        <div className={ftuCss.feature__icon}>
          <img src={icon} alt="Features tile icon 01" width={40} height={40} />
        </div>
        <h2 className={clsx(ftuCss.feature__title, "margin-bottom--none")}>
          {title}
        </h2>
      </div>
      <p className={ftuCss.feature__desc}>{desc}</p>
    </div>
  )
}
// odd section
const Top = () => {
  const dockerCmd = [""]

  // const { siteConfig } = useDocusaurusContext()

  const ubuntuCmd = [
    "sudo apt-get install postgresql postgresql-contrib default-jre",
    "curl -s https://packages.gigahex.com/nix.sh | bash",
  ]

  const macCmd = [
    " brew install postgresql java11",
    " curl -s https://packages.gigahex.com/mac.sh | bash",
  ]

  const windowCmd = [
    "wsl --install -d Ubuntu",
    "# Open Ubuntu app and login to the shell",
    "sudo apt-get install postgresql postgresql-contrib default-jre",
    "curl -s https://packages.gigahex.com/nix.sh | bash",
  ]

  const [copied, setCopied] = React.useState(false)
  const [osType, setOsType] = React.useState<{
    osName: string
    osLogo: any
    instgxcCmd: string[]
  }>({
    osName: "Mac",
    osLogo: "/img/pages/landing/appleIcon.svg",
    instgxcCmd: macCmd,
  })

  React.useEffect(() => {
    let id
    if (copied) {
      id = setTimeout(() => {
        setCopied(false)
      }, 600)
    }
    return () => clearTimeout(id)
  }, [copied])

  const onClickOs = (os: string) => {
    switch (os) {
      case "Docker":
        setOsType({
          osName: os,
          osLogo: "/img/docker.png",
          instgxcCmd: dockerCmd,
        })
        break
      case "Ubuntu":
        setOsType({
          osName: os,
          osLogo: "/img/pages/landing/ubuntu-logo.svg",
          instgxcCmd: ubuntuCmd,
        })
        break
      case "Mac":
        setOsType({
          osName: os,
          osLogo: "/img/pages/landing/appleIcon.svg",
          instgxcCmd: macCmd,
        })
        break
      case "Window":
        setOsType({
          osName: os,
          osLogo: "/img/pages/landing/microsoftLogo.svg",
          instgxcCmd: windowCmd,
        })
        break
    }
  }

  const getActiveTab = (os: string, selectedOs: string) => {
    if (os === selectedOs) {
      return "tabs__item--active"
    } else {
      return ""
    }
  }

  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--center"],
        seCss["section--odd"],
        juCss["hero-section"],
      )}
    >
      <div className={juCss.jumbotron}>
        <div className={juCss.jumbotron__center__title}>
          <h1
            className={clsx(
              seCss.section__title,
              seCss["section__title--jumbotron"],
              seCss["section__title--accent"],
            )}
            style={{ color: "#fff", textAlign: "center" }}
          >
            Open Source
            <br />
            Data Infrastructure Platform
          </h1>
          <p className={clsx(seCss["section__sub--title"])}>
            Now, creating and managing data infrastructure is as easy as
            ordering a pizza 🍕.
          </p>
        </div>
        <div className={clsx(juCss.jumbotron__image)}>
          {/* <img
            className=""
            src="/img/new-hero-gigahex-min.png"
            alt="Langing page Image"
          /> */}
        </div>
      </div>

      <div
        className={clsx(
          juCss.gigahex_installer_banner,
          seCss.section,
          seCss["section--center"],
        )}
      >
        <div className={clsx("row", juCss.gigahex_installer_container)}>
          <div className={clsx("col col--12")} style={{ padding: 0 }}>
            <ul className={clsx("tabs tabs--block", juCss.os_tabs_container)}>
              <li
                className={clsx(
                  "tabs__item",
                  juCss.os_tab,
                  getActiveTab("Mac", osType.osName),
                )}
                onClick={() => onClickOs("Mac")}
              >
                Mac
              </li>
              <li
                className={clsx(
                  "tabs__item",
                  juCss.os_tab,
                  getActiveTab("Window", osType.osName),
                )}
                onClick={() => onClickOs("Window")}
              >
                Window
              </li>
              <li
                className={clsx(
                  "tabs__item",
                  juCss.os_tab,
                  getActiveTab("Ubuntu", osType.osName),
                )}
                onClick={() => onClickOs("Ubuntu")}
              >
                Ubuntu
              </li>
            </ul>
          </div>
          <div
            className={clsx(
              "col col--5",
              seCss["content--center"],
              juCss.installer__left__content,
            )}
          >
            <div className={clsx("row")}>
              {/* <div className={clsx("col col--4", seCss["content--center"])}>
                <div
                  className={clsx(juCss.docker__logo, seCss["content--center"])}
                >
                  <img
                    src={osType.osLogo}
                    width={100}
                    style={{
                      paddingRight: osType.osName === "Ubuntu" ? "10px" : "0",
                    }}
                    alt={osType.osName}
                  />
                </div>
              </div> */}
              <div className="col col--12">
                <h2 className={clsx(juCss.installer__title)}>
                  <span>Install Gigahex on {osType.osName}</span>
                </h2>
                <p
                  className={clsx(
                    "margin-bottom--none",
                    juCss.installer__feature,
                  )}
                >
                  <svg
                    width="1em"
                    height="1em"
                    version="1.1"
                    viewBox="0 0 752 752"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#A2E0A5"
                      d="m544.14 272.2c-2.5195-16.16-10.105-31.098-21.672-42.664-11.562-11.562-26.504-19.152-42.66-21.668-69.039-6.6914-138.57-6.6914-207.61 0-16.16 2.5156-31.098 10.105-42.664 21.668-11.562 11.566-19.152 26.504-21.668 42.664-6.6914 69.035-6.6914 138.55 0 207.59 2.5156 16.16 10.102 31.105 21.664 42.672 11.566 11.566 26.508 19.156 42.668 21.676 69.039 6.6914 138.57 6.6914 207.61 0 16.16-2.5195 31.102-10.109 42.664-21.676 11.566-11.566 19.152-26.512 21.668-42.672 6.6914-69.035 6.6914-138.55 0-207.59zm-62.07 60.426-103.11 116.22c-4.1953 4.6914-10.191 7.3828-16.484 7.3984h-0.12109c-6.2617 0.003906-12.234-2.6406-16.441-7.2812l-68.18-75.031c-4.1523-4.3281-6.375-10.148-6.168-16.137 0.21094-5.9922 2.832-11.645 7.2734-15.672 4.4375-4.0273 10.316-6.0898 16.301-5.7148 5.9805 0.375 11.559 3.1523 15.461 7.7031l51.531 56.77 86.738-97.676h0.003906c3.8906-4.4688 9.4062-7.1992 15.32-7.5781 5.9141-0.37891 11.734 1.6211 16.164 5.5547 4.4297 3.9336 7.1016 9.4766 7.4258 15.395 0.32031 5.918-1.7383 11.719-5.7148 16.109z"
                    />
                  </svg>
                  Be up and running in 60 seconds
                </p>
                <p
                  className={clsx(
                    "margin-bottom--none margin-bottom--md",
                    juCss.installer__feature,
                  )}
                >
                  <svg
                    width="1em"
                    height="1em"
                    version="1.1"
                    viewBox="0 0 752 752"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#A2E0A5"
                      d="m544.14 272.2c-2.5195-16.16-10.105-31.098-21.672-42.664-11.562-11.562-26.504-19.152-42.66-21.668-69.039-6.6914-138.57-6.6914-207.61 0-16.16 2.5156-31.098 10.105-42.664 21.668-11.562 11.566-19.152 26.504-21.668 42.664-6.6914 69.035-6.6914 138.55 0 207.59 2.5156 16.16 10.102 31.105 21.664 42.672 11.566 11.566 26.508 19.156 42.668 21.676 69.039 6.6914 138.57 6.6914 207.61 0 16.16-2.5195 31.102-10.109 42.664-21.676 11.566-11.566 19.152-26.512 21.668-42.672 6.6914-69.035 6.6914-138.55 0-207.59zm-62.07 60.426-103.11 116.22c-4.1953 4.6914-10.191 7.3828-16.484 7.3984h-0.12109c-6.2617 0.003906-12.234-2.6406-16.441-7.2812l-68.18-75.031c-4.1523-4.3281-6.375-10.148-6.168-16.137 0.21094-5.9922 2.832-11.645 7.2734-15.672 4.4375-4.0273 10.316-6.0898 16.301-5.7148 5.9805 0.375 11.559 3.1523 15.461 7.7031l51.531 56.77 86.738-97.676h0.003906c3.8906-4.4688 9.4062-7.1992 15.32-7.5781 5.9141-0.37891 11.734 1.6211 16.164 5.5547 4.4297 3.9336 7.1016 9.4766 7.4258 15.395 0.32031 5.918-1.7383 11.719-5.7148 16.109z"
                    />
                  </svg>
                  Launch Spark and Kafka clusters
                </p>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "col col--7",
              seCss["content--center"],
              juCss.installer__right_content,
            )}
          >
            <div>
              {osType.instgxcCmd.map((cmd, i) => (
                <pre key={i} className={clsx(juCss.container_code)}>
                  {cmd.startsWith("#") && (
                    <>
                      <code
                        className={clsx(juCss.container_code, juCss.code_gray)}
                      >
                        {cmd}
                      </code>
                    </>
                  )}
                  {!cmd.startsWith("#") && (
                    <>
                      <span className={juCss.doller__sign}>$</span>
                      <code className={clsx(juCss.container_code)}>{cmd}</code>
                    </>
                  )}
                </pre>
              ))}

              <Button
                className={clsx(juCss.actionbtn, juCss.cmd__copy__btn)}
                uppercase={false}
                onClick={async () => {
                  await navigator.clipboard
                    .writeText(osType.instgxcCmd.join("\n"))
                    .then()
                  setCopied(true)
                }}
                size="small"
              >
                {copied ? (
                  <>
                    COPIED{" "}
                    <svg
                      width="2.5em"
                      height="2.5em"
                      version="1.1"
                      viewBox="0 0 752 752"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fff"
                        d="m544.14 272.2c-2.5195-16.16-10.105-31.098-21.672-42.664-11.562-11.562-26.504-19.152-42.66-21.668-69.039-6.6914-138.57-6.6914-207.61 0-16.16 2.5156-31.098 10.105-42.664 21.668-11.562 11.566-19.152 26.504-21.668 42.664-6.6914 69.035-6.6914 138.55 0 207.59 2.5156 16.16 10.102 31.105 21.664 42.672 11.566 11.566 26.508 19.156 42.668 21.676 69.039 6.6914 138.57 6.6914 207.61 0 16.16-2.5195 31.102-10.109 42.664-21.676 11.566-11.566 19.152-26.512 21.668-42.672 6.6914-69.035 6.6914-138.55 0-207.59zm-62.07 60.426-103.11 116.22c-4.1953 4.6914-10.191 7.3828-16.484 7.3984h-0.12109c-6.2617 0.003906-12.234-2.6406-16.441-7.2812l-68.18-75.031c-4.1523-4.3281-6.375-10.148-6.168-16.137 0.21094-5.9922 2.832-11.645 7.2734-15.672 4.4375-4.0273 10.316-6.0898 16.301-5.7148 5.9805 0.375 11.559 3.1523 15.461 7.7031l51.531 56.77 86.738-97.676h0.003906c3.8906-4.4688 9.4062-7.1992 15.32-7.5781 5.9141-0.37891 11.734 1.6211 16.164 5.5547 4.4297 3.9336 7.1016 9.4766 7.4258 15.395 0.32031 5.918-1.7383 11.719-5.7148 16.109z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    COPY COMMANDS{" "}
                    <img src="/img/icons/copy.svg" width={40} alt="" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// even section
const FeaturesCard = () => {
  return (
    <section
      className={clsx(
        ftuCss.features__sec,
        seCss.section,
        ftuCss.features__light,
        seCss["section--center"],
      )}
    >
      <div className={clsx(ftuCss.features__top__info, "text--center")}>
        <h2 className={clsx(seCss.section__title, "padding-bottom--md")}>
          Designed for developers, built for speed.
        </h2>
        {/* <p className={clsx(seCss.section__subtitle)}></p> */}
      </div>
      <div className="container">
        <div className={clsx("row", ftuCss.features__row)}>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Fast development"
              desc="Bootstrap single node Spark, Kafka and HDFS cluster under a minute"
              icon="/img/pages/landing/feature-tile-icon-01.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Complete cluster control"
              desc="Launch an interactive spark-shell, view Kafka messages and browse HDFS. "
              icon="/img/pages/landing/feature-tile-icon-02.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Open Source driven"
              desc="Creating software in open communities is the
              de facto standard for building impactful software"
              icon="/img/pages/landing/feature-tile-icon-03.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Developer Focused"
              desc="Focus on developing and deploying applications, and not on complex infrastructure management"
              icon="/img/pages/landing/feature-tile-icon-04.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Manage multiple clusters"
              desc="Manage and monitor data infrastructure through a single interface. No switching across different windows."
              icon="/img/pages/landing/container.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Move to production faster"
              desc="Develop and test locally and deploy to production with complete confidence"
              icon="/img/pages/landing/deploy.svg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
// odd section
const FooterConsole = () => {
  return (
    <section
      style={{ display: "none" }}
      className={clsx(
        seCss.section,
        seCss["section--center"],
        seCss["section--odd"],
      )}
    >
      <div
        className={clsx(
          seCss.section__footer,
          seCss["section__footer--console"],
        )}
      >
        <div
          className={clsx(ftrClsCss.footerCol, ftrClsCss.footer__console__left)}
        >
          <h2 className={ftrClsCss.flashy__title}>And Manage deployments</h2>
          <p className={clsx(ftrClsCss.flashy__content, "margin-bottom--lg")}>
            There&lsquo;s more. You can also have multiple deployments
            configuration to test your application against different cluster
            managers.
          </p>
        </div>

        <div
          className={clsx(
            ftrClsCss.footerCol,
            ftrClsCss.footer__console__right,
          )}
        >
          <div className={clsx(ftrClsCss.console__right__image)}>
            <img
              className="shadow--md"
              src="/img/pages/landing/deployments.png"
              alt="landing page image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
// even section
const WatchInDemo = () => (
  <section
    style={{ display: "none" }}
    className={clsx(
      seCss.section,
      seCss["section--center"],
      seCss["section--light"],
    )}
  >
    <div className={clsx(wthCss.watch__sec)}>
      <h2
        className={clsx(
          wthCss.watch__title,
          seCss.section__title,
          "text--center",
        )}
      >
        Watch it in action
      </h2>
      <div className={clsx("container", wthCss.video__container)}>
        <div
          style={{
            position: "relative",
            paddingBottom: "59.715025906735754%",
            height: 0,
          }}
        >
          <video
            controls
            poster="/img/hero-banner.png"
            src="video.mp4"
            width="100%"
            autoPlay
          >
            Your browser does not support the HTML5 Video element.
          </video>
        </div>
      </div>
    </div>
  </section>
)

// odd section
const FeaturesTiles = () => (
  <section
    className={clsx(
      seCss.section,
      seCss["section--center"],
      seCss["section--odd"],
      "padding-top--xl padding-bottom--lg",
    )}
  >
    <div className={clsx(featTiles.features__tiles__top)}>
      <div
        className={clsx(
          featTiles.features__tiles__jumbotron,
          "padding-bottom--md",
        )}
      >
        <h1
          className={clsx(seCss.section__title, "text--center")}
          style={{ color: "#fff" }}
        >
          Data Platform that saves thousands of developers&rsquo; hours
        </h1>
      </div>
    </div>
    <div className={clsx(seCss.section, featTiles.features__tiles__container)}>
      <div className={clsx(featTiles.features__tiles__row)}>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2
            className={clsx(featTiles.feature__tile__cont__title)}
            style={{ color: "#fff" }}
          >
            Launch Sandbox clusters
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#fff" }}>Fast provisioning. </b> Launch single
            node clusters on your desktop under a minute.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#fff" }}>Focus on development.</b> Forget the
            mess of bootstrapping and managing clusters on your own.
          </p>
        </div>
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/build-cluster.png"
              alt="Choose cluster"
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          featTiles.features__tiles__row,
          featTiles.fetaure__tiles_light,
        )}
      >
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/browse-hdfs.png"
              alt="Features split 02"
            />
          </div>
        </div>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2 className={featTiles.feature__tile__cont__title}>
            HDFS For Storage
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#000" }}>Browse HDFS.</b> With easy to use file
            browser, you can now quickly drill down to the actual location of
            the file.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#000" }}>Upload Files.</b> Drag and drop
            multiple files of any format to quickly test your data pipeline.
          </p>
        </div>
      </div>
      <div className={clsx(featTiles.features__tiles__row)}>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2
            className={featTiles.feature__tile__cont__title}
            style={{ color: "#fff" }}
          >
            Kafka as Message broker
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#fff" }}>Explore Messages.</b> Kafka Messages
            are now easy to browse, helping you to quickly test your stream
            processing program.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#fff" }}>Topic Insights.</b> List all topic
            configs, check how much disk size is consumed for a respective topic
            or partition on the broker or find out how many messages exist in
            your topic.
          </p>
        </div>
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/kafka-msgs.png"
              alt="Features split 03"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Home = () => {
  const { siteConfig } = useDocusaurusContext()
  const title = "Gigahex"

  return (
    <PageLayout
      canonical=""
      description={siteConfig.customFields.description}
      title={title}
    >
      <Top />
      <FeaturesCard />
      <FeaturesTiles />
      <WatchInDemo />
      <FooterConsole />
    </PageLayout>
  )
}

export default Home
