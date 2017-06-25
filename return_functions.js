var arr = ['get', 'set', {obj:'name'}, 50];

var getArr = function getArr (elem) {
    return elem;
};

console.log(getArr(arr));

// --------------------------------

var obj = {
    car: 'model',
    year: 'year',
    brand: 'brand'
}

var getObj = function getObj(elem){
    return elem;
};

console.log(getObj(obj));

// -----------------------------

var getBooks = function getBooks(books){
    var allBooks = {
        'bookOne':{
            author: 'x',
            editor: 'y',
            pages: 200
        },

        'booktwo':{
            author: 'x',
            editor: 'y',
            pages: 300
        },

        'bookthree':{
            author: 'x',
            editor: 'y',
            pages: 400
        }
    };

    return !books ? allBooks : allBooks[books];
};

console.log(getBooks('booktwo'));