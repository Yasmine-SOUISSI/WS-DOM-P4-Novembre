document.write("<h1>Hello World!</h1>");
document.write(new Date().toString());
// Get element by id
let heading = document.getElementById("heading");
console.log("getElementById", heading);

// Get element by class name
let paragraph = document.getElementsByClassName("paragraph");
console.log("getElementsByClassName", paragraph);

// Get element by tag name
let p = document.getElementsByTagName("h1");
console.log("getElementsByTagName", p);
// get element by query selector
let querySelector = document.querySelector("h1");
console.log("querySelector", querySelector);
// get element by query selector all
let querySelectorAll = document.querySelectorAll("h1");
console.log("querySelectorAll", querySelectorAll);

// Change html element
heading.innerHTML = "<p>Hello World</p>";
for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].innerText = "Hello World";
}
// Change attribute
let image = document.getElementById("image");
image.src =
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
image.alt = "Google Logo";
image.width = "200";
image.height = "200";
// 2 ways to change css
image.style = "border: 1px solid black ; border-radius: 50%";
image.style.borderRadius = "50%";

//Add new element to the first div in the body
let newElement = document.createElement("p");
newElement.innerText = "Oumaima";
newElement.style = "color: red";
let div = document.getElementsByTagName("div");
div[0].appendChild(newElement);
// Add new element to the first div in the body
let meta = document.createElement("meta");
meta.name = "description";
meta.content = "This is a description";
document.head.appendChild(meta);
// Insert before image
document.body.insertBefore(newElement, image);
// Remove image
document.body.removeChild(image);
// Replace image with new element
document.body.replaceChild(newElement, image);

// Event listener with event object
for (let i = 0; i < heading2.length; i++) {
    heading2[i].addEventListener("click", changeColor);
  }
// function to handle when the event is triggered
  function changeColor(event) {
    event.target.style.color = "red";
  }
  