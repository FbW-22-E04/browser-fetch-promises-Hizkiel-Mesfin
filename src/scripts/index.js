// // The following line makes sure your styles are included in the project. Don't remove this.
// import "../styles/main.scss";
// // Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.querySelector("#myModal");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 60000);
});

myPromise.then(() => {
  modal.style.display = "block";
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    modal.style.display = "none";
  }
});
