import React, { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

const ItemList = ({ itemList, handleDelete, searchKeyword }) => {
  const styles = useStyles();

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(itemList);
  }, [itemList]);

  useEffect(() => {
    const arr = itemList.filter(item => item.name.includes(searchKeyword));
    setList(arr);
  }, [searchKeyword]);

  const renderList = () =>
    list.map((item, i) => (
      <StyledTableRow key={i}>
        <StyledTableCell component="th" scope="row">{item.name}</StyledTableCell>
        <StyledTableCell align="center">{item.qty}</StyledTableCell>
        <StyledTableCell align="center">
          <FaRegTrashAlt onClick={e => handleDelete(item.name, item.qty)} />
        </StyledTableCell>
      </StyledTableRow>
    ));

  return (
    <>
      {list.length > 0 && (
        <TableContainer>
          <Table className={styles.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderList()}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ItemList;
