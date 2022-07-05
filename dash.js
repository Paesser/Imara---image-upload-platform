const urlParams = new URLSearchParams(window.location.search);
const userPortfolio = urlParams.get('user');
var socialMedia;
console.log(userPortfolio)

const indexx = new URLSearchParams(window.location.search);
const index = indexx.get('index');
var socialMedia;
console.log(index)

var db = firebase.database()

var currentIndex = index;
var people;
var y = document.getElementById("vallue");
var image = document.getElementById("slide");
var card = document.getElementById("card");

document.addEventListener('contextmenu', event => event.preventDefault());

firebase.database().ref('users').child(userPortfolio).
on('value', (snapshot) => {
	
 console.log('database updated')
	updateUser()
	readColors()
});

function readColors(){
	var total;

	firebase.database().ref("users").child(userPortfolio).child("portfolio").get()
	.then((snapshot) => {
		
  	if (snapshot.exists()) {
		var  rangis=Object.values(snapshot.val())
		people = rangis;
		total = currentIndex;
		console.log(rangis)
		image.style.backgroundImage= "url("+people[currentIndex].imageLink+")"
		y.innerHTML= people[currentIndex].artName;

		
		
	   }
	})	
}

function next(){
	currentIndex++
	if(currentIndex > people.length){
		currentIndex = 0;
		
	}
	image.style.backgroundImage= "url("+people[currentIndex].imageLink+")";
	console.log(people[currentIndex].artName)
	y.innerHTML= people[currentIndex].artName;
	readColors()
	
}

function previous(){
	currentIndex--
	if(currentIndex < 0){
		currentIndex = people.length;	
	}
	image.style.backgroundImage= "url("+people[currentIndex].imageLink+")"
	console.log(people[currentIndex].artName)
	y.innerHTML= people[currentIndex].artName;
	readColors()
	
}
var imgScale = 0;
function  large(){
	imgScale++
	if(imgScale>1){
	imgScale = 0;
	image.style.height="100vh";
	image.style.width="100vw"
	card.requestFullscreen()
	}
	else{
	image.style.height="80vh";
	image.style.width="100%"
	}
	

	
}

 document.onkeydown = function (event) {
      switch (event.keyCode) {
         case 37:
      previous()
            break;
         case 39:
            next()
            break;
         
      }
   };


document.onkeydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});

function updateUser(){
	db.ref("users").child(userPortfolio).get()
	.then((snapshot)=>{
		if (snapshot.exists()) {
			var  mutu=snapshot.val()
		document.getElementById("ArtistName").innerHTML=mutu.userName;
		document.getElementById("artistDetails").innerHTML=mutu.description;
		
			socialMedia = mutu.social;
			
			
			
			
		
		
	   }
		
	})
}

function gotoSocial(){
	window.location=socialMedia
}

	