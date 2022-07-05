var auth = firebase.auth();
var db = firebase.database();

function signUp(){
	var userName = document.getElementById("uName").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var description = document.getElementById("description").value;
	var social = document.getElementById("social").value;
	
	

auth.createUserWithEmailAndPassword(email,password)
	.then((userCredential)=>{
	var user = userCredential.user;
	var email = user.email;
	var uid = user.uid;
	console.log(uid);

		firebase.database().ref("users/"+uid).set({
			userID: uid,
		userName: userName,
		email: user.email,
		description: description,
		social: social,
		portfolio:{
			
		}
	}).then(()=>{

			checkAuth()
			
		})

	

	
	
	
	
	
}).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  })
	
}

function checkAuth(){
	auth.onAuthStateChanged((user) => {
  if (user) {

    var uid = user.uid;
	  
	  window.location="index.html"
	  
	  
    
  } else {
    document.getElementById("instr").innerHTML="please sign in to upload images"
  }
});




}