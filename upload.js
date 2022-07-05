

//get ID

var db = firebase.database()
var auth = firebase.auth()
var uid;
var upMage;

function checkAuth(){
auth.onAuthStateChanged((user) => {
  if (user) {
	  
	
    uid = user.uid;
	
	console.log("logged in")
	 console.log(uid)
	  
    
  } else {
	  window.location="home.html"
  }
});
}
var fred = uid;


function pushit(){
	console.log(fred)
	  	var imigo= ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
	checkAuth()
var uploadTask = firebase.storage().ref("images/").child(uid+"/"+imigo+".png").put(files[0])

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	document.getElementById("prog").value = progress;
    console.log('Upload is ' + progress + '% done');
	document.getElementById("prog").value= progress
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
		upMage = downloadURL;
		submit()
		document.getElementById("upload").style.backgroundImage="url(photo.png)";
		alert("upload successful")
		document.getElementById("uploadProgress").value= "Upload"
		
    });
  }
);
	
}


var ImgName, ImgUrl;
	var files = [];
	var reader = new FileReader()
	var imara;
	//--select image
	
	document.getElementById("upload").onclick = function(e){
		
		
		auth.onAuthStateChanged((user) => {
  if (user) {
	  
	
    uid = user.uid;
	
	console.log("logged in")
	 console.log(uid)
	var input = document.createElement("input")
		input.type = "file";
		input.click();
		
		input.onchange = e =>{
			files = e.target.files;
			reader = new FileReader();
			reader.onload = function(){
				console.log(reader.result)
				imara = reader.result
				document.getElementById("upload").style.backgroundImage="url(" +imara+")";
				document.getElementById("upload").style.backgroundSize="contain";
				
//				pushit()
			}
			reader.readAsDataURL(files[0])
			
		}
    
  } else {
	  window.location="home.html"
  }
});
		
		
		
	}
	








// to db




function submit(){
	
	var artName = document.getElementById("artName").value;
//	var imageLink = document.getElementById("imgLink").value;
	var imgID = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );

	
	firebase.database().ref("users/"+uid+"/portfolio/"+imgID).set({
		
		artName: artName,
		imageLink: upMage
	
		
	}).then(()=>{
		console.log("uploaded");
		document.getElementById("artName").value="";
//		document.getElementById("imgLink").value="";
		
	})
	
}
var upldstate = 0;
function openupldr(){
	upldstate++
	if(upldstate > 1){
		document.getElementById("imgupldr").style.display = "flex";	
		upldstate = 0; 
	}
	else{
		document.getElementById("imgupldr").style.display = "none";	
	}
	
	
	
}


