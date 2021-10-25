import {createStore} from 'redux';
import { setLocalStorage } from '../components/utils/localStorage';
import mainReducer from './reducers';

const store = createStore(mainReducer);

   store.subscribe(()=>{
      setLocalStorage('store', store.getState().mainReducer)
   })

export default store;
