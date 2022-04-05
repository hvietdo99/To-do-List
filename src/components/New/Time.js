import moment from 'moment';

const month = new Date().getMonth()+1;
const day = new Date().getDate();
const today = new Date(),
dateToday = today.getFullYear() + '-' 
    + `${month < 10 ? '0' + month : month}` + '-' 
    + `${day < 10 ? '0' + day : day}`;

export { dateToday, moment }