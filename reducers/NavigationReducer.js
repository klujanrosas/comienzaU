import { RootNavigator } from '../config/rootNavigator';

export default (state, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
