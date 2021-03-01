import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Select as MuiSelect } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  select: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    color: "#5c5f6a",
    "&:hover": {
      color: "#3796f8",
    },
  },
  selectMenu: {
    whiteSpace: "pre-wrap",
  },
  icon: {
    display: "none",
  },
}));

/**
 * @return {null}
 */

export default function Select({ value, data, onChange, style }) {
  const classes = useStyles();
  return (
    <MuiSelect
      className={classes.select}
      value={value}
      onChange={onChange}
      disableUnderline
      style={style}
      inputProps={{
        classes: {
          icon: classes.icon,
          selectMenu: classes.selectMenu,
        },
      }}
    >
      {data &&
        data.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
    </MuiSelect>
  );
}
