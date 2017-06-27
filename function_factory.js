const createPerson = function(name, age, sex){
	return{
		name: name,
		age: age,
		sex: sex,
		getAge: function(){
			return this.age;
		},

		setAge: function(date){
			return this.age = date;
		}
	}
};


const melissa = createPerson('melissa', 40, 'feminino');

console.log('change age', melissa.setAge(50));

console.log(melissa.getAge())


