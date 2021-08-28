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
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";       
 }