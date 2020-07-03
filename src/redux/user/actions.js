import {SET_USER_AUTH} from './types';
import * as googleAuth from '../../utils/googleAuth';

export const signIn = () => async dispatch => {
  const user = await googleAuth.signIn();

  dispatch({
    type: SET_USER_AUTH,
    payload: user.user,
  });
};
