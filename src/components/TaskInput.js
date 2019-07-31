import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
    
const addTask = (task) => {
  return {
    type: 'ADD_TODO',
    task
  };
}

class TaskInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      values: '',
      setValues: ''
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
    console.log(this.state.values);
    e.preventDefault();
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
      </FormControl>
    );
  }
}

export default TaskInput;

// 
// const [values, setValues] = React.useState({
//     name: '',
//   });
// const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };
// 
//   return (
//     <form noValidate autoComplete="off">
//       <TextField
//         id="standard-name"
//         label="Name"
//         value={values.name}
//         onChange={handleChange('name')}
//         margin="normal"
//       />
//     </form>
//   );