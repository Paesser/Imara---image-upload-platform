var db = firebase.database()
var auth = firebase.auth()
var uid;
auth.onAuthStateChanged((user) => {
  if (user) {
	  
    uid = user.uid;
	  mId = uid
	console.log("logged in")
	  console.log(uid)
	  
    
  } else {
	  window.location="index.html"
  }
});


function submit(){
	
	var artName = document.getElementById("artName").value;
	var imageLink = document.getElementById("imgLink").value;
	var imgID = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );

	
	firebase.database().ref("users/"+uid+"/portfolio/"+imgID).set({
		
		artName: artName,
		imageLink: imageLink
	
		
	}).then(()=>{
		console.log("uploaded");
		document.getElementById("artName").value="";
		document.getElementById("imgLink").value="";
		
	})
	
}

