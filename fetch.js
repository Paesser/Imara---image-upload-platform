function submit(){
var userName = document.getElementById("uName").value;
var profile = document.getElementById("pPhoto").value;
var art = document.getElementById("art").value;



firebase.database().ref("students/"+userName).set({
	
	userName: userName,
	profile: profile,
	artwork:{
		art
	}
	
})
	
}

function push(){
	var userName = document.getElementById("uName").value;
	var art = document.getElementById("art").value;
	
	var postListRef = firebase.database().ref("students/"+userName).child("artwork");
	var newPostRef = postListRef.push();
newPostRef.set({
    art
});
}




