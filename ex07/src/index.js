function  myFunction(propertyToDelete){
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar",
    }

    delete lion[propertyToDelete];
    return lion;
}

myFunction();
console.log(myFunction("roar"));

module.exports = myFunction;
