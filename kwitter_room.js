var firebaseConfig = {
    apiKey: "AIzaSyB-wi2RsIYYkS2wgkt8qPHAWntHFwglTdg",
    authDomain: "kwitter-ae58d.firebaseapp.com",
    databaseURL: "https://kwitter-ae58d-default-rtdb.firebaseio.com",
    projectId: "kwitter-ae58d",
    storageBucket: "kwitter-ae58d.appspot.com",
    messagingSenderId: "1086087163915",
    appId: "1:1086087163915:web:f7184456ddcfbb6559d70e"
  };

  firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;  
});});}
getData();
function redirectToRoomName(name)
{

  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";

}

function logout()
{

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";

}

