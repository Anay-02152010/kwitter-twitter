
var firebaseConfig = {
      apiKey: "AIzaSyClPbV1p1onxHLcpPVUceSeR72deiSqVMk",
      authDomain: "quitter-be3d1.firebaseapp.com",
      databaseURL: "https://quitter-be3d1-default-rtdb.firebaseio.com",
      projectId: "quitter-be3d1",
      storageBucket: "quitter-be3d1.appspot.com",
      messagingSenderId: "252910939770",
      appId: "1:252910939770:web:d10f04d5f1e7829bcd55c3",
      measurementId: "G-73NRXBCRER"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location=("kwitter_page.html");
}

function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";       
}