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

function bottomOutputFunction(){
    const html3 = `
        <!-- 
        ================================================================================
        slogan bar
        ================================================================================
        -->
        <div id="sloganBar">
            <div id="sloganSlop"> 
              <p><b style="font-size: 24px;">UNITE UNDER MAOISM, STRUGGLE TO ANNIHILATE BOURGEOIS IDEOLOGY, AND ADVANCE THE STRUGGLE FOR A NEW AND JUST WORLD</b></p> 
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
              <p><b><u>Unity ==> Struggle ==> (higher) Unity</u></b> 1.1.0 - <span style="color: rgb(43, 209, 43); text-shadow: 0 0 1px rgb(90, 240, 90), 0 0 3px rgb(90, 240, 90), 0 0 5px rgb(90, 240, 90);">Last Updated: Feb 17, 2026</span> <a href="https://onespark.cc/about/update-log.html">update log</a></p>
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