import React, { useEffect } from "react";
import SearchPanel from "./components/search-panel";
import ContentTable from "./components/content-table";
import Button from "../../common/button";
import { useActions } from "../../../hooks/use-action";

import styles from "./applications.module.css";
import { useSelector } from "react-redux";

const Applications = () => {
  const { getPriorities, getStatuses } = useActions();
  const { priorities, statuses } = useSelector((state) => state.enums);

  console.log("priorities:", priorities, "statuses:", statuses);

  useEffect(() => {
    getPriorities();
    getStatuses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
