// alert("bonjour et bienvenue");
// var userChoice = prompt("eau ou coca"); 
// console.log(userChoice);
// alert("Vous avez choisi " + userChoice);

alert("bonjour et bienvenue ! penses tu avoir le talent de me battre?");
var userName = prompt ("Quel est ton nom?");
console.log(userName);
// // ask user name and stock it

function goodLuck ()
{
    return prompt (userName + " ,que choisis-tu? pierre feuille ou ciseau?");
};
userChoice = goodLuck(userName);
userChoice = userChoice.toLowerCase();
console.log ("choix du joueur : " + userChoice);
// // ask user choice and stock it caseFriendly

var possible = ["pierre", "feuille", "ciseau"];
var test = Math.floor(Math.random()*3);
console.log(test);
// list of the different choice, user or computer

var computerChoice = possible[Math.floor(Math.random()*3)];
console.log("choix de l'ordinateur : " + computerChoice);
// choose in array by index randomly

if (computerChoice === userChoice)
{
    alert ("Egalité !");
}
else if (computerChoice === "pierre" && userChoice === "feuille")
{
    
    alert("gagné, j'ai choisi : " + computerChoice);
}
else if (computerChoice === "pierre" && userChoice === "ciseau")
{
    alert("perdu, j'ai choisi : " + computerChoice);
}
else if (computerChoice === "ciseau" && userChoice === "feuille")
{
    alert("perdu, j'ai choisi : " + computerChoice);
}
else if (computerChoice === "ciseau" && userChoice === "pierre")
{
    alert("gagné, j'ai choisi : " + computerChoice);
}
else if (computerChoice === "feuille" && userChoice === "pierre")
{
    alert("perdu, j'ai choisi : " + computerChoice);
}
else if (computerChoice === "feuille" && userChoice === "ciseau")
{
    alert("gagné, j'ai choisi : " + computerChoice);
};


