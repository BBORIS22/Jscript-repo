// let nickName = "dave"

// for (let i = 3; i <= nickName.length; i++) {
//     console.log(nickName.charAt(i));
// }


let nickNom = "dave"
let counter = 0 ;
let myLetter;

while(counter <= 3) {
    myLetter = nickNom[counter];
    console.log(myLetter);
    if (counter === 1 ) {
        counter +=2 ;
        continue;
    }
    if (myLetter === "v") break;
    counter++;
}
console.log(counter);