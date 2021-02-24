import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  TableSortLabel,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  table: {
    "& thead th": {
      fontWeight: 500,
      fontSize: "16px",
      fontFamily: "Ubuntu, sans-serif",
      color: "#4d4e53",
      backgroundColor: "#FEFEFE",
      borderBottom: "1px solid #dae0e7",
      paddingLeft: 0,
    },
    "& tbody td": {
      fontWeight: 300,
      fontSize: "16px",
      borderBottom: "1px solid #eef1f4",
    },
    "& thead  th span": {
      paddingLeft: 28,
      borderLeft: "1px solid #e2e7ea",
    },
  },
}));

export default function useTable(records, headCells, filterFn) {
  const classes = useStyles();

  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState("id");

  const TblContainer = (props) => (
    <Table stickyHeader aria-label="sticky table" className={classes.table}>
      {props.children}
    </Table>
  );

  const TblHead = () => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(headCell.id);
                  }}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const recordsAfterPagingAndSorting = () => {
    return stableSort(filterFn.fn(records), getComparator(order, orderBy));
  };

  return {
    TblContainer,
    TblHead,
    recordsAfterPagingAndSorting,
  };
}
