function updateStorage() {
  localStorage.setItem(
    "notes",
    document.querySelector(".notes-container").innerHTML
  );
}

function showNotes() {
  document.querySelector(".notes-container").innerHTML =
    localStorage.getItem("notes");
}

showNotes();

function onButton() {
  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  let image = document.createElement("img");
  image.setAttribute("src", "./images/delete.png");
  image.setAttribute("alt", "delete");
  document
    .querySelector(".notes-container")
    .appendChild(inputBox)
    .appendChild(image);
}
document.querySelector(".notes-container").addEventListener("click", (k) => {
  if (k.target.localName == "img") k.target.parentNode.remove();
  updateStorage();
});

document.querySelector(".notes-container").addEventListener("input", (k) => {
  if (k.target.className === "input-box") {
    updateStorage();
  }
});
