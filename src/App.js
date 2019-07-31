import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TaskInput />
      </div>
    );
  }
}

export default App;
