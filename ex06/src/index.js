var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,

}
function myFunction(attribute, value){
    lion[attribute] = value;
    return lion;


}
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;
