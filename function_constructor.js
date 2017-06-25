const Person = function(name, age, sex){
	this.name = name;
	this.age =  age;
	this.sex = sex;
}


const paul = new Person('paulo', 40, 'masculino');

const karen = new Person('karen', 40, 'feminino');

const john = new Person('karen', 40, 'feminino');


console.log(paul);

console.log(karen);

console.log(john);