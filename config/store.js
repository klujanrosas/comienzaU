import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

export default createStoreWithMiddleware(reducer);
