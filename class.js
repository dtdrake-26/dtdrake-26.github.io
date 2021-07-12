class Mission {
    //states first 
    constructor(
        fuellevel,
        oxygenlevel,
        foodlevel,
        spacecraft,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        NumofAstronaunts
    ) { //substantiate states
        this.fuellevel = fuellevel;
        this.oxygenlevel = oxygenlevel;
        this.foodlevel = foodlevel;
        this.spacecraft = spacecraft;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.NumofAstronaunts = NumofAstronaunts;  
        
    }
//list methods 
    launch(){
        //code for launch goes here 
        alert("We are taking off");
    }

    dismissionlaunchdate(){
        alert("This mission launches on "+ this.launchDateMonth + " " + this.launchDateDay + ", " + this.launchDateYear);
    }
}
function launchFall() {
    console.log("launchFall() running")
    fallaunch.launch();
}
function displayFall() {
    console.log("displayFall() running")
    fallaunch.dismissionlaunchdate();
}