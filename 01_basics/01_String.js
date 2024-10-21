let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//********************Operation*************************/

let value = 3
let negValue = -value
//console.log(negValue)
// console.log(2+2)
// console.log(2*2)
// console.log(2**2)
// console.log(10%2)
// console.log(2/3)

let str1 
let str2 
let str3 = str1 +str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1"+2+2)

// console.log((3+4)*5*4)

//console.log(+true) //output = 1

let gameCounter = 100
gameCounter++;
//console.log(gameCounter)

const name = "nisha"
const repocount = 50

//console.log(name +repocount+"value")
console.log('Hello my name is ${name}and my repo count is $ {repocount}')

const gameName = new String ('Nish_a')
console.log(gameName[0])
console.log(gameName._proto_)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0 , 2)
console.log(newString)

const anotherString = gameName.slice(-8, 2)
console.log(anotherString)

const newStringOne = "   nisha    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://nisha.com/nishabora%20"

console.log(url.replace('%20', '-'))

console.log(url.includes('nisha'))
console.log(url.includes('Sumi'))

console.log(gameName.split('-'))