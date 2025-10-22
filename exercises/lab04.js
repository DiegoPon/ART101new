let myCommutes = ["bus", "UCSC bus", "walking", "safe ride", "friends car"];

let myFavouriteCommute = {
    type: "car",
    time_cost: 2,
    scrolling: ["reels", "twitter", "mangadex"],
    amIDriving: false,
    drivers: ["Jenna", "Nicholas", "Eric"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[3] 
+ ", " + myCommutes[4] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " 

+ myFavouriteCommute.type + ", I am driving = " + myFavouriteCommute.amIDriving + ", I am scrolling: " + 
myFavouriteCommute.scrolling[0] + "</p>";
$("#output").html(megaSentence);