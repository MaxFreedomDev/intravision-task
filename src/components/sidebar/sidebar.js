import React from "react";
import { SidebarData } from "./sidebar-data";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import { Link, withRouter } from "react-router-dom";

import styles from "./sidebar.module.css";

const Sidebar = ({ location, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.sidebar_list}>
          {SidebarData.map((item) => (
            <Link
              to={item.link}
              key={item.link}
              className={styles.row}
              id={location.pathname === item.link ? styles.active : ""}
            >
              <div id={styles.icon}>{item.icon}</div>
              <span id={styles.title}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default withRouter(Sidebar);
