import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ReactComponent as SearchIcon } from "../../../../icons/search.svg";

const styles = () => ({
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 17,
    height: 65,
    width: "100%",
    backgroundColor: "#d1e0ed",
    boxShadow: "0 3px 7px #e9e9e9",
  },
  textField: {
    margin: 0,
    border: "none",
  },
  input: {
    height: 40,
    width: 680,
    borderRadius: 20,
    border: "none",
    outline: "none",
    backgroundColor: "#ffffff",
    fontSize: 16,
    fontFamily: "Roboto Regular",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 0 7px #42aaff",
    },
  },
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#42aaff",
    },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#42aaff",
    },
    "&$cssFocused $notchedOutline": {
      borderColor: "#42aaff",
    },
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {},
});

const SearchPanel = ({ classes }) => {
  return (
    <div className={classes.container}>
      <TextField
        className={classes.textField}
        placeholder="Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки"
        variant="outlined"
        margin="normal"
        InputProps={{
          className: classes.input,
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default withStyles(styles)(SearchPanel);
