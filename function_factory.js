var car = function car(model, year, price) {
    return{
        model: model,
        year: year,
        price: price
    };
};

var prototype = car;

console.log(prototype('ferrari', 1980, 20000));
console.log(prototype('fusca', 1970, 40000));
