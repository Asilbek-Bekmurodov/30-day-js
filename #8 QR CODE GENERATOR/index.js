let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("btn");

function generate() {
  qrImage.src =
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` +
    qrText.value;
  // let imgBox = document.createElement('img')
  imgBox.appendChild(qrImage);
  imgBox.classList.add("show-img");
  console.log("log");
}

// btn.addEventListener("click", generate());

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generate();
  }
});
