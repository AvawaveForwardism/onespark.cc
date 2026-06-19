// ===============================================================================
// intializing functions
// ===============================================================================
function mobileInitTheme() {
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


function mobileThemeChange() {
  const isDarkMode = document.documentElement.classList.toggle('darkMode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Close the dropdown if the user clicks outside of it

function mobileMenuBarOutput(){
    const html1 = `
            <p>
                <a href="">home</a>
              • <a href="">about</a>
              • <a href="">writings</a>
              • <a href="">links</a>
              • <a href="">donate</a>
              • <a href="">updates</a>
              • <a href="/">English</a>
              • <a href="/jp">日本語</a>
              • <a href="/sw">Kiswahili</a>
              • <a id="mobileLightDarkButton" class="linkingButton rightSelections" onclick="mobileThemeChange()">☀</a>
            </p>
    `;
    document.getElementById('mobileMenu').insertAdjacentHTML('beforeend', html1);
}

function moileBottomOutputFunction(){
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
    document.getElementById('x').insertAdjacentHTML('beforeend', html3);
}

// ===============================================================================
// intializing functions
// ===============================================================================

// ===============================================================================
// running functions
// ===============================================================================
mobileInitTheme();
mobileMenuBarOutput();
moileBottomOutputFunction();
//criticismsOutputFunction();
// ===============================================================================
// running functions
// ===============================================================================