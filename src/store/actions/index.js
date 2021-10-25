import {ADD_TODO, REMOVE_TODO, CHANGE_COMPLETED, EDIT_TODO} from '../constants/actionsTypes';

export const addTodo = (title)=> {
   const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
   }
   return {
      type: ADD_TODO,
      payload: newTodo,
   }
};

export const removeTodo = (id)=> ({
      type: REMOVE_TODO,
      payload: id,
});

export const editTodo = (obj) => ({
   type: EDIT_TODO,
   payload: obj
})

export const changeCompleted = (todo)=> ({
      type: CHANGE_COMPLETED,
      payload: todo,
});