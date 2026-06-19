var filteringButton = document.getElementsByClassName("filterButtons");
var buttonClicked = '';
var possibleSubFilters = document.getElementsByClassName("filter")
var possibleMasterFilters = document.getElementsByClassName("masterFilter")
//================================================================================
// variable declarations
//================================================================================
function buttonClickedFunction() {
    var selectedFilter = document.getElementById("filteredButton");
    
    if(this.id !== "filteredButton") {
        this.setAttribute("id", "filteredButton");
        selectedFilter.classList.add("filterButtons");
        selectedFilter.id = null;
    } else {
        this.id = null;
        this.classList.add("filterButtons");
    } 
    console.log("buttonClickedFunction ran successfully");

    filteringFunction();
}

function hrtSubDisplay() {
}

function marxismSubDisplay(i) {

}

function filteringFunction() {
    var selectedButton = document.getElementById("filteredButton");
    var identityOfInterest = selectedButton.classList[1];

    

    console.log(identityOfInterest);
    comparison(identityOfInterest);
    console.log("filteringFunction ran successfully");
    //console.log(possibleSubFilters);
    //console.log(possibleMasterFilters);
};

function comparison(interest) {
    var topLevel = document.getElementById("allLinks");
    var topLevelHRT = document.getElementById("hrtAll");
    var topLevelMarxism = document.getElementById("marxismAll");
    var descendingLevels = topLevel.children;
    var descendingLevelsHRT = topLevelHRT.children;
    var descendingLevelsMarxism = topLevelMarxism.children;
    var subListLength = descendingLevelsHRT.length + descendingLevelsMarxism.length;
    console.log(descendingLevels);
    console.log(descendingLevels.length);
    console.log(subListLength);

    if (interest == "allLinks" || interest == "hrtAll" || interest == "marxismAll"){
        if (interest == "allLinks") {
            for (var i = 0; i < subListLength; i++) {
                descendingLevels[i].style.display = "";
                
                
                descendingLevelsHRT[0].style.display = "";
                descendingLevelsHRT[1].style.display = "";
                descendingLevelsHRT[2].style.display = "";
                descendingLevelsHRT[3].style.display = "";
                descendingLevelsHRT[4].style.display = "";

                descendingLevelsMarxism[0].style.display = "";
                descendingLevelsMarxism[1].style.display = "";
                descendingLevelsMarxism[2].style.display = "";
                descendingLevelsMarxism[3].style.display = "";
                descendingLevelsMarxism[4].style.display = "";
                descendingLevelsMarxism[5].style.display = "";
            }
        } else if (interest == "hrtAll") {
            for (var i = 0; i < subListLength; i++) {
                descendingLevelsHRT[i].style.display = "";
                descendingLevels[0].style.display = "";
                descendingLevels[1].style.display = "none";
                descendingLevels[2].style.display = "none";
            }
            
        } else if (interest == "marxismAll") {
            for (var i = 0; i < subListLength; i++) {
                descendingLevelsMarxism[i].style.display = "";
                descendingLevelsHRT[i].style.display = "none";
                descendingLevels[1].style.display = "none";
                descendingLevels[2].style.display = "";  
            }  
        } else {
            console.log("idk lol");
        }
    } else {
        for (var i = 0; i < descendingLevelsMarxism.length; i++) {
            if (descendingLevelsHRT[i].id == interest || descendingLevelsMarxism[i].id == interest) {
                if(descendingLevelsHRT[i].id == interest) {
                    descendingLevelsHRT[i].style.display = "";
                    descendingLevels[0].style.display = "";
                    descendingLevels[1].style.display = "none";
                    descendingLevels[2].style.display = "none";

                } else if(descendingLevelsMarxism[i].id == interest) {
                    descendingLevelsMarxism[i].style.display = "";
                    descendingLevels[0].style.display = "none";
                    descendingLevels[1].style.display = "none";
                    descendingLevels[2].style.display = "";

                } else {
                    alert("ur fucked");
                }

            } else if (interest == "journo-blog") {
                descendingLevels[1].style.display = "none";
                descendingLevelsHRT[i].style.display = "none";
                descendingLevelsMarxism[i].style.display = "none";
                descendingLevelsMarxism[5].style.display = "";
                descendingLevels[2].style.display = "";

            } else if (descendingLevelsHRT[i].id !== interest && descendingLevelsMarxism[i].id !== interest) {
                descendingLevelsHRT[i].style.display = "none";
                descendingLevelsMarxism[i].style.display = "none";

                if (interest !== "journo-blog") {
                    descendingLevelsMarxism[5].style.display = "none";
                }

            } else {
                console.log("idk lol")
            }

        }
    }
    console.log("comparison function ran")
}
//================================================================================
// function declarations
//================================================================================



for (var i = 0; i < filteringButton.length; i++) {
    filteringButton[i].onclick = buttonClickedFunction;
}