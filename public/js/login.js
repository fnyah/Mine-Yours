// Initialize Firebase
var config = {
    apiKey: "AIzaSyDoy5IVOsL8246wrqSv2BZq-eYAzP2FbUI",
    authDomain: "book-store-2618e.firebaseapp.com",
    databaseURL: "https://book-store-2618e.firebaseio.com",
    projectId: "book-store-2618e",
    storageBucket: "",
    messagingSenderId: "798320454244"
  };
  
  firebase.initializeApp(config);

  //=================================

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("create_div").style.display = "none";

      if(user != null){
        var email_id = user.email;
        var uid = user.uid; // send user uid to mysql database

        document.getElementById("user_para").innerHTML = "welcome user" + email_id;

      }

    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("create_div").style.display = "block";
    }
  });

  function login (){

    // alert("buttton clicked");

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error: " + errorMessage);
      // ...
    });
  }



  function logout() {
    firebase.auth().signOut();
  }
