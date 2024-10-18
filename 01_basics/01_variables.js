const accounId = 12231
let accountEmail = "nisha@google.com"
var accountPassword = "12344"
accounCity = "Lakhimpur"

//accounId = 2 //this is not allowed
accountEmail = "nishu@.com"
accountPassword = "234"
accounCity = "Assam"

console.log(accounId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accounId,accountEmail,accountPassword,accounCity])


