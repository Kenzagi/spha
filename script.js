

// Get the container element
var navbar = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var links = navbar.getElementsByClassName("links");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}


let popup = document.getElementById("popup");

// function copyEmail(){
	// popup.classList.add("copyEmail");
	// setTimeout(() => {
		// popup.classList.remove("copyEmail");
	// }, 3500);
// }


const copyButton = document.getElementById('email');
copyButton.addEventListener('click', (event) => {
    // getting the text content that we want to copy
    const content = document.getElementById('email').textContent;
    // loading the content into our clipboard
    navigator.clipboard.writeText(content);
	popup.classList.add("copyEmail");
	setTimeout(() => {
		popup.classList.remove("copyEmail");
	}, 3500);
});


// MENU  CODE

const menu = document.getElementById('menu');
let menuContainer = document.getElementById('menu-bg');
let items = document.getElementById('menu-items');
let external_links = document.getElementById('secondary-links');
let check = false;
menu.addEventListener('click', (event) =>{
  
  if(!check){
    menuContainer.classList.add("menu-open");
    check = true;
    items.style.display = "flex";
    external_links.style.display = "flex";
  }
  else{
    menuContainer.classList.remove("menu-open");
    check = false;
    items.style.display = "none";
    external_links.style.display = "none";
  }
  
});

function executeIt(){
  // alert("WHY???");
  if(!check){
    menuContainer.classList.add(" menu-open");
    check = true;
    items.style.display = "flex";
    external_links.style.display = "flex";
  }
  else{
    menuContainer.classList.remove("menu-open");
    check = false;
    items.style.display = "none";
    external_links.style.display = "none";
  }
}