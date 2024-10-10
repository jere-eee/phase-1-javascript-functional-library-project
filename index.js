function myEach(collection, func) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        func(values[i]);
    }
    return collection;
}

function myMap(collection, func) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = []
    for (let i = 0; i < values.length; i++) {
        newArray.push(func(values[i]));
    }
    return newArray;
}

function myReduce(collection, func, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let start = 0;

    if (acc === undefined) {
        acc = values[0];
        start = 1;
    }

    for (let i = start; i < values.length; i++) {
        acc = func(acc, values[i], collection);
    }

    return acc;
}

function myFind(collection, func){
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if(func(values[i])) {
            return values[i]
        } 
    }
    return undefined
}

function myFilter(collection, func){
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let filtArr = []
    for(let i = 0; i < values.length; i++) {
        if(func(values[i])) {
            filtArr.push(values[i])
        } 
    }
    return filtArr
}

function mySize(collection){
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.length
}

function myFirst(array, n){
    if(n === undefined) {
        return array[0]
    } else return array.slice(0, n)
}

function myLast(array, n){
    if(n === undefined) {
        return array[array.length - 1]
    } else return array.slice(array.length - n)
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}