const dialog = document.getElementById("dialog");
const showBtn = document.getElementById("show");
const showModalBtn = document.getElementById("showModal");
const closeBtn = document.getElementById("close");

showBtn.addEventListener("click", () => {
  dialog.show();
});

showModalBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
