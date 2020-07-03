import {CREATE_TASK, UPDATE_TASK} from './types';
import Task from '../../models/Task';

const initialState = {
  items: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CREATE_TASK:
      const newTask = new Task('Work', '', null, payload.date);
      return {...state, items: [...state.items, newTask]};
    case UPDATE_TASK:
      const updatedTasks = [...state.items];
      const idx = updatedTasks.findIndex(task => task.id === payload.id);
      updatedTasks[idx].value = payload.value;
      updatedTasks[idx].hours = payload.hours;
      updatedTasks[idx].type = payload.type;

      return {
        ...state,
        items: updatedTasks,
      };
    default:
      return state;
  }
};
