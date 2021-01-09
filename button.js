const buttons = document.querySelectorAll(".parent-container button");


buttons.forEach(function (items,index){
    items.addEventListener("click", function(){
        const keys = this.innerHTML;
        console.log(keys);
        switch(keys){
            case "G":
                var duk = new Audio("songs/Simi-Duduke.mp3");
                playSong(duk);
                
                break;

        default:
        }
    });


    function playSong(song){
    if(song.duration>0 && !song.paused){
        song.pause();
    
    }
    else{
        song.play();
    }
};

});

const f = new Date(1990,06,26);
console.log(f) 

