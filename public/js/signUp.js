var config = {
    apiKey: "AIzaSyDoy5IVOsL8246wrqSv2BZq-eYAzP2FbUI",
    authDomain: "book-store-2618e.firebaseapp.com",
    databaseURL: "https://book-store-2618e.firebaseio.com",
    projectId: "book-store-2618e",
    storageBucket: "",
    messagingSenderId: "798320454244"
  };

  firebase.initializeApp(config);

function createUser(){
  var email = document.getElementById("create_email_field").value;
  var password = document.getElementById("create_password_field").value;

  firebase.auth().createUserWithEmailAndPassword(email,password).then(function(user){
    var user = firebase.auth().currentUser;
    console.log(user);
  }, function(error){
    var errorCode = error.code;
    var erroMessage = error.message;
  });
}
