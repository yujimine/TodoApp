import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
