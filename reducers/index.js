import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';
import AgentReducer from './AgentReducer';

export default combineReducers({
  Navigation: NavigationReducer,
  Agent: AgentReducer
});
