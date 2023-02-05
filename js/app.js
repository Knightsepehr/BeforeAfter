// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}
let username = document.getElementById("username");
let colorPrimary = document.getElementById("colorprimary");
let colorSecondary = document.getElementById("colorsecondary");
let img1 = document.getElementById("cat1");
let img2 = document.getElementById("cat2");
let submit = document.getElementById("submit");
let pfp = document.getElementById("meow");
let h3username = document.getElementById("h3user");

let r = document.querySelector(':root');
submit.addEventListener("click",()=>{
    // Color 
    console.log(getComputedStyle(r).getPropertyValue("--primary"));
    console.log(getComputedStyle(r).getPropertyValue("--secondary"));
    r.style.setProperty('--primary', `${colorPrimary.value}`);
    r.style.setProperty('--secondary', `${colorSecondary.value}`);
    // Image
    if (img1.checked == true){
        pfp.src = "/images/cat1.jpeg"
    }
    else if (img2.checked == true){
        pfp.src = "/images/cat2.jpeg"
    }
    h3username.innerText = username.value;
});

// sorry if my Code is so ugly, did not have enough energy to do it correctly