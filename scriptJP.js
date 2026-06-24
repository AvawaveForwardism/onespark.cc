// ===============================================================================
// intializing functions
// ===============================================================================
function initTheme() {
  console.log('initTheme start - theme in storage:', localStorage.getItem('theme'));
  
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark' || 
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  console.log('isDark calculated as:', isDark);
  
  if (isDark) {
    document.documentElement.classList.add('darkMode');
  } else {
    document.documentElement.classList.remove('darkMode');
  }
  
  console.log('darkMode class present?', document.documentElement.classList.contains('darkMode'));
}


function themeChange() {
  const isDarkMode = document.documentElement.classList.toggle('darkMode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function langDisplay() {
  const wrapper = document.getElementById("theDropdown");
  if (wrapper.style.display != "flex") {
    wrapper.style.display = "flex"
  }else  {
    wrapper.style.display = "none"
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  console.log('hi');
}

// Close the dropdown if the user clicks outside of it

function menuBarOutput(){
    const html1 = `
      <div id="leftMenuContent">
          <p style="font-size: 20px;">
          <b class="siteTitle">onespark.cc(jp)</b>
          <a href="/index"><button class="linkingButton genPageLinkingButtons menuButton">ホーム</button></a>
          <a href="/about"><button class="linkingButton genPageLinkingButtons menuButton">について</button></a>
          <a href="/writings"><button class="linkingButton genPageLinkingButtons menuButton">著作</button></a>
          <a href="/recommended"><button class="linkingButton genPageLinkingButtons menuButton">リンクス</button></a>
          <a href="/donate"><button class="linkingButton genPageLinkingButtons menuButton">寄付</button></a> 
          <a href="/about/update-log"><button class="linkingButton genPageLinkingButtons menuButton">アップデート</button></a>
      
      </div> 
  
      <div id="rightMenuContent">
        <p>v1.2.2.1 - <mark class="standardMark"><span class="versionText">Last Updated: 2026年 6月 24日</span></mark></p>
        <button id="lightDarkButton" class="linkingButton rightSelections" onclick="themeChange()">☀</button>

        <div class="dropdown">
          <button id="langButton" class="linkingButton rightSelections" onclick="langDisplay()">🌏︎</button>
          <div id="theDropdown" class="dropdownContent" style="display: none">
            <div class="dropdownContentWrappers">
              <a href="/">English</a>
            </div>

            <div class="dropdownContentWrappers">
              <a href="/jp">日本語</a>
            </div>

            <div class="dropdownContentWrappers">
              <a href="/sw">Kiswahili</a>
            </div>
          </div>
        </div>
      </div>
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
            <div id="sloganText"> 
              <p><b style="font-size: 24px;">UNITE UNDER MAOISM, STRUGGLE TO ANNIHILATE BOURGEOIS IDEOLOGY, AND ADVANCE THE STRUGGLE FOR A NEW AND JUST WORLD</b></p> 
            </div>
        </div>
        <!-- 
        ================================================================================
        slogan bar
        ================================================================================
        -->
    
    `;
    document.getElementById('bottomWrapper').insertAdjacentHTML('beforeend', html3);
}

//function criticismsOutputFunction(){
  //  const html4 = `<p>All critiques can be directed to my email (AvawaveForward@proton.me) or my twitter (@AvawaveMaoism). I accept criticisms from all well meaning and serious people, only through struggle can higher understanding be developed.</p>`;
    //document.getElementById('someID').insertAdjacentHTML('beforebegin', html4);
//}

// ===============================================================================
// intializing functions
// ===============================================================================



// ===============================================================================
// running functions
// ===============================================================================
initTheme();
menuBarOutput();
bottomOutputFunction();
//criticismsOutputFunction();
// ===============================================================================
// running functions
// ===============================================================================
