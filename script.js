var uid;
auth.onAuthStateChanged((user) => {
  if (user) {

    uid = user.uid;
	  
	  window.location="userDash.html"
	  
	  
    
  } else {
    document.getElementById("instr").innerHTML="please sign in to upload images"
  }
});



function submit(){
	
	var artName = document.getElementById("mtu").value;
	var imageLink = document.getElementById("rangi").value;
	var x = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );

	
	firebase.database().ref("users/"+uid+x).set({
		artName,
		imageLink
	})
	
}









	


