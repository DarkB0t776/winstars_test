class Task {
  constructor(type, value, hours, date) {
    this.id = Math.random();
    this.type = type;
    this.value = value;
    this.hours = hours;
    this.date = date;
  }
}

export default Task;
