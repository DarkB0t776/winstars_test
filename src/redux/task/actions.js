import {CREATE_TASK, UPDATE_TASK} from './types';

export const createTask = date => {
  return {
    type: CREATE_TASK,
    payload: {date},
  };
};

export const updateTask = data => {
  return {
    type: UPDATE_TASK,
    payload: data,
  };
};
