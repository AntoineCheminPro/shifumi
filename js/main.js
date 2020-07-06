alert("bonjour et bienvenue ! penses tu avoir la chance de me battre?");
// welcome to user

var userName = prompt ("Quel est ton nom?");
while (userName.length > 20 || userName.length <2)
{
   if (userName.length <= 1)
    {
        userName = prompt ("c'est un peu court, deux lettres au minimum je te prie !");
    }
    else if (userName.length > 20)
    {
        userName = prompt ("c'est un peu long, vingt lettres au maximum s'il te plait. \n un diminutif peut-être?");
    }
};
// ask user name and stock it if length between 2 and 20 else ask again
var scoreHumain = 0;
var scoreMachine = 0;
var userChoice = 0;
// define those var to used them later everywhere
do
{
// first do while if player want to continue
    scoreHumain = 0;
    scoreMachine = 0;
    userChoice = 0;
    // reset value usefull to replay
    do
    // second do while since player or computer has 3 points
    {
        do
        {    
            userChoice = prompt (userName + " ,que choisis-tu? pierre feuille ou ciseau?");
            userChoice = userChoice.toLowerCase();
    }
        while (userChoice !== "pierre" && userChoice !== "feuille" && userChoice !== "ciseau");
        // ask user choice and stock it caseFriendly as it's one of the three good words

        var possible = ["pierre", "feuille", "ciseau"];
        // list of the differents choices, user or computer

        var computerChoice = possible[Math.floor(Math.random()*3)];
        console.log("choix de l'ordinateur : " + computerChoice);
        // choose in array by index randomly

        var conditionDeVictoire =
        [
            {homme : "pierre", machine : "ciseau"},
            {homme : "feuille", machine : "pierre"},
            {homme : "ciseau", machine : "feuille"}
        ];
        var victoire = victory (conditionDeVictoire);
        // show the 3 way to earn a point for user

        function victory (conditionDeVictoire)
        {
            for (var key in conditionDeVictoire)
            {
                if (conditionDeVictoire[key]["homme"] === userChoice && conditionDeVictoire[key]["machine"] === computerChoice)
                {
            return true;
            }
        }
            return false;
    };
        var afficheScore = 0;
        var playAgain = 0;
        // do the set between computer and user choices return true if user win else false
        if (userChoice === computerChoice)
        {
            afficheScore = ("\n score : " + userName + " " + scoreHumain + "     score machine : " + scoreMachine); 
            alert("j'ai choisi : "+ computerChoice + " égalité, tu as eu de la chance, mais je t'aurai !" + afficheScore);
        }
        else if (victoire === true)
        {
            scoreHumain ++;
            afficheScore = ("\n score : " + userName + " " + scoreHumain + "     score machine : " + scoreMachine); 
            alert("j'ai choisi : "+ computerChoice+ " Tu as gagné ce point, tricherais-tu? \n" + afficheScore);
        }
        else
        {
            scoreMachine ++;
            afficheScore = (" \n score : " + userName + " " + scoreHumain + "     score machine : " + scoreMachine); 
            alert("j'ai choisi : " + computerChoice + " tu as perdu, abandonne avant qu'il ne soit trop tard ! " + afficheScore);
        }
        // one game egality / human point and computer point
        if (scoreHumain == 3)
        {
            alert ("partie finie, je m'incline, tu as gagné ! BRAVO " + userName);
        }
        else if (scoreMachine == 3)
        {
            alert ("HAHAHA ! je te l'avais dit que j'allais gagner, je dois reconnaître que tu t'es bien défendu " + userName)
        };
    } while (scoreHumain < 3 && scoreMachine < 3);
    // end of the match as a competitor has 3 points

    var playAgain = window.confirm(" On rejoue ça en 3 manches gagnantes?");
} while (playAgain == true);
// let choice to play again


