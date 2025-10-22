let creature = ["slenderman", "golden freddy", "jimbo", "luigi_scream"];

let slend_obj = {
    type: "creepypasta",
    name: "slenderman",
    date_origin: 2009,
    pages: ["1", "2", "3","4" ,"5", "6", "7", "8"],
    allPagesCollected: false,
    
};

let jim_obj = {
    type: "video game",
    name: "jimbo",
    date_origin: 2024,
    multiplier: 4,
    cost: 2,
    sell: 1,

};

let slenderSentence;

slenderSentence = "<p>My name is " + slend_obj.name + "<br> I am " + slend_obj.type + ". </p>";
if(slend_obj.allPagesCollected){
    slenderSentence += "<p>You have collected all my pages, the " + slend_obj.pages[7] + "page is my favorite.</p>";
}
else{
    slenderSentence += "<p><br><br><br>Collect my pages.</p>";
}

$("#textbox_slender_text").html(slenderSentence);

let jimboSentence;

jimboSentence = "<p>Hey there, I'm <span id='orange'>" + jim_obj.name + "</span>.I'm in a bit of a <span id='blue'>small blind</span>. Play my game, you know you want too.</p>"

//ngl im getting tired on working on this one page i would like to bounce around and make different enviroments