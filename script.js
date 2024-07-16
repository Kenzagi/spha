

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


// DROPDOWN MENU  CODE//

// const block = document.getElementById('block');
// let skills = document.getElementById('skills');
// let list = document.getElementById('list');
// let check = false;
// block.addEventListener('click', (event) =>{
  
//   if(!check){
//     skills.classList.add("showSkills");
//     check = true;
//     list.style.display = "flex";
//   }
//   else{
//     skills.classList.remove("showSkills");
//     check = false;
//     list.style.display = "none";
//   }
  
// });