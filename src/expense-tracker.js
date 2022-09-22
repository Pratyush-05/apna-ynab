import * as React from "react";
import "./expense-tracker.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { randomCreatedDate } from "@mui/x-data-grid-generator";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    headerClassName: "header-design",
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 130,
    headerClassName: "header-design",
  },
  {
    field: "category",
    type: "singleSelect",
    valueOptions: ["Food", "Need", "Luxury"],
    headerName: "Category",
    width: 150,
    editable: false,
    headerClassName: "header-design",
  },
  {
    field: "payee",
    headerName: "Payee",
    flex: 3,
    width: 150,
    editable: true,
    headerClassName: "header-design",
    minWidth: 150,
    maxWidth: 200,
  },
  {
    field: "memo",
    headerName: "Memo",
    flex:1,
    width: 300,
    editable: true,
    headerClassName: "header-design",
    minWidth: 150,
    maxWidth: 200,
  },

  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 150,
    editable: true,
    headerClassName: "header-design",
  },
];

const rows = [
  {
    id: 1,
    date: randomCreatedDate(),
    payee: "Himesh",
    category: "Food",
    memo: "Saman",
    amount: 100,
  },
  {
    id: 2,
    date: randomCreatedDate(),
    payee: "JD Tea",
    category: "Food",
    memo: "Chai Bar",
    amount: 25,
  },
  {
    id: 3,
    date: randomCreatedDate(),
    payee: "Afridi Fast Food",
    category: "Food",
    memo: "LIC Office",
    amount: 70,
  },
  {
    id: 4,
    date: randomCreatedDate(),
    payee: "House",
    category: "Need",
    memo: "Rent",
    amount: 2500,
  },
  {
    id: 5,
    date: randomCreatedDate(),
    payee: "D-Mart",
    category: "Need",
    memo: "Groceries",
    amount: 800,
  },
  {
    id: 6,
    date: randomCreatedDate(),
    payee: "Snow",
    category: "Luxury",
    memo: "Restaurants",
    amount: 500,
  },
  {
    id: 7,
    date: randomCreatedDate(),
    payee: "Movies",
    category: "Luxury",
    memo: "Not Bramhastra",
    amount: 75,
  },
];

export default function ExpenseTracker() {
  return (
    <Box sx={{ height: 400, width: "60hv", margin: "2rem" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
