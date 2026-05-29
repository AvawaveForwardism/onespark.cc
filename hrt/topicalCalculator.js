var filteringButton = document.getElementsByClassName("filterButtons");
var buttonClicked = '';
var possibleSubFilters = document.getElementsByClassName("filter");
var possibleMasterFilters = document.getElementsByClassName("masterFilter");
var estrogenCalculator = document.getElementById("estrogenWrapper");
var testosteroneCalculator = document.getElementById("testosteroneWrapper");
var makeSelectionText = document.getElementById("fillerWrapper");

const estroRawsResult = document.getElementById("rawsEstrogen");
    const estroRawsNumber = parseFloat(estroRawsResult.value);

const estroDispensingResult = document.getElementById("dispensingEstrogen");
    const estroDispensingNumber = parseFloat(estroDispensingResult.value);

const estroSolventResult = document.getElementById("solventEstrogen");
    const estroSolventNumber = parseFloat(estroSolventResult.value);


const testostRawsResult = document.getElementById("rawsTestosterone");
    const testostRawsNumber = parseFloat(testostRawsResult.value);

const testostDispensingResult = document.getElementById("dispensingTestosterone");
    const testostDispensingNumber = parseFloat(testostDispensingResult.value);;

const testostSolventResult = document.getElementById("solventTestosterone");
    const testostSolventNumber = parseFloat(testostSolventResult.value);

//  =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   

const estroConcentration = document.getElementById("container1");
const estroSolvent = document.getElementById("container2");
const estroPenEnhancer = document.getElementById("container3");
const estroStabilizer = document.getElementById("container4");
const estroSupply = document.getElementById("container5");

const testostConcentration = document.getElementById("container6");
const testostSolvent = document.getElementById("container7");
const testostPenEnhancer = document.getElementById("container8");
const testostStabilizer = document.getElementById("container9");
const testostSupply = document.getElementById("container10");

var selectionList = [];

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

function displayEstrogen() {
    makeSelectionText.style.display = "none";
    estrogenCalculator.style.display = "";
    testosteroneCalculator.style.display = "none";
}
    function calculateEstrogen() {

    }

function displayTestosterone() {
    makeSelectionText.style.display = "none";
    estrogenCalculator.style.display = "none";
    testosteroneCalculator.style.display = "";
}
    function calculateTestorone() {

    }

function clearScreen() {
    var selectedFilter = document.getElementById("filteredButton"); 
    makeSelectionText.style.display = "";
    estrogenCalculator.style.display = "none";
    testosteroneCalculator.style.display = "none";
        selectedFilter.id = null;
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



//================================================================================
// function declarations
//================================================================================


for (var i = 0; i < filteringButton.length; i++) {
  var btn = filteringButton[i];
  if (btn.addEventListener) {
    btn.addEventListener('click', buttonClickedFunction);
  } else if (btn.attachEvent) { // IE8
    btn.attachEvent('onclick', buttonClickedFunction);
  } else { // last resort: preserve existing .onclick
    var prev = btn.onclick;
    btn.onclick = function (e) {
      if (typeof prev === 'function') prev.call(this, e || window.event);
      buttonClickedFunction.call(this, e || window.event);
    };
  }
}
