import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TaskList from './TaskList';
import ListHead from './ListHead';


class TaskInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      values: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e){
    this.setState({
      values: e.target.value
    });
    e.preventDefault();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    if(this.state.values !== '') {
      this.state.todo.push({
        item: this.state.values
      });
      this.setState({
        todo: this.state.todo
      });
      
      // リセット
      this.state.values = ''
    }
  }
  
  delList(i) {
    this.state.todo.splice(i, 1);
    // 保存
    this.setState({
      todo : this.state.todo
    });
    console.log(1);
  }
  
  render() {
    return (
      <FormControl style={{display: 'inline-block'}}>
        <form onSubmit={this.handleSubmit}>
          <InputLabel htmlFor="my-input" >Add your task</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={this.state.values} onChange={this.handleChange}/>
          <Button variant="contained" size="small" style={{marginLeft: '10px', marginBottom: '5px'}} type="submit">
            <AddIcon />
            add
          </Button>
        </form>
        <FormHelperText id="my-helper-text">Manage tasks to increase efficiency.</FormHelperText>
        <ListHead />
        <TaskList lists={this.state.todo}/>
      </FormControl>
    );
  }
}

export default TaskInput;
