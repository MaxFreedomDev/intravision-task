import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as Close } from "../../../../icons/close.svg";
import { useActions } from "../../../../hooks/use-action";
import { useSelector } from "react-redux";
import Button from "../../../common/button";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { ReactComponent as Calendar } from "../../../../icons/calendar.svg";
import moment from "moment";
import "moment/locale/ru";
import Loader from "../../../loader/loader";
moment.locale("ru");

const styles = () => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "max-content",
    minHeight: 32,
    backgroundColor: "#1a4876",
    padding: "15px 40px",
  },
  headerTitle: {
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    width: "90%",
  },
  close: {
    cursor: "pointer",
    minWidth: 16,
  },
  titleId: {
    whiteSpace: "nowrap",
    fontWeight: 400,
    fontSize: 18,
    marginRight: 25,
  },
  titleName: {
    fontSize: 16,
    fontWeight: 300,
    /*    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    "-webkit-line-clamp": 2,*/
  },
  content: {
    display: "flex",
    height: "calc(100% - 62px)",
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    marginTop: 30,
    padding: "0 4%",
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
    borderLeft: "1px solid #d7dce0",
    paddingLeft: "2.6%",
    marginTop: 30,
  },
  textarea: {
    marginTop: "35px",
    border: "none",
    height: 75,
    backgroundColor: "inherit",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F2F7F9",
    },
  },
  btn: {
    width: 150,
    height: 36,
    marginBottom: 38,
    marginTop: 25,
  },
  commentsWrapper: {
    height: 400,
    overflowY: "auto",
    overflowX: "hidden",
  },
  commentContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "14px 0 0 12px",
    width: "100%",
  },
  comment: {
    padding: 10,
    border: "1px solid #dce3e9",
    backgroundColor: "#e3e9f4",
    height: "max-content",
    borderRadius: 5,
    width: "calc(100% - 30px)",
  },
  commentItemName: {
    fontFamily: "Ubuntu, sans-serif",
    textTransform: "uppercase",
    color: "#5c5f6a",
    fontWeight: 600,
    marginBottom: 12,
  },
  commentItemDate: {
    color: "#888c9d",
    fontSize: 12,
    fontWeight: 500,
  },
  dot: {
    display: "inline-block",
    minHeight: 11,
    minWidth: 11,
    borderRadius: "50%",
    marginRight: 10,
  },
  tags: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
    height: 300,
    overflowY: "auto",
  },
  tag: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    border: "1px solid #9da1aa",
    color: "#9da1aa",
    fontSize: 12,
    width: "max-content",
    padding: "3px 10px",
    marginBottom: 5,
  },
  label: {
    marginBottom: 10,
  },
  item: {
    marginBottom: 30,
    color: "#131313",
  },
  selectUser: {
    marginBottom: 30,
    color: "#1974d2",
  },
  error: {
    color: "red",
  },
});

const ApplicationChange = ({
  classes,
  setSelectedTask,
  selectedTask,
  statuses,
  users,
}) => {
  const { getTask, taskRequest, setTaskId, updateTask } = useActions();
  const { task } = useSelector((state) => state.tasks);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getTask(selectedTask);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTask]);

  const onClose = () => {
    setSelectedTask(null);
    taskRequest(null);
    setTaskId(null);
  };

  const changeStatus = (value) => {
    const status = statuses.find((el) => el.name === value);
    const newStatus = {
      statusId: status.id,
      statusName: status.name,
      statusRgb: status.rgb,
    };
    const newTask = { ...task, ...newStatus };
    updateTask(newTask);
  };
  const changeExecutor = (value) => {
    const executor = users.find((el) => el.name === value);
    const newExecutor = {
      executorId: executor.id,
      executorName: executor.name,
    };
    const newTask = { ...task, ...newExecutor };
    updateTask(newTask);
  };
  const addComment = () => {
    const newTask = { ...task, comment };
    if (comment === "") {
      setError(true);
    } else {
      setError(false);
      setComment("");
      updateTask(newTask);
    }
  };

  if (!task) {
    return <Loader />;
  }

  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerTitle}>
          <span className={classes.titleId}>№ {task.id}</span>
          <span className={classes.titleName}>{task.name}</span>
        </div>
        <Close className={classes.close} onClick={onClose} />
      </div>
      <div className={classes.content}>
        <div className={classes.leftContent}>
          <label>Описание</label>
          <p>{task.description}</p>
          <textarea
            className={classes.textarea}
            placeholder="Добавление комментариев"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onBlur={() => setError(false)}
          />
          {error && comment === "" && (
            <span className={classes.error}>Поле не должно быть пустым</span>
          )}
          <Button
            text="Сохранить"
            className={classes.btn}
            onClick={addComment}
          />
          <div className={classes.commentsWrapper}>
            {task.lifetimeItems.map((item) => (
              <Box display="flex" key={item.id} mt={1}>
                <Avatar />
                <div className={classes.commentContainer}>
                  <span className={classes.commentItemName}>
                    {item.userName}
                  </span>
                  <span className={classes.commentItemDate}>
                    {moment(item.createdAt).format("DD MMMM, HH:mm ")}
                    прокомментировал
                  </span>
                  {item.comment && (
                    <p className={classes.comment}>{item.comment}</p>
                  )}
                </div>
              </Box>
            ))}
          </div>
        </div>
        <div className={classes.rightContent}>
          <Box display="flex" alignItems="center" mb={5}>
            <span
              className={classes.dot}
              style={{ backgroundColor: `${task.statusRgb}` }}
            />
            <select
              defaultValue={task.statusName}
              className={classes.select}
              onChange={(e) => changeStatus(e.target.value)}
            >
              {statuses.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </Box>
          <label className={classes.label}>Заявитель</label>
          <span style={{ marginBottom: 50 }}>{task.initiatorName}</span>
          <label className={classes.label}>Создана</label>
          <span className={classes.item}>
            {moment(task.createdAt).format("DD.MM.YYYY г.")}
          </span>
          <label className={classes.label}>Исполнитель</label>
          <select
            defaultValue={task.executorName}
            className={classes.selectUser}
            onChange={(e) => changeExecutor(e.target.value)}
          >
            {users.map((item) => (
              <option key={item.id}>{item.name}</option>
            ))}
          </select>
          <label className={classes.label}>Приоритет</label>
          <span className={classes.item}>{task.priorityName}</span>
          <label className={classes.label}>Срок</label>
          <span className={classes.item}>
            <Calendar />{" "}
            {moment(task.resolutionDatePlan).format("DD.MM.YYYY г.")}
          </span>
          <label>Теги</label>
          <div className={classes.tags}>
            {task.tags.map((item) => (
              <div key={item.id} className={classes.tag}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(ApplicationChange);
