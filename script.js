

// Welcome message

function welcome(){

alert("Welcome to Arsenal Family 🔴⚪ COYG!");

}



// Store purchase

function buy(){

alert("Thank you for supporting Arsenal!");

}



// Register fan

function register(){


let name=document.getElementById("name").value;


let fans =
JSON.parse(localStorage.getItem("fans")) || [];



fans.push(name);



localStorage.setItem(
"fans",
JSON.stringify(fans)
);



alert("Registration successful!");

window.location="login.html";


}




// Login system


function login(){



let username =
document.getElementById("username").value;



let password =
document.getElementById("password").value;




if(username=="admin" && password=="1234"){


window.location="admin.html";


}


else{


alert("Invalid login details");


}


}




// Add player from admin


function addPlayer(){



let name =
document.getElementById("playerName").value;



let position =
document.getElementById("playerPosition").value;




let players =
JSON.parse(localStorage.getItem("players")) || [];




players.push({

name:name,

position:position


});




localStorage.setItem(
"players",
JSON.stringify(players)

);



alert("Player added successfully!");

loadPlayers();


}




// Display players in admin page


function loadPlayers(){



let area =
document.getElementById("players");



if(area){


let players =
JSON.parse(localStorage.getItem("players")) || [];



area.innerHTML="";



players.forEach(function(player){


area.innerHTML +=

`

<div class="box">

<h3>${player.name}</h3>

<p>${player.position}</p>


</div>

`;



});


}


}




// Display fans


function loadFans(){



let area =
document.getElementById("fans");



if(area){



let fans =
JSON.parse(localStorage.getItem("fans")) || [];



area.innerHTML="";



fans.forEach(function(fan){


area.innerHTML +=

`

<div class="box">

<h3>${fan}</h3>

</div>

`;


});


}



}




window.onload=function(){

loadPlayers();

loadFans();

}
