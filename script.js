// ===============================================================================
// intializing functions
// ===============================================================================
function menuBarOutput(){
    const html1 = `
        <p style="font-size: 20px;">
        <i style="text-shadow: 0 0 1px rgb(207, 2, 2), 0 0 3px rgb(249, 22, 22), 0 0 5px rgb(255, 63, 63); color: white;"><b>longmarch.lgbt(SOON)</b></i>
        <a href="https://looongmarch.neocities.org"><button class="menuButton">home</button></a>
        <a href="https://looongmarch.neocities.org/about"><button class="menuButton">about</button></a>
        <a href="https://looongmarch.neocities.org/writings"><button class="menuButton">writings</button></a>
        <a href="https://looongmarch.neocities.org/art"><button class="menuButton">art</button></a>
        <a href="https://looongmarch.neocities.org/recommended"><button class="menuButton">links</button></a>
        <a href="https://looongmarch.neocities.org/donate"><button class="menuButton">donate</button></a> 
        <a href="https://looongmarch.neocities.org/sitemap"><button class="menuButton">site map</button></a> 
    
    `;
    document.getElementById('menuBar').insertAdjacentHTML('beforeend', html1);
}

function musicBarOutput(){
    const html2 = `
        <button id="playButton"><i class="fa fa-pause"><img id="playImage" src="https://file.garden/ZsJltiD-bXBSm0-A/Website%20Media/images/wa.png"></i></button>
        <audio loop autoplay id="player">
        <source src='https://file.garden/ZsJltiD-bXBSm0-A/Website%20Media/Music/The%20Internationale%20%E2%80%93%20Sovietwave%20Version%20(720p%2C%20h264%2C%20youtube%2C%207_UtzIYwCXo).mp3'>
        </audio>
        
        
        <!-- <audio loop autoplay id="music" src="https://www.youtube.com/watch?v=7_UtzIYwCXo"></audio> -->

        <!-- <audio loop autoplay controls>
        <source src="https://file.garden/ZsJltiD-bXBSm0-A/Website%20Media/Music/Site%20Main%20Theme">
        </audio> -->
        <a href="https://www.youtube.com/watch?v=7_UtzIYwCXo"><button class="menuButton">NOW PLAYING: The Internationale – Sovietwave Version</button></a>
    
    `;
    document.getElementById('musicPlayer').insertAdjacentHTML('beforeend', html2);
}

function bottomOutputFunction(){
    const html3 = `
        <!-- 
        ================================================================================
        slogan bar
        ================================================================================
        -->
        <div id="sloganBar">
            <div id="sloganSlop"> 
              <p><b style="font-size: 24px;">TILL ALL REACTION IS WIPED FROM THE FACE OF THE EARTH CARRY HIGH THE BANNER OF MARX, ENGELS, LENIN, STALIN, MAO, GONZALO, AND OTHERS! DEATH TO THE BOYMODE, CAPITALISM, IMPERIALISM AND ALL OPPRESSION! IT IS RIGHT TO REBEL!!</b></p> 
            </div>
        </div>
        <!-- 
        ================================================================================
        slogan bar
        ================================================================================
        -->

        <!-- 
        ================================================================================
        bottom bar
        ================================================================================
        -->
          <div id="bottomBar">
            <h2> Version:</h2>
              <p><b><i>From Simple To Advanced!</i></b> 1.0.0 - <span style="color: rgb(43, 209, 43); text-shadow: 0 0 1px rgb(90, 240, 90), 0 0 3px rgb(90, 240, 90), 0 0 5px rgb(90, 240, 90);">Last Updated: Jan 12, 2026</span></p>
          </div>
        <!-- 
        ================================================================================
        bottom bar
        ================================================================================
        -->
    
    `;
    document.getElementById('bottomWrapper').insertAdjacentHTML('beforeend', html3);
}

// ===============================================================================
// intializing functions
// ===============================================================================



// ===============================================================================
// running functions
// ===============================================================================
menuBarOutput();
musicBarOutput();
bottomOutputFunction();
// ===============================================================================
// running functions
// ===============================================================================