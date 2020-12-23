let parentDiv = document.querySelector(".container");
let div = document.querySelector(".flex");

let allPeople = got.houses.map(house => house.people).flat();

console.log(allPeople);

allPeople.forEach(person => {
  let article = document.createElement("article");
  article.classList.add("flex-30");
  let image = document.createElement("img");
  image.src = person.image;
  let heading = document.createElement("h2");
  heading.innerText = person.name;
  let flexDiv = document.querySelector("div");
  article.classList.add("flex-child");
  flexDiv.append(image, heading);
  let para = document.createElement("p");
  para.innerText = person.description;
  let button = document.createElement("button");
  button.innerText = "Learn More!";
  article.append(image, heading, para, button);

  div.append(article);
  parentDiv.append(div);
});
