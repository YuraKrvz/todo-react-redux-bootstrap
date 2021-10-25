import {ADD_TODO, REMOVE_TODO, CHANGE_COMPLETED, EDIT_TODO} from '../constants/actionsTypes';
import {getLocalStorage} from '../../components/utils/localStorage';

const initialState = getLocalStorage('store');

const mainReducer = (state = initialState, action) => {
   switch(action.type){
      case ADD_TODO: 
         return {
            ...state,
            todos: [...state.todos, action.payload]
         };
      case REMOVE_TODO: 
         return {
            ...state,
            todos: [...state.todos.filter( todo => todo.id !== action.payload )]
         }
      case EDIT_TODO: 
         return {
            ...state,
            todos: [...state.todos.map(todo => {
               if(todo.id === action.payload.id){
                  todo.title = action.payload.title;
                  return todo;
               }
               return todo
            })]
         }
      case CHANGE_COMPLETED:
         return {
         ...state,
         todos: [...state.todos.map(todo => {
            if(todo.id === action.payload.id){
               todo.completed = !todo.completed;
               return todo;
            }
            return todo;
         })]
      }

      default:
         return state;
   }
}

export default mainReducer;