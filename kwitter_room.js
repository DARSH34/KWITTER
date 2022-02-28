const firebaseConfig = {
      apiKey: "AIzaSyDcVmYYe1rLl8Q6t3O_yNtBcT1pJmZSRis",
      authDomain: "kwitter-4d6a7.firebaseapp.com",
      databaseURL: "https://kwitter-4d6a7-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d6a7",
      storageBucket: "kwitter-4d6a7.appspot.com",
      messagingSenderId: "87544531024",
      appId: "1:87544531024:web:36a69b5986558a81f2e955",
      measurementId: "G-PRKDFLL65Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose: "ading room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location.replace("index.html"); }
