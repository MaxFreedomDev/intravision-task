import React, { useState } from "react";
import useTable from "../../../common/use-table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Loader from "../../../loader/loader";

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

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    height: "calc(100% - 151px)",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
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

const statusColor = (statuses, status) => {
  return statuses.find((item) => item.id === status).rgb;
};

const ContentTable = ({ setSelectedTask, selectedTask, open }) => {
  const classes = useStyles();
  const { tasks, loading } = useSelector((state) => state.tasks);
  const { statuses } = useSelector((state) => state.enums);
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

  if (loading) {
    return <Loader height="calc(100% - 151px)" />;
  }

  return (
    <TableContainer
      className={classes.tableContainer}
      style={{ width: open || selectedTask ? "38%" : "auto" }}
    >
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
                      backgroundColor: statusColor(statuses, row.statusId),
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
                    backgroundColor: statusColor(statuses, row.statusId),
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
