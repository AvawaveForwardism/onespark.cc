// ===============================================================================
// intializing functions
// ===============================================================================
function menuBarOutput(){
    const html1 = `
        <p style="font-size: 20px;">
        <i style="text-shadow: 0 0 1px rgb(207, 2, 2), 0 0 3px rgb(249, 22, 22), 0 0 5px rgb(255, 63, 63); color: white;"><b>onespark.cc</b></i>
        <a href="https://onespark.cc"><button class="menuButton">home</button></a>
        <a href="https://onespark.cc/about"><button class="menuButton">about</button></a>
        <a href="https://onespark.cc/writings"><button class="menuButton">writings</button></a>
        <a href="https://onespark.cc/art"><button class="menuButton">art</button></a>
        <a href="https://onespark.cc/recommended"><button class="menuButton">links</button></a>
        <a href="https://onespark.cc/donate"><button class="menuButton">donate</button></a> 
        <a href="https://onespark.cc/sitemap"><button class="menuButton">site map</button></a> 
    
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
              <p><b><u>Unity ==> Struggle ==> (higher) Unity</u></b> 1.1.0 - <span style="color: rgb(43, 209, 43); text-shadow: 0 0 1px rgb(90, 240, 90), 0 0 3px rgb(90, 240, 90), 0 0 5px rgb(90, 240, 90);">Last Updated: Feb 13, 2026</span> <a href="https://onespark.cc/about/update-log.html">update log</a></p>
          </div>
        <!-- 
        ================================================================================
        bottom bar
        ================================================================================
        -->
    
    `;
    document.getElementById('bottomWrapper').insertAdjacentHTML('beforeend', html3);
}

function criticismsOutputFunction(){
    const html4 = `<p>All critiques can be directed to my email (AvawaveForward@proton.me) or my twitter (@AvawaveMaoism). I accept criticisms from all well meaning and serious people, only through struggle can higher understanding be developed.</p>`;
    document.getElementById('someID').insertAdjacentHTML('beforebegin', html4);
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
criticismsOutputFunction();
// ===============================================================================
// running functions
// ===============================================================================