/*
let totalNumber = 0;

$("#needy-button").click( function(){

    totalNumber = totalNumber +1;
    let sentence = "I was clicked ";
    let totalNumbers = sentence + totalNumber;
    $("#needy-button").html(totalNumbers);
}
)
*/
var count = 0;
var colors = ["blue", "Coral", "HotPink", "red"]; 


$("#needy-button").click(function () {
    
    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count % 4] ); 

    $("body").css("background-color", colors[count % 4]);

    count = count + 1;


});