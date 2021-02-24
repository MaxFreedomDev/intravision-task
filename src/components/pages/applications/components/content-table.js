import React, { useState } from "react";
import useTable from "../../../common/use-table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";

const headCells = [
  {
    id: "id",
    disablePadding: true,
    label: "ID",
  },
  { id: "name", disablePadding: false, label: "Название" },
  { id: "statusName", disablePadding: false, label: "Статус" },
  { id: "executorName", disablePadding: false, label: "Исполнитель" },
];

const useStyles = makeStyles(() => ({
  tableContainer: {
    height: "calc(100% - 151px)",
  },
  TableRow: {
    "&:hover": {
      backgroundColor: "#fafafa",
      cursor: "pointer",
    },
  },
  nameCell: {
    maxWidth: 380,
    maxHeight: 40,
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
  },
  statusName: {
    fontSize: 12,
    color: "#FFFFFF",
    borderRadius: 22,
    textAlign: "center",
    width: "max-content",
    textTransform: "lowercase",
    padding: "3px 15px",
    maxWidth: 100,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  priorities: {
    display: "flex",
    alignItems: "center",
  },
  priority: {
    width: 5,
    height: 40,
    marginRight: 20,
  },
}));

const ContentTable = ({ setSelectedTask }) => {
  const classes = useStyles();
  const { tasks } = useSelector((state) => state.tasks);
  const { priorities, statuses } = useSelector((state) => state.enums);
  const [filterFn, setFilterFn] = useState({
    fn: (tasks) => {
      return tasks;
    },
  });
  const { TblContainer, TblHead, recordsAfterPagingAndSorting } = useTable(
    tasks,
    headCells,
    filterFn
  );

  return (
    <TableContainer className={classes.tableContainer}>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((row) => (
            <TableRow
              key={row.id}
              onClick={() => setSelectedTask(row.id)}
              className={classes.TableRow}
              hover
            >
              <TableCell size="small" width={60} style={{ paddingLeft: 6 }}>
                <div className={classes.priorities}>
                  <span
                    className={classes.priority}
                    style={{
                      backgroundColor: priorities.find(
                        (item) => item.id === row.priorityId
                      ).rgb,
                    }}
                  />
                  {row.id}
                </div>
              </TableCell>
              <TableCell size="small" width={350} style={{ paddingLeft: 28 }}>
                <div className={classes.nameCell}>{row.name}</div>
              </TableCell>
              <TableCell width={100} style={{ paddingLeft: 28 }}>
                <div
                  className={classes.statusName}
                  style={{
                    backgroundColor: statuses.find(
                      (item) => item.id === row.statusId
                    ).rgb,
                  }}
                >
                  {row.statusName}
                </div>
              </TableCell>
              <TableCell style={{ paddingLeft: 28 }}>
                {row.executorName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    </TableContainer>
  );
};

export default ContentTable;
