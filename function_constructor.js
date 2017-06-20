var Person = function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
};

var personOne = new Person('Paul', 30, 'male');
var personTwo = new Person('karen', 35, 'female');
console.log(personOne);
console.log(personTwo);
