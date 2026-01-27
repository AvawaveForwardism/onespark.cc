// I don't know javascript like at all lmao, this is stolen code from ne0nbandit.art, which is also where I got a lot of the site's stylistic inspirations from
var button = document.getElementById("playButton");
var audio = document.getElementById("player");
var bgImage = document.getElementById("playImage");

    button.addEventListener('click', function(){      
    if(audio.paused){
    audio.play();
    button.innerHTML = '<i class="fa fa-pause"><img id="playImage" src="https://file.garden/ZsJltiD-bXBSm0-A/Website%20Media/images/wa.png"></i>';
        
    } else {
    audio.pause();
    button.innerHTML = '<i class="fa fa-play"><img id="playImage" src="https://file.garden/ZsJltiD-bXBSm0-A/Website%20Media/images/Red_flag_II.svg.png"></i>';
    }
    });