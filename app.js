// const car = {
//     make: 'Tesla',
//     model: 'Model S'
//     color: 'Black'
// }

// function start() {
//     return 'Outta here....';
// }

// function stop() {
//     return 'Push the brakes!';
// }
const car = {
    make: 'Tesla',
    model: 'Model S',
    color: 'Black',
    start: function() {
        return 'Outta here..';
    },
    stop: function() {
        return 'Push the brakes!'
    }
};

console.log(car.start());

const employee = {
    name: 'Ruben',
    role: 'Student',
    salary: 100000
}

function salaryIncrease(salary) {
    return salary * 1.10;
}

console.log(salaryIncrease(employee.salary));

employee.salary = salaryIncrease(employee.salary);


console.log(employee);







// CONSTRUCTOR FUNCTION

function Human(firstName, lastName) {
    this.first = firstName;
    this.last = lastName;
}

const ruben = new Human('ruben','cedeno');
console.log(ruben);

const rob = new Human('mark', 'cedeno');
console.log(rob);







function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}

const tesla = new Car('Tesla','Model 3','Red');
console.log(tesla);
const honda= new Car('Honda','Civic','Black');
console.log(honda);
const mitsu = new Car('Mitsubishi','Evo X','Green');
console.log(mitsu);
console.log(mitsu.model);







function User(name, email) {
    this.name = name;
    this.email = email;                      //old way to do constructor
    this.admin = true;
}

const hugo = new User ('Hugo', 'hugo@me.com')






User.prototype.hello = function() {
    // console.log('Hello!')    no need to console.log something that was already called for console.log
    return 'Hi!'
}
console.log(hugo.hello());
// hugo.hello();       only need this to call a function that already been console.log

User.prototype.doctor = true;
console.log(hugo.doctor);
console.log(hugo);








class Caro {
    constructor (make, model, color) {
        this.make = make;
        this.model = model;                 //new way to make constructor
        this.color = color;
        this.hello = function(){
            console.log('Hi! My car is a ' + make)  //could also put make and this.make
        }
    }
}

const tesla2 = new Caro ('tesla', 'model s', 'red');
console.log(tesla2.model);

tesla2.hello();