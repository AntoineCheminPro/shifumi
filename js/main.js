alert("bonjour et bienvenue ! penses tu avoir le talent de me battre?");
// welcome to user

var userName = prompt ("Quel est ton nom?");
while (userName.length > 20 || userName.length <=1)
{
   if (userName.length <= 1)
    {
        userName = prompt ("c'est un peu court, deux lettres au minimum !");
    }
    else if (userName.length > 20)
    {
        userName = prompt ("c'est un peu long, vingt lettres au maximum !");
    }
};
// // ask user name and stock it if length between 2 and 20 else ask again

do
{    
   var userChoice = prompt (userName + " ,que choisis-tu? pierre feuille ou ciseau?");
   userChoice = userChoice.toLowerCase();
}
while (userChoice !== "pierre" && userChoice !== "feuille" && userChoice !== "ciseau");
// // ask user choice and stock it caseFriendly as it's one of the three good words

var possible = ["pierre", "feuille", "ciseau"];
// list of the different choice, user or computer

var computerChoice = possible[Math.floor(Math.random()*3)];
console.log("choix de l'ordinateur : " + computerChoice);
// choose in array by index randomly

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var conditionDeVictoire =
[
    {homme : "pierre", machine : "ciseau"},
    {homme : "feuille", machine : "pierre"},
    {homme : "ciseau", machine : "feuille"}
];
var victoire = victory (conditionDeVictoire);

function victory (conditionDeVictoire)
{
    for (var key in conditionDeVictoire)
    {
        if (conditionDeVictoire[key]["homme"] === userChoice  
            && conditionDeVictoire[key]["machine"] === computerChoice)
            {
        return true;
            }
    }
        return false;
};
// do the set between computer and user choices return true if user win else false
if (userChoice === computerChoice)
{
    alert("j'ai choisi : "+ computerChoice+ " égalité, tu as eu de la chance, mais je t'aurai !");
}
else if (victoire === true)
{
    alert("j'ai choisi : "+ computerChoice+ " Tu as gagné ce point, tricherais-tu?");
}
else
{
    alert("j'ai choisi : "+ computerChoice+ " tu as perdu, abandonne avant qu'il ne soit trop tard !");
};
