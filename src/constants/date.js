import moment from 'moment';

export const CURRENT_MONTH = moment().format('MMMM');
export const CURRENT_YEAR = moment().format('gggg');
export const CURRENT_DAY_NAME = moment().format('dddd');
export const CURRENT_DAY_NUM = moment().format('D');

export const CURRENT_DATE = moment().format('YYYY-MM-DD'); // 2020-05-16
