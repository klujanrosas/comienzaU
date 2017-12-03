import {
  SET_SPLASH_USED,
  SET_ACTIVE_OPTION
} from './types';

export const setSplashUsed = () => {
  return {
    type: SET_SPLASH_USED
  };
};

export const setActiveOption = (optionID) => {
  return {
    type: SET_ACTIVE_OPTION,
    optionID
  };
};
