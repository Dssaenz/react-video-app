import { createStore } from 'redux';
import reducers from './src/reducers';
import initialState from './state';

const store = createStore(reducers, initialState);

export default store;
