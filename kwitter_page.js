//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCysE3bsr-6VR7IIlpOgMxlMiCVMIvPzDI",
      authDomain: "kwitter-bf28e.firebaseapp.com",
      databaseURL:"https://kwitter-bf28e-default-rtdb.firebaseio.com",
      projectId: "kwitter-bf28e",
      storageBucket: "kwitter-bf28e.appspot.com",
      messagingSenderId: "901348411228",
      appId: "1:901348411228:web:4dc9506a30f22f83a6e399"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            messages:msg,
            like:0
      });

      document.getElementById("msg").value="";
}
