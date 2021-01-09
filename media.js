
function playSong(){

// Selectors//
const song = document.querySelectorAll(".song");
const divSelectors = document.querySelectorAll(".div-select");
const bubble = document.querySelector(".section-1");
const colors = [ "#ffc93c","#373a40","#16213","#1a1a2e","#222831"];

   divSelectors.forEach(function(Newitem,index){
       Newitem.addEventListener("click",function(){
           song[index].currentTime = 0;
           console.log(this.textContent)
           console.log(this.innerHTML)
         
         //Pause and Play//
         if (song[index].paused){
            song[index].play(); 
         }
         else{
             song[index].pause();
         }
         bubbles(index);
       });
       
   });

   //Bubbles//

   function bubbles(index){
       const pbubble = document.createElement("div");
       const image = document.createElement("img");
       
         image.src = "images/1m.jpg"; 
         
       const totadiv = pbubble.appendChild(image);
       bubble.appendChild(totadiv);
       bubble.style.backgroundColor = colors[index];
       totadiv.style.animation = "icebub 3s infinite";


   } 

    //MouseOver//

       const picture = document.querySelector(".picture img");
       picture.addEventListener("mouseover",function(){
        //    const para = document.createElement("p");
        //    const divpicture = document.querySelector(".picture");
        //    para.innerHTML="This is Yaw Adoma";
        //    divpicture.appendChild(para);
        picture.src="images/gi1.jpg"

       });

       picture.addEventListener("mouseout",function(){
           picture.src = "images/ed.jpg"
       })


}




playSong();
