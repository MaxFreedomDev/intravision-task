import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#008cf0",
    color: "#FFFFFF",
    borderRadius: 20,
    fontSize: "16px",
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 300,
    "&:hover": {
      backgroundColor: "#3796f8",
    },
  },
  label: {
    textTransform: "none",
  },
}));

export default function Button(props) {
  const { text, size, color, variant, onClick, type, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      type={type}
      variant={variant || "contained"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}
