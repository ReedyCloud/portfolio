import React, { useState } from "react";
import styles from "./Navbar.module.scss";

import NavItem from "./NavItem/NavItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={styles.Navbar}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className={styles.NavList}>
        {/* <li>
          <span>Bartosz Ciach</span>
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="angle-double-right"
            class="svg-inline--fa fa-angle-double-right fa-w-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
            />
          </svg>
        </li> */}
        <NavItem title="O Mnie" isActive={isOpen} />
        <NavItem title="Projekty" isActive={isOpen} />
        <NavItem title="Umiejętności" isActive={isOpen} />
        <NavItem title="Kontakt" isActive={isOpen} />
      </ul>
    </nav>
  );
};

export default Navbar;
