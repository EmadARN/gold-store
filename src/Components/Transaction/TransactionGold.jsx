import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import * as locales from "@mui/material/locale";
import { Container } from "@mui/material";

const columns = [
  { id: "name", minWidth: 170 },
  { id: "price", label: "مبلغ", minWidth: 100 },
  { id: "weight", label: "گرم", minWidth: 100 },
  {
    id: "history",
    label: "تاریخ",
    minWidth: 100,
    align: "Center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, price, weight, history) {
  return { name, price, weight, history };
}

const rows = [
  createData("خرید طلا", "11,111,111", 500, "1399/05/15 "),
  createData("فروش طلا", "3,331,311", 1000, "1399/05/15 "),
];

export default function TransactionGold() {
  const [locale, setLocale] = React.useState("faIR");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme]
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={themeWithLocale}>
      <Container maxWidth={"md"}>
        <Paper
          sx={{
            width: "100%",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
          }}
        >
          <TableContainer
            sx={{ maxHeight: 440, bgcolor: "#272523", color: "#fff" }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{ bgcolor: "#272523", color: "#fff" }}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{ color: "#fff" }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            sx={{
              bgcolor: "#272523",
              width: "100%",
              color: "#fff",
              "& .MuiButtonBase-root, .MuiSvgIcon-root ": {
                color: "#fff",
              },
            }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}