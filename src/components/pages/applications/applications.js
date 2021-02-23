import React, { useEffect, useState } from "react";
import SearchPanel from "./components/search-panel";
import ContentTable from "./components/content-table";
import Button from "../../common/button";
import { useActions } from "../../../hooks/use-action";
import ApplicationCreate from "./components/application-create";

import styles from "./applications.module.css";

const Applications = () => {
  const { getPriorities, getStatuses, getTasks } = useActions();
  const [selectedTask, setSelectedTask] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getPriorities();
    getStatuses();
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchPanel />
      <div className={styles.button}>
        <Button text="Создать заявку" onClick={() => setOpen(true)} />
      </div>
      <ContentTable setSelectedTask={setSelectedTask} />
      {open && (
        <div className={styles.drawer}>
          <ApplicationCreate setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

export default Applications;
