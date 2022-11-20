let heading2 = document.getElementsByClassName("heading2");
console.log("heading2", heading2);
// Method 1 (not recommended)
heading2[0].onclick = function () {
  switch (heading2[0].style.color) {
    case "black":
      heading2[0].style.color = "red";
      //heading2.style = "color: blue";
      break;
    case "red":
      heading2[0].style.color = "blue";
      break;
    case "blue":
      heading2[0].style.color = "green";
      break;
    case "green":
      heading2[0].style.color = "red";
      break;
    default:
      heading2[0].style.color = "black";
  }
};

heading2[1].onclick = function () {
  switch (heading2[1].style.color) {
    case "black":
      heading2[1].style.color = "red";
      //heading2.style = "color: blue";
      break;
    case "red":
      heading2[1].style.color = "blue";
      break;
    case "blue":
      heading2[1].style.color = "green";
      break;
    case "green":
      heading2[1].style.color = "red";
      break;
    default:
      heading2[1].style.color = "black";
  }
};

// Method 2
for (let i = 0; i < heading2.length; i++) {
  heading2.addEventListener("click", function () {
    switch (heading2[i].style.color) {
      case "black":
        heading2[i].style.color = "red";
        //heading2.style = "color: blue";
        break;
      case "red":
        heading2[i].style.color = "blue";
        break;
      case "blue":
        heading2[i].style.color = "green";
        break;
      case "green":
        heading2[i].style.color = "red";
        break;
      default:
        heading2[i].style.color = "black";
    }
  });
}

// Method 3
for (let i = 0; i < heading2.length; i++) {
  heading2[i].addEventListener("click", changeColor);
}

function changeColor(event) {
  event.target.style.color = "red";
}
