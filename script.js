const featBtn = document.getElementById("features");
const compBtn = document.getElementById("companyBtn");
const featMenu = document.getElementById("featMenu");
const compMenu = document.querySelector("company-menu");

featBtn.addEventListener("click", () => {
  if (featMenu.style.display === "none") {
    featMenu.style.display = "block";
  } else {
    featMenu.style.display = "none";
  }
});

compBtn.addEventListener("click", () => {
  if (compMenu.style.display === "none") {
    compMenu.style.display = "block";
  } else {
    compMenu.style.display = "none";
  }
});
