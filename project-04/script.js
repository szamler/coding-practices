window.onload = function() {
  document.querySelectorAll(".list .image").forEach((drink) => {
    drink.addEventListener('click', drinkSelect);
  });
  document.querySelectorAll(".mug .imgwrapper1, .mug .imgwrapper2,.mug .imgwrapper3, .mug .imgwrapper4, .mug .imgwrapper5").forEach((mug) => {
    mug.addEventListener('click', mugSelect);
  });
  
}

function drinkSelect(element) {
document.querySelector("#selectedDrink").src = element.srcElement.src
  
}

function mugSelect(element) {
  console.log("#selectedMug")
  document.querySelector("#selectedMug").src = element.srcElement.src;
  document.querySelector(".result").scrollIntoView()
}