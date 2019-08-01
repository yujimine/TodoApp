import { combineReducers } from 'redux';

const initisalState = {
  todo: [],
  id: 0,
  value: '',
};

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      
    case 'DEL_TODO':
    
    case 'CHANGE_LIST':
      break;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  
});

export default todoApp;
