// alert("bonjour et bienvenue");
// var userChoice = prompt("eau ou coca"); 
// console.log(userChoice);
// alert("Vous avez choisi " + userChoice);

// alert("bonjour et bienvenue ! penses tu avoir le talent de me battre?");
var userName = prompt ("Quel est ton nom?");
console.log(userName);
// // ask user name and stock it

function goodLuck ()
{
   return prompt (userName + " ,que choisis-tu? pierre feuille ou ciseau?");
};
userChoice = goodLuck(userName);
console.log (userChoice);
// // ask user choice and stock it

var possible = ["pierre", "feuille", "ciseau"];
// list of the different choice, user or computer

var computerChoice = possible[Math.round((2 * Math.random()))];
console.log(computerChoice);
// choose in array by index randomly


