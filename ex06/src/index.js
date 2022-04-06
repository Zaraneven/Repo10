var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,

}
function myFunction(roar, roarroar){
    lion["roar"] = "roar-roar";
    return lion;


}
console.log(myFunction("roar"));
module.exports = myFunction;
