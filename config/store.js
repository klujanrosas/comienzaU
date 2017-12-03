import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxLogger)(createStore);

export default createStoreWithMiddleware(reducer);
