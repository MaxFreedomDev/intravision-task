import React, { useState } from "react";
import useTable from "../../../common/use-table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

const headCells = [
  {
    id: "id",
    disablePadding: true,
    label: "ID",
  },
  { id: "name", disablePadding: false, label: "Название" },
  { id: "status", disablePadding: false, label: "Статус" },
  { id: "executor", disablePadding: false, label: "Исполнитель" },
];

const items = [
  {
    id: 1,
    name: "Тра лал лала лалла",
    status: "открыта",
    executor: "Андрей Менеджеров",
  },
  {
    id: 2,
    name: "Ти лал ла лала",
    status: "закрыта",
    executor: "Иван Менеджеров",
  },
  {
    id: 3,
    name: "Куку реку",
    status: "в работе",
    executor: "Олег Менеджеров",
  },
];

const ContentTable = () => {
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, recordsAfterPagingAndSorting } = useTable(
    items,
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
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name} $</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.executor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    </div>
  );
};

export default ContentTable;
