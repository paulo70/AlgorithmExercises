const allDevices = [{
        device: 'airConditioning',
        potency: 1500,
        hoursForDay: 8,
        mouth: 30
    },

    {
        device: 'eletricShower',
        potency: 3300,
        hoursForDay: 1,
        mouth: 30
    },


    {
        device: 'freezer',
        potency: 200,
        hoursForDay: 10,
        mouth: 30
    }, {

        device: 'refrigerator',
        potency: 350,
        hoursForDay: 10,
        mouth: 30
    },

    {

        device: 'lamp',
        potency: 100,
        hoursForDay: 6,
        mouth: 30
    }

]


const formuleConsume = (function(item){
  return item.potency * item.hoursForDay * item.mouth/1000;
});

const sumFormuleConsume = (function(prev, curr){
   return prev + curr * 0.40;
});



const total = allDevices
               .map(formuleConsume)
               .reduce(sumFormuleConsume,0)

console.log(total);
