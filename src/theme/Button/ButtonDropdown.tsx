// import clsx from "clsx"
import clsx from "clsx"
import React, { ReactNode } from "react"
import drpCss from "./ButtonDropdown.module.css"

type ImenuItems = {
  item: string
  link: string
}

type IButtonDropdown = {
  icon?: ReactNode
  children?: string
  className?: string
  dropdownBtnClass?: string
  menuItems: ImenuItems[]
}

const ButtonDropdown = (props: IButtonDropdown) => {
  return (
    <div
      className={clsx(
        "navbar__item dropdown dropdown--hoverable dropdown--right",
        drpCss.dropdown__wrapper,
        props.className,
      )}
    >
      <a
        className={clsx(
          "navbar__link",
          drpCss.dropdown__btn,
          props.dropdownBtnClass,
        )}
        href="#url"
        style={{ height: 40 }}
      >
        <div>{props.icon}</div>
        <div> {props.children}</div>
      </a>
      {props.menuItems?.length > 0 && (
        <ul className="dropdown__menu">
          {props.menuItems.map((item, i) => (
            <li key={i}>
              <a className="dropdown__link" href={item.link}>
                {item.item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ButtonDropdown
