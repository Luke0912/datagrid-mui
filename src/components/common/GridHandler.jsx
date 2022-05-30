import { DataGrid } from "@mui/x-data-grid";

export const Grid = ({ rows, columns }) => {
  return <DataGrid rows={rows} columns={columns} />;
};
