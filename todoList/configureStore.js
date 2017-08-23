// configureStore.js
import { createStore } from 'redux';
import todos from './redux/reducers/todos'

let store = createStore(todos);

export default store;
