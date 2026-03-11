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
        for (var i = 0; i < subListLength; i++) {
            if (interest == "allLinks") {
                descendingLevels[i].style.display = "";
                descendingLevelsHRT[0].style.display = "";
                    console.log("hrtTitle has been made visible again");
                descendingLevelsHRT[1].style.display = "";
                    console.log("dosing has been made visible again");
                descendingLevelsHRT[2].style.display = "";
                    console.log("suppliers has been made visible again");
                descendingLevelsHRT[3].style.display = "";
                    console.log("homeBrewing has been made visible again");
                descendingLevelsHRT[4].style.display = "";
                    console.log("communities has been made visible again");
                console.log(descendingLevels[i].id + " has been made visible again");
                console.log("div has been made visible again");
            } else if (interest == "hrtAll") {
                descendingLevelsHRT[0].style.display = "";
                console.log("hrtTitle has been filtered for");
                descendingLevelsHRT[1].style.display = "";
                console.log("dosing has been filtered for");
                descendingLevelsHRT[2].style.display = "";
                console.log("suppliers has been filtered for");
                descendingLevelsHRT[3].style.display = "";
                console.log("homeBrewing has been filtered for");
                descendingLevelsHRT[4].style.display = "";
                console.log("communities has been filtered for");
                console.log(interest + " has been filtered for");
                descendingLevels[0].style.display = "";
                descendingLevels[1].style.display = "none";
                descendingLevels[2].style.display = "none";
                
            } else if (interest == "marxismAll") {
                descendingLevelsMarxism[i].style.display = "";
                descendingLevelsHRT[0].style.display = "none";
                console.log("hrtTitle has been hidden");
                descendingLevelsHRT[1].style.display = "none";
                console.log("dosing has been hidden");
                descendingLevelsHRT[2].style.display = "none";
                console.log("suppliers has been hidden");
                descendingLevelsHRT[3].style.display = "none";
                console.log("homeBrewing has been hidden");
                descendingLevelsHRT[4].style.display = "none";
                console.log("communities has been hidden");
                console.log(interest + " has been filtered for");
                descendingLevels[1].style.display = "none";
                descendingLevels[2].style.display = "";     
            } else {
                console.log("idk lol");
            }
        } 
    } else {
        for (var i = 0; i < descendingLevelsMarxism.length; i++) {
            if (descendingLevelsHRT[i].id == interest || descendingLevelsMarxism[i].id == interest) {
                if(descendingLevelsHRT[i].id == interest) {
                    descendingLevelsHRT[i].style.display = "";
                    descendingLevels[0].style.display = "";
                    descendingLevels[1].style.display = "none";
                    descendingLevels[2].style.display = "none";            
                    console.log(descendingLevelsHRT[i].id + " has been filtered for");

                } else if(descendingLevelsMarxism[i].id == interest) {
                    descendingLevelsMarxism[i].style.display = "";
                    descendingLevels[0].style.display = "none";
                    descendingLevels[1].style.display = "none";
                    descendingLevels[2].style.display = "";             
                    console.log(descendingLevelsMarxism[i].id + " has been filtered for");

                } else {
                    alert("ur fucked");
                }

            } else if (interest == "journo-blog") {
                descendingLevels[1].style.display = "none";
                descendingLevelsHRT[i].style.display = "none";
                console.log(i + descendingLevelsHRT[i].id + " has been parsed and removed");
                descendingLevelsMarxism[i].style.display = "none";
                console.log(i + descendingLevelsMarxism[i].id + " has been parsed and removed");
                descendingLevelsMarxism[5].style.display = "";
                descendingLevels[2].style.display = "";
                console.log("JOURNAL THING HAS BEEN MADE VISIBLE");
            } else if (descendingLevelsHRT[i].id !== interest && descendingLevelsMarxism[i].id !== interest) {
                descendingLevelsHRT[i].style.display = "none";
                console.log(i + descendingLevelsHRT[i].id + " has been parsed and removed");
                descendingLevelsMarxism[i].style.display = "none";
                console.log(i + descendingLevelsMarxism[i].id + " has been parsed and removed");
                if (interest !== "journo-blog") {
                    descendingLevelsMarxism[5].style.display = "none";
                    console.log(i + descendingLevelsMarxism[5].id + " has been parsed and removed");
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