let array_one = [
    "a torn paper",
    "a blue paper",
    "a handwritten paper",
    "a mysterious paper",
    "a piece of paper"
  ];
  
  let array_two = [
    "on the ground",
    "behind the cabinet",
    "in the grass",
    "by a river",
    "in my bag"
  ];
  
  // let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  
  function renderPoem() {
    let element_from_array_one =
      array_one[Math.floor(Math.random() * array_one.length)];
  
    let element_from_array_two =
      array_two[Math.floor(Math.random() * array_two.length)];
  
    // grab div from html
    let poem = document.querySelector(".poem");
  
    // create a new element (paragraph)
    let paragraph = document.createElement("p");
    paragraph.textContent = element_from_array_one + " " + element_from_array_two;
  
    // append the p to the div
    poem.appendChild(paragraph);
  
    // console.log(element_from_array_one + " " + element_from_array_one)
    console.log(`${element_from_array_one} \n ${element_from_array_two}`);
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);