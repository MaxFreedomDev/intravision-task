import React, { useState } from "react";
import useTable from "../../../common/use-table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";

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
  },
  statusName: {
    fontSize: 12,
    maxWidth: 100,
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
    <div>
      {" "}
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((row) => (
            <TableRow
              key={row.id}
              onClick={() => setSelectedTask(row.id)}
              className={classes.TableRow}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell className={classes.nameCell}>{row.name}</TableCell>
              <TableCell>
                <div className={classes.statusName}>{row.statusName}</div>
              </TableCell>
              <TableCell>{row.executorName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    </div>
  );
};

export default ContentTable;
