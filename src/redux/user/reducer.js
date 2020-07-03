import {SET_USER_AUTH} from './types';

const initialState = {
  data: {},
  isLogged: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER_AUTH:
      return {...state, data: payload, isLogged: !!payload};

    default:
      return state;
  }
};
