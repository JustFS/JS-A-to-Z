let item;

document.addEventListener("dragstart", (e) => {
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    e.target.appendChild(item);
  }
});

document.addEventListener("dragend", () => (item = null));
