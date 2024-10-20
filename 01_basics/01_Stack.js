//stack(Primitive) , Heap  (Non-Primitive)

 let myYoutubename = "NishaExplorer"

 let anotherName = myYoutubename

 console.log(anotherName)

 let User = {
    email : "nisha@gmail.com",
    upi : "user@ybl"
 }

 let userTwo  = User

 userTwo.email = "nidhu@gmail.com"

 console.log(User.email)
 console.log(userTwo.email)