const createPerson = function(name, age, sex){
	return{
		name: name,
		age: age,
		sex: sex
	}
};

console.log(createPerson('flanders', 30, 'masculino'));
console.log(createPerson('melissa', 25, 'feminino'));
