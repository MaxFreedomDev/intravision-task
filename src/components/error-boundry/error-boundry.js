import React from "react";
import { useActions } from "../../hooks/use-action";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "../common/button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    textAlign: "center",
  },
  actions: {
    justifyContent: "center",
    paddingBottom: 15,
  },
  btn: {
    height: 30,
  },
}));

const ErrorBoundry = (props) => {
  const { setError } = useActions();
  const { error } = useSelector((state) => state.tasks);
  const classes = useStyles();

  const handleClose = () => {
    setError(null);
  };

  return (
    <>
      <Dialog
        open={error !== null}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.title}>{"Ошибка сервера"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{error}</DialogContentText>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} text="ОК" className={classes.btn} />
        </DialogActions>
      </Dialog>
      {props.children}
    </>
  );
};

export default ErrorBoundry;
