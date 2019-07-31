import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


class TaskInput extends React.Component {
  render() {
    return (
      <FormControl style={{display: 'inline-block'}}>
        <InputLabel htmlFor="my-input" >Add your task</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <Button variant="contained" size="small" style={{marginLeft: '10px', marginBottom: '5px'}}>
          <AddIcon />
          add
        </Button>
        <FormHelperText id="my-helper-text">Manage tasks to increase efficiency.</FormHelperText>
      </FormControl>
    );
  }
}

export default TaskInput;