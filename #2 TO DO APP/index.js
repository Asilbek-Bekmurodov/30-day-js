const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const form = document.querySelector(".row");
const clearBtn = document.querySelector("#clear_btn");

window.addEventListener("DOMContentLoaded", () => {
  inputBox.focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();

  if (listContainer.innerText) {
    clearBtn.style.display = "block";
  } else {
    clearBtn.style.display = "none";
  }
});

function clearList() {
  console.dir(listContainer);
  Array.from(listContainer.children).forEach((item) => {
    item.remove();
  });
  localStorage.removeItem("data");

  if (listContainer.innerText) {
    clearBtn.style.display = "block";
  } else {
    clearBtn.style.display = "none";
  }
}
// Array.from(listContainer.children).length !== 0
console.log(listContainer.innerText);

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something !");
  } else {
    const todo = document.createElement("li");
    todo.innerHTML = inputBox.value;
    todo.classList.add("fade");

    listContainer.insertAdjacentElement("afterbegin", todo);
    inputBox.value = "";

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    todo.appendChild(span);

    saveData();
  }
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.classList.add("animation");
      setTimeout(() => {
        e.target.parentElement.remove();
        if (listContainer.innerText) {
          clearBtn.style.display = "block";
        } else {
          clearBtn.style.display = "none";
        }
        saveData();
      }, 500);
    }
  },
  false
);
// function removeElement(e) {}
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();

// setTimeout(() => {
//   form.append("hello world");
// }, 3000);
