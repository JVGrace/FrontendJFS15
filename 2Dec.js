function greet(ar){
    console.log(ar);
}
// setTimeout(greet,3000,"Hello world")
// setInterval(greet,3000,"Bye!!")

console.log(10+'5');
console.log('5'+10)

function outerF(ar){
    let name ="PushPa Returns";
    function interF(){
        console.log(ar);
        return name;
    }
    return interF();
}
console.log(outerF("hello"));

let animal={
    eats:true,
    evolution:true
}
let polarbear={
    blood:"hot blooded",
    type:"mammal",
    __proto__:animal
}
let crocodile={
    blood:"cold blooded",
    type:"aquatic"
}
crocodile.__proto__=animal;
console.log(crocodile.evolution);
console.log(polarbear.evolution);