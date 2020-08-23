import React from "react";
import styles from "./NavItem.module.scss";
import { classNames } from "../../../utils/helpers";

const NavItem = ({ title, isActive }) => {
  let NavTitleActive = isActive ? styles.NavTitleActive : null;
  return (
    <li className={styles.NavItem}>
      <svg
        className={styles.NavSvg}
        aria-hidden="true"
        data-prefix="fas"
        data-icon="bowling-ball"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
      >
        <path
          fill="currentColor"
          d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM120 192c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-96c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm48 144c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
        />
      </svg>
      {title && (
        <span className={classNames(styles.NavTitle, NavTitleActive)}>
          {title}
        </span>
      )}
    </li>
  );
};

NavItem.defaultProps = {
  title: "",
};

export default NavItem;
