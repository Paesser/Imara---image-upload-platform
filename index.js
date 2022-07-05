var diiv = document.createElement("div");
diiv.setAttribute("class", "potos")
document.body.appendChild(diiv)
var db = firebase.database();
//document.addEventListener('contextmenu', event => event.preventDefault());


db.ref("users/").get().then((snapshot)=>{
	
		
  	if (snapshot.exists()) {
	var  rangis = Object.values(snapshot.val())
	console.log(rangis)
	var pics;
		var port = snapshot.val()
	
		
		for(x = 0; x< rangis.length; x++){
			
		
			if(rangis[x].portfolio){
			
		pics = Object.values(rangis[x].portfolio)

		
		
//		console.log(pics[x].imageLink)
		
		var imgDiv = document.createElement("div")
		imgDiv.setAttribute("class", "imgCard")
		console.log(pics)
	
		var photo = document.createElement("img")
		var para = document.createElement("a")
		photo.src = pics[0].imageLink
//		para.innerHTML=pics[0].artName
		para.setAttribute("href","/userindex.html?user="+rangis[x].userID)
		photo.setAttribute("class", "imgage")

	
		para.appendChild(photo);
		imgDiv.appendChild(para)
		diiv.appendChild(imgDiv)
		

	   }
			else{
			console.log("stuff")
		}
		}
	
	
		
		
	
	}
	
	})


function mouseGet(){
	const root = document.documentElement;
 
document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});
}

mouseGet()