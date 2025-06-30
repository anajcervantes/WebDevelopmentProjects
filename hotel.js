// var houseKeeper1 = {
//     yearsOfExperience : 12,
//     name: "Jane",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
    
// }

//Constructor Function for Housekeeper
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    //Constructor Function
    this.clean = function() {
        alert("Cleaning in Progress");
    }
}

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);

//Constructor Function
//name of function must be capitalized 
function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    //Constructor Function
    this.moveSuitcase = function(){
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}

//Initialize object
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
