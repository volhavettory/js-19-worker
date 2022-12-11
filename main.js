class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

// let surname1 = document.querySelector(".surname");
// let rate1 = document.querySelector(".rate");
// let days1 = document.querySelector(".days");

document.querySelector("#name-input");
// let nameVal = Val.value;
let worker = new Worker("olga", "веттори", 10, 20);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
