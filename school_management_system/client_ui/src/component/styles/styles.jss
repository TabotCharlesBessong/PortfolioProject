import { TableCell, TableRow, tableCellClasses } from "@mui/material";
import styled from "styled-components";

export const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)':{
    backgroundColor:"blue"
  },
  '&:last-child td,&:last-child th':{
    border:0
  }
}))

export const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]:{
    backgroundColor:"black",
    color:"white"
  },
  [`&.${tableCellClasses.body}`]:{
    fontSize:14
  }
}))