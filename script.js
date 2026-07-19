// ============================================
// Arsenal FC Fan Website - script.js
// NOTE: This uses localStorage only, so all data
// (fans, players, cart) lives in YOUR browser only.
// It is a front-end demo, not a real backend/database,
// and passwords stored this way are NOT secure -
// never reuse a real password here.
// ============================================

// Welcome message (used on homepage load if needed)
function welcome(){
  alert("Welcome to Arsenal Family 🔴⚪ COYG!");
}

// ---- Store ----
// Simple cart counter kept in localStorage
function addCart(itemName){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(itemName || "Item");
  localStorage.setItem("cart", JSON.stringify(cart));
  alert((itemName ? itemName + " added to cart! " : "Item added to cart! ") + "Cart total: " + cart.length + " item(s).");
}

// Kept for the Store page "Buy Now" buttons
function buy(itemName){
  alert("Thank you for supporting Arsenal! " + (itemName ? "(" + itemName + ")" : ""));
}

// Kept for the homepage ticket "Buy Ticket" buttons
function buyTicket(matchName){
  alert("Ticket reserved" + (matchName ? " for " + matchName : "") + "! See you at the Emirates. 🔴⚪");
}

// ---- Fan registration (used by register.html) ----
function register(){
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  if(!name || !email || !password){
    alert("Please fill in your name, email and password.");
    return;
  }

  let fans = JSON.parse(localStorage.getItem("fans")) || [];

  // Prevent duplicate emails
  if(fans.some(f => f.email === email)){
    alert("An account with that email already exists. Please log in instead.");
    window.location = "login.html";
    return;
  }

  fans.push({ name: name, email: email, password: password });
  localStorage.setItem("fans", JSON.stringify(fans));

  alert("Registration successful! You can now log in.");
  window.location = "login.html";
}

// ---- Homepage quick fan registration (index.html #tickets section) ----
function registerFan(){
  let nameField = document.getElementById("fanName");
  let emailField = document.getElementById("fanEmail");
  let messageEl = document.getElementById("message");

  let name = nameField.value.trim();
  let email = emailField.value.trim();

  if(!name || !email){
    messageEl.textContent = "Please enter both your name and email.";
    messageEl.className = "error";
    return;
  }

  let fans = JSON.parse(localStorage.getItem("fans")) || [];
  fans.push({ name: name, email: email });
  localStorage.setItem("fans", JSON.stringify(fans));

  messageEl.textContent = "Thanks, " + name + "! You're registered as an Arsenal fan.";
  messageEl.className = "success";

  nameField.value = "";
  emailField.value = "";
}

// ---- Login (used by login.html) ----
function login(){
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  // Hardcoded admin account
  if(username === "admin" && password === "1234"){
    window.location = "admin.html";
    return;
  }

  // Otherwise check registered fans (login by email as "username")
  let fans = JSON.parse(localStorage.getItem("fans")) || [];
  let matchedFan = fans.find(f => f.email === username && f.password === password);

  if(matchedFan){
    localStorage.setItem("currentFan", JSON.stringify(matchedFan));
    alert("Welcome back, " + matchedFan.name + "!");
    window.location = "index.html";
    return;
  }

  alert("Invalid login details");
}

// ---- Admin: add player ----
function addPlayer(){
  let nameField = document.getElementById("playerName");
  let positionField = document.getElementById("playerPosition");

  let name = nameField.value.trim();
  let position = positionField.value.trim();

  if(!name || !position){
    alert("Please enter both a player name and position.");
    return;
  }

  let players = JSON.parse(localStorage.getItem("players")) || [];
  players.push({ name: name, position: position });
  localStorage.setItem("players", JSON.stringify(players));

  alert("Player added successfully!");

  nameField.value = "";
  positionField.value = "";

  loadPlayers();
}

// Display players in admin page
function loadPlayers(){
  let area = document.getElementById("players");
  if(!area) return;

  let players = JSON.parse(localStorage.getItem("players")) || [];

  if(players.length === 0){
    area.innerHTML = "<p>No custom players added yet.</p>";
    return;
  }

  area.innerHTML = "";
  players.forEach(function(player){
    area.innerHTML += `
      <div class="box">
        <h3>${player.name}</h3>
        <p>${player.position}</p>
      </div>
    `;
  });
}

// Display registered fans (admin page)
function loadFans(){
  let area = document.getElementById("fans");
  if(!area) return;

  let fans = JSON.parse(localStorage.getItem("fans")) || [];

  if(fans.length === 0){
    area.innerHTML = "<p>No fans registered yet.</p>";
    return;
  }

  area.innerHTML = "";
  fans.forEach(function(fan){
    area.innerHTML += `
      <div class="box">
        <h3>${fan.name}</h3>
        <p>${fan.email || ""}</p>
      </div>
    `;
  });
}

window.onload = function(){
  loadPlayers();
  loadFans();
}
