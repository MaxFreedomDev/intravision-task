import React, { useCallback, useEffect, useState } from "react";
import SearchPanel from "./components/search-panel";
import ContentTable from "./components/content-table";
import Button from "../../common/button";
import { useActions } from "../../../hooks/use-action";
import ApplicationCreate from "./components/application-create";
import ApplicationChange from "./components/application-change";
import { useSelector } from "react-redux";

import styles from "./applications.module.css";

const Applications = () => {
  const { getPriorities, getStatuses, getTasks, getUsers } = useActions();
  const { statuses, users } = useSelector((state) => state.enums);
  const { taskId } = useSelector((state) => state.tasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [open, setOpen] = useState(false);

  const selectCreate = () => {
    setOpen(true);
    setSelectedTask(null);
  };
  const selectChange = (id) => {
    setOpen(false);
    setSelectedTask(id);
  };

  const memoizedInitialRequests = useCallback(async () => {
    await getPriorities();
    await getStatuses();
    await getUsers();
    await getTasks();
  }, []);

  useEffect(() => {
    memoizedInitialRequests();
  }, []);

  useEffect(() => {
    if (taskId) {
      setOpen(!open);
    }
  }, [taskId]);

  return (
    <div style={{ height: "100%" }}>
      <SearchPanel />
      <div className={styles.button}>
        <Button text="Создать заявку" onClick={selectCreate} />
      </div>
      <ContentTable setSelectedTask={selectChange} />
      {(open || selectedTask || taskId) && (
        <div className={styles.drawer}>
          {open && <ApplicationCreate setOpen={setOpen} />}
          {(selectedTask || taskId) && (
            <ApplicationChange
              selectedTask={selectedTask || taskId}
              setSelectedTask={setSelectedTask}
              statuses={statuses}
              users={users}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Applications;
