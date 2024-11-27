const boxesClass = document.getElementsByClassName("box"); //HTMLCOllection
const boxesQS = document.querySelectorAll(".box"); // nodeList

console.log(boxesClass);
console.log(boxesQS);

document.getElementById("addBox").addEventListener("click", function () {
  // Create and add a new box to the DOM
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.textContent = `Box ${boxesClass.length + 1}`;
  document.querySelector(".boxes").appendChild(newBox); //first match
});

// Highlight all boxes using HTMLCollection
document
  .getElementById("highlightAllBoxes")
  .addEventListener("click", function () {
    // Get all elements with the class 'box'

    for (let i = 0; i < boxesClass.length; i++) {
      boxesClass[i].classList.add("highlight");
    }

    //Array.from(boxesClass).forEach(boxes=>boxes.classList.add('highlight'));
  });

// Highlight all boxes using NodeList
document
  .getElementById("highlightAllBoxesQuery")
  .addEventListener("click", function () {
    // Get all elements with the class 'box'
    //const boxesQS = document.querySelectorAll(".box"); // nodeList
    boxesQS.forEach((box) => {
      box.classList.add("highlight");
    });
  });

/*
CLASSNAME                                   - QUERYSELECTORALL

- selector-> className                      - className, id, tagName
- Live HTMLCollection                       - static NodeList
- query it only once                        - query it every time
- iteration->regular for-loop               - forEach

querySelector - first match
*/
