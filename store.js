import { createStore } from 'redux';
import reducers from './src/reducers';
import initialState from './state';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, initialState, composeEnhancers);

export default store;
