import React from 'react';
import { Table, TableHead, TableCell, TableRow } from '@material-ui/core';
import CheckCircle from '@material-ui/icons/CheckCircle';

class ListHead extends React.Component {
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow >
            <TableCell style={{paddingBottom: '0'}}>ToDo List</TableCell>
            <TableCell align="right" style={{paddingBottom: '0'}}>Done!</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    )
  }
}

 export default ListHead;