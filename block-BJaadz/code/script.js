// Select the h1 element and store it in a variable named heading.

let header = document.querySelector("h1");

// Check the typeof heading and log it.

console.log(typeof header);

// Change the color of heading to black.

header.style.color = "black";

// Select all the hr elements and store it in a variable named allHrs using querySelectorAll

let allHrs = document.querySelectorAll("hr");

/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray


Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray = Array.from(allHrs);

console.log(allHrsArray);
// Set the border of the all the hr elements to "1px solid tomato"

allHrsArray.forEach(elem => (elem.style.border = "1px solid tomato"));

// Change the background of all the hr to "antiquewhite" using for of loop.

for (let ele of allHrsArray) {
  ele.style.background = "antiquewhite";
}

// Change the 'border-radius' of all the hr to "5px" using array.

for (let ele of allHrsArray) {
  ele.style.borderRadius = "5px";
}

// Change the alignment of the heading(h1) to center.

header.style.textAlign = "center";

// Change the font size of the heading to 3rem.

header.style.fontSize = "3rem";

// Change the border of hr with class 'image' to `2px solid purple`.

let imgTag = document.querySelector(".image");

imgTag.style.border = "20px solid green";

// Hide the box number 17 (last box).

// Change the border of all the hr element from solid to dashed type

for (let ele of allHrsArray) {
  ele.style.border = "1px dashed";
}

// Create a pragraph element and store it in variable named 'para' using `createElement`

let createElement = document.createElement("p");

// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."

createElement.innerText =
  "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure.";

// Remove all the elements from box 1

let boxOne = document.querySelector(".one").children;

let boxOneArr = Array.from(boxOne);

console.log(boxOneArr.map(elem => elem.remove()));

// Replace all the elements inside box 1 with the para (you created above)

/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/

let box16 = document.querySelector(".sixteen");

console.log(box16.parentNode.nodeName);

console.log(box16.childNodes);

console.log(box16.previousSibling);

console.log(box16.nextSibling);

console.log(box16.lastChild);

console.log(box16.previousElementSibling);

console.log(box16.nextElementSibling);

console.log(box16.firstElementChild);

console.log(box16.lastElementChild);

// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.

let box2 = document.querySelector(".two");

let newP = document.createElement("p");

newP.innerText = "Append inserts as last child";

box2.append(newP);

// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.

let box3 = document.querySelector(".three");

let para3 = document.createElement("p");

para3.innerText = "Prepend inserts as first child";

box3.prepend(para3);

// Change the border of box 4 to '1px solid black'

document.querySelector(".four").style.border = "1px solid black";

// Change the border radius of box 5 to 10px.

document.querySelector(".five").style.borderRadius = "10px";

// Change the text color of box 6 to black.

document.querySelector(".six").style.color = "black";

// Change the font size of the para inside box 1 to 0.8rem.

document.querySelector(".one").style.fontSize = "0.8rem";

// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue

let allBoxes = document.querySelectorAll(".archive").children;

// let allBoxesArr = Array.from(allBoxes);

console.log(allBoxes);

// let odd = allBoxesArr.filter((elem, i) => i % 2 != 0);

// console.log(odd);

// add a class named "awesome-box" to the box 6 using classList property of DOM element.

// Using the toggle classList property toggle the class `awesome-box` from box 2

// Using the remove classList proeprty remove the class `awesome-box` from box 4

// Change the background of the body to bisque

// Create a button and store it in a variable named 'btn'

// textContent of the button should be 'Click Me'

// Change the background of the btn to 'oldlace'

// Change the font size of the btn to 1rem

// Change the border of the btn to '1px solid black'

// Add the padding of '0.5rem 1rem' to btn

// Append the btn in box number 9

// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm

// Select the box 7 using class seven

// Remove all the elements form box seven

// Append the imgElm to the box no 7

// Change the width and height of the image to `100%`

// Select the box 5 using class five

// Create an input element

// Change the placeholder property of the input element to "Enter you email!"

// Append the input element to the box 5 you selected above

// Create two anchor (a) element with  the text of `AltCampus` and `Google`

// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`

// Append both the elements to box 5 you selected above.
