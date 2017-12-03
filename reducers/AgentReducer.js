import {
  SET_ACTIVE_LEVEL,
  SET_ACTIVE_OPTION
} from '../actions/types';

const mockOptions = [
  {
    id: 1000,
    parent: -1,
    title: '¿MODALIDADES?',
    endBranch: false,
  },
  {
    id: 1001,
    parent: -1,
    title: '¿REQUISITOS?',
    endBranch: false,
  },
  {
    id: 9001,
    parent: 1000,
    title: 'Pre-grado',
  },
  {
    id: 9002,
    parent: 1000,
    title: 'Post-grado',
  },
  {
    id: 9003,
    parent: 1000,
    title: 'Working Adult',
  },
  {
    id: 9004,
    parent: 1001,
    title: 'REQUISITO 1',
  },
  {
    id: 9005,
    parent: 1001,
    title: 'REQUISITO 2',
  }
];

const mockContent = [
  {
    id: 9001,
    content: 'Pregrado contenido asdasdasdsadsad'
  },
  {
    id: 9002,
    content: 'posgrado contenido asdasd12313123'
  },
  {
    id: 9003,
    content: 'WA tambien asdasdasdasdasdsad'
  },
  {
    id: 9004,
    content: 'Detalles del requisito 1'
  },
  {
    id: 9005,
    content: 'Detalles del requisito 2asdasdsadsd'
  }
];

const INITIAL_STATE = {
  options: mockOptions,
  content: mockContent,
  selectedOption: -1,
  filteredOptions: mockOptions.filter(option => option.parent === -1),
  selectedContent: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case SET_ACTIVE_OPTION:
      const filteredOptions = state.options.filter(option => option.parent === action.optionID);
      return {
        ...state,
        selectedOption: action.optionID,
        filteredOptions,
        selectedContent: filteredOptions.length === 0 ?
          mockContent.filter(content => content.id === action.optionID)[0].content : null
      };
    default:
      return state;
  }
};
