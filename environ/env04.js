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
    slenderSentence += "<p><br><br><br>You have collected all my pages, the " + slend_obj.pages[7] + "page is my favorite.</p>";
}
else{
    slenderSentence += "<p><br><br><br>Collect my pages.</p>";
}

$("#textbox_slender_text").html(slenderSentence);

let jimboSentence;

jimboSentence = "<p>Hey there, I'm <span id='orange'>" + jim_obj.name + "</span>.I'm in a bit of a <span id='blue'>small blind</span>. Play my game, you know you want too.</p>"

//ngl im getting tired on working on this one page i would like to bounce around and make different enviroments


//function------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Create a Proxy to watch for changes
slend_obj = new Proxy(slend_obj, {
  set(target, prop, value) {
    target[prop] = value;
    if (prop === "allPagesCollected" && value === true) {
      updateSlenderText(); // automatically update textbox when all pages collected
    }
    return true;
  }
});

function updateSlenderText() {
  let slenderSentence = "<p>My name is " + slend_obj.name + "<br> I am " + slend_obj.type + ". </p>";
  if(slend_obj.allPagesCollected){
      slenderSentence += "<p><br><br>You have collected all my pages, the " + slend_obj.pages[7] + " page is my favorite.</p>";
  } else {
      slenderSentence += "<p><br><br><br>Collect my pages.</p>";
  }
  $("#textbox_slender_text").html(slenderSentence);
  
insertSmallImageInTextbox("slender/page_6.png");
}

// Total number of images to click
const TOTAL_IMAGES = 8;
//const IMAGE_SRC = 'jimbo.png';

// Counter for images clicked
let score = 0;

// Global flag for completion
let found = false;

// Overlay layer
const layer = document.getElementById('random-image-layer');

let page_array1 = ["page_1", "page_2", "page_3", "page_4", "page_5", "page_6", "page_7", "page_8"]
let page_array2 = ["page_2", "page_3", "page_8", "page_4", "page_7", "page_6", "page_5", "page_1"]
let page_array3 = ["page_6", "page_2", "page_4", "page_3", "page_5", "page_6", "page_8", "page_7"]
let page_array4 = ["page_3", "page_1", "page_2", "page_4", "page_7", "page_6", "page_5", "page_8"]
// Function to spawn a single image
function spawnImage() {
  // Stop spawning if we've reached the total
   if (score >= page_array1.length) {
    slend_obj.allPagesCollected = true;
    console.log("All images found! found =", found);
    return;
  }
  const IMAGE_SRC = page_array1[score]; // pick image based on current score
  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'image-wrapper';

  const size = 120; // fixed size for now
  wrapper.style.width = `${size}px`;
  wrapper.style.height = `${size}px`;

  // Image element
  const img = document.createElement('img');
  img.src = "slender/" + IMAGE_SRC + ".png";

  // Text overlay
  const text = document.createElement('span');
  text.className = 'image-text';
  text.textContent = '';

  wrapper.appendChild(img);
  wrapper.appendChild(text);

  // Random position fully inside viewport
  const x = Math.random() * (window.innerWidth - size);
  const y = Math.random() * (window.innerHeight - size);
  wrapper.style.left = `${x}px`;
  wrapper.style.top = `${y}px`;

  // Click event
  wrapper.addEventListener('click', () => {
    score++;
    console.log('Score:', score);
    wrapper.remove();       // remove clicked image
    spawnImage();           // spawn next image
  });

  // Add to overlay
  layer.appendChild(wrapper);
}

// Start with first image when page loads
window.addEventListener('load', () => {
  spawnImage();
  updateSlenderText(); // initial textbox
});



/*

function insertSmallImageInTextbox(filePath) {
  const textbox = document.getElementById("textbox_slender_text");
  if (!textbox) {
    console.warn("Textbox not found");
    return;
  }

  // Create an inline small image HTML string
  const imgHTML = `<img src="${filePath}" style="width:20px; height:20px; vertical-align:middle;">`;

  // Example: inserting it at the end of existing text
  textbox.innerHTML += " " + imgHTML;
}

// Example usage:

// Number of images
const NUM_IMAGES = 10;
const IMAGE_SRC = 'jimbo.png';
let score = 0;

// Create or find the overlay layer
const layer = document.getElementById('random-image-layer');

function spawnImages(n) {
  for (let i = 0; i < n; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = 'image-wrapper';

    const size = 100 + 0*Math.random() * 90; // random 60–150px but 0 for now no variation yet
    wrapper.style.width = `${size}px`;
    wrapper.style.height = `${size}px`;

    const img = document.createElement('img');
    img.src = IMAGE_SRC;

    const text = document.createElement('span');
    text.className = 'image-text';
    text.textContent = 'Click Me!';

    wrapper.appendChild(img);
    wrapper.appendChild(text);

    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);
    wrapper.style.left = `${x}px`;
    wrapper.style.top = `${y}px`;

    wrapper.addEventListener('click', () => {
      score++;
      console.log('Score:', score);
      wrapper.remove();
    });

    layer.appendChild(wrapper);
  }
}

window.addEventListener('load', () => {
  spawnImages(NUM_IMAGES);
});


document.getElementById('spawn-test-btn').addEventListener('click', () => {
  spawnImages(NUM_IMAGES);
});
*/