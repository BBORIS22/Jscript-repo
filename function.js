// function getUserNameFromEmail(email) {
//     return email.slice(0 , email.indexOf("@"))
// }

// console.log(getUserNameFromEmail("playerOne@SomerandomEmail.com"));



const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCase("boRIS"));