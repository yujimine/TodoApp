import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import CheckCircle from '@material-ui/icons/CheckCircle';
import TaskInput from './TaskInput';

class TaskList extends React.Component {
  render() {
    return (
      <ul style={{textAlign: 'left', marginLeft: '-20px'}}>
        {this.props.lists.map((todo, i) =>
          <li key={i} style={{margin: '5px 0'}}>{todo.item}
            <CheckCircle style={{height: '20px', marginLeft: '5px', marginRight: '20px', float: 'right'}} onClick={TaskInput.delList} />
          </li>
        )}
      </ul>
    );
  }
}

export default TaskList;