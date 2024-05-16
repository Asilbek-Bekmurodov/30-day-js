const accardions = document.querySelectorAll(".accardion");

accardions.forEach((accardion) => {
  accardion.addEventListener("click", () => {
    accardion.classList.toggle("active");
  });
});
