import clsx from "clsx"
import React from "react"
import seCss from "../css/section.module.css"
import abtCss from "../css/about/about.module.css"
import PageLayout from "../theme/PageLayout/index"

type IPersonCard = {
  imgBorderRadius?: string | number
  personPic?: string
  personName: string
  twitterLink?: string
  linkdinLink?: string
  personDesc?: string
  imageWidth: number | string
}

const PersonCard = (props: IPersonCard) => (
  <div className={clsx(abtCss.team__person__card, "margin-bottom--xl")}>
    <div
      className={clsx(abtCss.person__pic, "margin-bottom--sm")}
      style={{ width: props.imageWidth }}
    >
      <img
        src={props?.personPic}
        alt={props.personName}
        style={{ borderRadius: props.imgBorderRadius }}
      />
    </div>
    <div className={abtCss.person__card__body}>
      <div className={abtCss.person__info}>
        <div
          className={clsx(
            abtCss.person__name,
            "margin-right--md",
            "margin-bottom--xm",
          )}
        >
          {props.personName}
        </div>

        <div className={clsx(abtCss.person__social__icons)}>
          <a href={props.linkdinLink} target="_blank" rel="noreferrer">
            <img src="/img/pages/about/linkedin.svg" alt="linkedin" />
          </a>
          <a href={props.twitterLink} target="_blank" rel="noreferrer">
            <img src="/img/pages/about/twitter.svg" alt="linkedin" />
          </a>
        </div>
      </div>
      <div className={abtCss.person__desc}>{props.personDesc}</div>
    </div>
  </div>
)

const AboutTop = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={clsx(abtCss.about__top)}>
      <h1 className={abtCss.about__title}>Our Story</h1>
      <p className={clsx(abtCss.about__desc)}>
        It all started, when Shad and Arshi met each other. Shad was working as
        Software engineer in Informatica, while Arshi was exploring her passion
        for design. Frustrated with user experience of distributed applications,
        Shad shared his vision to bring the same user experience for distributed
        applications, as it was for any native desktop application.
      </p>
      <p className={abtCss.about__desc}>
        After working with dozen of open source tools in the Big Data world, we
        finally decided to focus on two of the most commonly used open source
        tools - <b>Apache Spark </b>and <b>Hadoop</b>
      </p>
      <p className={abtCss.about__desc}>
        We hope that our endevaour will ease the pain of students, trainers,
        developers and engineering managers in learning and leveraging the power
        of open source tools.
      </p>
    </div>
  </section>
)

const TeamList = () => (
  <section className={clsx(seCss.section, seCss["section--center"])}>
    <div className={clsx(abtCss.about__team__sec)}>
      <div
        className={clsx(
          seCss.has__divider,
          seCss.padding__bottom__3,
          seCss.margin__bottom__3,
        )}
      >
        <h1 className={clsx(abtCss.team__title, "margin-bottom--md")}>Team</h1>
        <p className={abtCss.team__desc}>
          Our Team has a combined experience of more than a decade, but more
          than that we have an innate passion for developing great user
          experience for all the software engineers out there.
        </p>
      </div>
      <div className={clsx(abtCss.team__list__container, "container")}>
        <div className={clsx("row", abtCss.team__list__row)}>
          <div className={clsx(abtCss.team__list__col)}>
            <PersonCard
              twitterLink="https://twitter.com/ShadAmez"
              linkdinLink="https://linkedin.com/in/shadamez"
              imageWidth={150}
              personName="Shad Amez"
              personDesc="Co-Founder, Full stack engineer"
              personPic="/img/pages/about/shad.png"
            />
          </div>
          <div className={clsx(abtCss.team__list__col)}>
            <PersonCard
              twitterLink="https://twitter.com/Arshizz"
              linkdinLink="https://www.linkedin.com/in/ashayesta/"
              imageWidth={150}
              personName="Arshi Shayesta"
              personDesc="Co-Founder, Designer"
              personPic="/img/pages/about/arshi.jpeg"
            />
          </div>
          <div className={clsx(abtCss.team__list__col)}>
            <PersonCard
              twitterLink="https://twitter.com/Shadab19it"
              linkdinLink="https://www.linkedin.com/in/shadabalm/"
              imageWidth={150}
              personName="Shadab Alam"
              personDesc="Founding Engineer, React Developer"
              personPic="/img/pages/about/shadab.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

// const Investors = () => (
//   <section
//     className={clsx(
//       seCss.section,
//       seCss["section--center"],
//       seCss["section--odd"],
//     )}
//   >
//     <div className={clsx(abtCss.about__investors__sec)}>
//       <div
//         className={clsx(
//           seCss.has__divider,
//           seCss.padding__bottom__3,
//           seCss.margin__bottom__3,
//         )}
//       >
//         <h1 className={clsx(abtCss.investor__title, "margin-bottom--none")}>
//           Our investors
//         </h1>
//       </div>
//       <div
//         className={clsx(
//           abtCss.investors__list__container,
//           "container",
//           "padding-left--none",
//           "padding-right--none",
//         )}
//       >
//         <div className={clsx("row", abtCss.investors__list__row)}>
//           <div className={clsx("col col--4")}>
//             <PersonCard
//               imageWidth={100}
//               twitterLink="#"
//               linkdinLink="#"
//               imgBorderRadius={8}
//               personName="Shad"
//               personDesc="CEO of Gigahex"
//               personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//             />
//           </div>
//           <div className={clsx("col col--4")}>
//             <PersonCard
//               imageWidth={100}
//               imgBorderRadius={8}
//               personName="Shad"
//               personDesc="CEO of Gigahex"
//               personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//             />
//           </div>
//           <div className={clsx("col col--4")}>
//             <PersonCard
//               imageWidth={100}
//               imgBorderRadius={8}
//               twitterLink="#"
//               linkdinLink="#"
//               personName="Shad"
//               personDesc="CEO of Gigahex"
//               personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )

const About = () => {
  return (
    <PageLayout canonical="/about" description="" title="About Us">
      <AboutTop />
      <TeamList />
    </PageLayout>
  )
}

export default About
