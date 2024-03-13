function updateClock(){
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    const timestring = `${hour}: ${minute}: ${second}`;
    document.getElementById("clock").textContent = timestring;
    console.log(timestring);


// sunrise :5-7
// morning :7-11
// noon:11-3
// evening:3-5
// sunset:5-7
// night:7-11
// midnight:11-5

    var background="";
    if(hour>=5 && hour<7){
        background = "sunrise.png";
    }else if(hour>=7 && hour<11){
        background = "morning.png";
    }else if(hour>=11 && hour<15){
        background = "noon";
    }else if(hour>=15 && hour<17){
        background = "evening.png";
    }else if(hour>=17 && hour<19){
        background = "sunset.png";
    }else if(hour>=19 && hour<23){
        background = "night.png";
    }else if((hour>=23 && hour<0)||(hour>=0 && hour<5)){
        background = "midnight.png";
    }

    console.log(background);

    document.body.style.backgroundImage = `url(${background})`;


    

}


document.addEventListener('mouseenter', () => {
    document.body.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    document.body.style.opacity = '0.6';
});


setInterval(updateClock,1000)