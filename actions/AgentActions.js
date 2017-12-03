import {
  SET_ACTIVE_LEVEL,
  SET_ACTIVE_OPTION
} from './types';

export const setActiveLevel = (levelID) => {
  return {
    type: SET_ACTIVE_LEVEL,
    levelID
  };
};

export const setActiveOption = (optionID) => {
  return {
    type: SET_ACTIVE_OPTION,
    optionID
  };
};
