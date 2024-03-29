import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import CheckCircle from '@material-ui/icons/CheckCircle';


class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul style={{textAlign: 'left', marginLeft: '-20px'}}>
        {this.props.lists.length > 0 ? 
          (this.props.lists.map((todo, i) =>
            <li key={i} style={{margin: '5px 0'}}>{todo.item}
              <CheckCircle style={{height: '20px', marginLeft: '5px', marginRight: '20px', float: 'right'}} onClick={() => this.props.todoRemove(i)} />
            </li>
          )) : (
            <span>お疲れ様でした！<br />タスク完了です！！</span>
          )
        }
      </ul>
    );
  }
}

 
export default TaskList;