// Initialize Firebase
var config = {
  apiKey: "AIzaSyC41XEH3vYYxfDy-b9Zph3rKHnN-Awm0TQ",
  authDomain: "smith-benson.firebaseapp.com",
  databaseURL: "https://smith-benson.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);
///////////////////////////////////////////////////////////////////////////////////////

function register(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //alert(email);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      document.getElementById("reg-form").innerHTML="<div class='success'>Welcome Back! </div></br>";
      localStorage.setItem('loggedin',1);
      localStorage.setItem('email','');
      loggedin();
    }, function(error) {
      localStorage.setItem('loggedin',0);
      localStorage.setItem('email',firebase.auth().currentUser.email);
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;

      document.getElementById("error").innerHTML =error.message;        
    });  
  
}

function signin(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //alert(email);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
  localStorage.setItem('loggedin',1);
  localStorage.setItem('email',firebase.auth().currentUser.email);     
      document.getElementById("sign-form").innerHTML="<div class='success'>Welcome Back! </div></br>"
      loggedin();
    }, function(error) {
      localStorage.setItem('loggedin',0);
      localStorage.setItem('email','');
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;

      document.getElementById("error").innerHTML =error.message;        
    });   

}

function reset(){
  
}
function signOut(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
          localStorage.setItem('loggedin',0);
      localStorage.setItem('email','');
  document.getElementById("register").style.display = 'inline-block' 
  
  document.getElementById("login").style.display = 'inline-block'
  document.getElementById("signOut").style.display = 'none';    
    document.getElementById("reset").style.display = 'none';
  }, function(error) {
    // An error happened.
  });  
}

function loggedin(){
  document.getElementById("register").style.display = 'none'; 
  
  document.getElementById("login").style.display = 'none';
  document.getElementById("signOut").style.display = 'inline-block';
  document.getElementById("reset").style.display = 'inline-block';

}
