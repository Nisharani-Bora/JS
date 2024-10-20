//Primitive
// 7 types : String , Number , Boolean , Null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')
console.log(id === anotherId)

const bigNumber =12344442222344445n

//Reference (Non Primitive)
//Array,Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"]
{
    name : "nisha"
    age : 22
}
const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof bigNumber)
