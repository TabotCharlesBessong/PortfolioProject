import { TableCell, TableRow, tableCellClasses } from "@mui/material";
import styled from "styled-components";

export const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)':{
    backgroundColor:theme.pallete.action.hover
  },
  '&:last-child td,&:last-child th':{
    border:0
  }
}))

export const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]:{
    backgroundColor:theme.pallete.common.black,
    color:theme.pallete.common.white
  },
  [`&.${tableCellClasses.body}`]:{
    fontSize:14
  }
}))