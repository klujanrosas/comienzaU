import {
  SET_ACTIVE_LEVEL,
  SET_ACTIVE_OPTION
} from '../actions/types';

export default (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_LEVEL:
      return state;
    case SET_ACTIVE_OPTION:
      return state;
    default:
      return state;
  }
};
