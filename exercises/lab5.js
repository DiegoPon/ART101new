function askNumber(num){
    let userNum = prompt("guess a number 1-10?");
    if (userNum == num) {
        $("#output").html("You got it");
    }
    else{
        $("#output").html("incorrect");
    }
}

$("#good-button").click(function () {
    askNumber(5);
});