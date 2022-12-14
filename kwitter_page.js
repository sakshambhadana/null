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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
{

msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
nmae:user_name,
message:msg,
like:0

});
document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
