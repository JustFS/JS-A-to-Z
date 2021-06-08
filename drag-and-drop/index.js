let item;

document.addEventListener("dragstart", (e) => {
  item = e.target;
  e.dataTransfer.setData("text", "");
});

document.addEventListener("dragover", (e) => {
  if (item) e.preventDefault()
});

document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.target.appendChild(item);
    e.preventDefault();
  }
});

document.addEventListener("dragend", () => item = null);
