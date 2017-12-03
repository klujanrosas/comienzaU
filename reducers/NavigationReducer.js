import { RootNavigator } from '../config/rootNavigator';

export default (state, action) => {
  console.log(action);
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
