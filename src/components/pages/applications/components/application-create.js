import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as Close } from "../../../../icons/close.svg";
import { useForm } from "react-hook-form";
import { useActions } from "../../../../hooks/use-action";
import moment from "moment";

const styles = () => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 62,
    backgroundColor: "#1a4876",
    padding: "0 40px",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: 500,
  },
  close: {
    cursor: "pointer",
  },
  form: {
    marginTop: 45,
    paddingLeft: "4%",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 15,
    marginTop: 20,
  },
  textarea: {
    width: "64%",
    border: "1px solid #e8e8e8",
    height: 85,
    padding: 10,
  },
  submit: {
    width: 150,
    height: 35,
    backgroundColor: "#008cf0",
    color: "#FFFFFF",
    borderRadius: 20,
    fontSize: "16px",
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 300,
    border: "none",
    marginTop: 75,
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    "&:hover": {
      backgroundColor: "#3796f8",
      cursor: "pointer",
    },
    "&:active": {
      outline: "none",
    },
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});

const ApplicationCreate = ({ classes, setOpen }) => {
  const { createTask } = useActions();
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const onSubmit = (data) => {
    const resolutionDatePlan = moment(new Date()).add(1, "day").toISOString();
    const task = {
      name: data.name,
      description: data.description,
      statusId: 50482,
      priorityId: 42068,
      resolutionDatePlan,
    };
    createTask(task);
    reset();
  };
  return (
    <div>
      <div className={classes.header}>
        <h3 className={classes.title}>Новая заявка</h3>
        <Close className={classes.close} onClick={() => setOpen(false)} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <label className={classes.label}>Название</label>
        <textarea
          className={classes.textarea}
          name="name"
          ref={register({
            validate: (value) => value !== "",
          })}
        />
        {errors.name && (
          <span className={classes.error}>Поле не может быть пустым</span>
        )}
        <label className={classes.label}>Описание</label>
        <textarea
          style={{ height: 135 }}
          className={classes.textarea}
          name="description"
          ref={register({
            validate: (value) => value !== "",
          })}
        />
        {errors.description && (
          <span className={classes.error}>Поле не может быть пустым</span>
        )}
        <input type="submit" value="Сохранить" className={classes.submit} />
      </form>
    </div>
  );
};

export default withStyles(styles)(ApplicationCreate);
