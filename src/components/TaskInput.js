import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import TaskList from './TaskList';
import ListHead from './ListHead';
import Button from './atom/Button';


class TaskInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      values: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delList = this.delList.bind(this);
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
    
    this.setState({
      todo : this.state.todo
    });
    console.log(this.state.todo);
  }
  
  render() {
    return (
      <FormControl style={{display: 'inline-block'}}>
        <form onSubmit={this.handleSubmit}>
          <InputLabel htmlFor="my-input" >Add your task</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={this.state.values} onChange={this.handleChange}/>
          <Button/>
        </form>
        <FormHelperText id="my-helper-text">Manage tasks to increase efficiency.</FormHelperText>
        <ListHead />
        <TaskList lists={this.state.todo} todoRemove={this.delList}/>
      </FormControl>
    );
  }
}


export default TaskInput;
