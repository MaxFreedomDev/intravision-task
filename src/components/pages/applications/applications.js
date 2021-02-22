import React from "react";
import SearchPanel from "./components/search-panel";
import ContentTable from "./components/content-table";
import Button from "../../common/button";

import styles from "./applications.module.css";

const Applications = () => {
  return (
    <div>
      <SearchPanel />
      <div className={styles.button}>
        <Button text="Создать заявку" />
      </div>
      <ContentTable />
    </div>
  );
};

export default Applications;
