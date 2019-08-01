export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const CHANGE_LIST = 'CHSNGE_LIST';

let indexTodo = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: indexTodo++,
    text
  };
}

export const delTodo = (id) => {
  return {
    type: 'DEL_TODO',
    id
  };
}