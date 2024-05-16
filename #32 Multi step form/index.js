// const formStep = document.querySelectorAll(".form-step");
// const btnPrev = document.querySelectorAll(".btn-prev");
// const btnNext = document.querySelectorAll(".btn-next");
// const form = document.querySelector(".form");
// const line = document.querySelectorAll(".line");
// let stepCount = 0;

// form.onsubmit = (e) => {
//   e.preventDefault();
// };

// btnNext.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     stepCount++;
//     updateFormStep();
//     progressStep();
//   });
// });

// btnPrev.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     stepCount--;
//     if (stepCount <= formStep.length) {
//       updateFormStep();
//       progressStep();
//     }
//   });
// });

// function updateFormStep() {
//   formStep.forEach((step) => {
//     step.classList.contains("form__step-active") &&
//       step.classList.remove("form__step-active");
//   });

//   console.log(stepCount, formStep.length);
//   formStep[stepCount].classList.add("form__step-active");
// }

// function progressStep() {
//   line.forEach((item, idx) => {
//     if (idx < stepCount + 1) {
//       item.classList.add("line-active");
//     } else {
//       item.classList.remove("line-active");
//     }
//   });
// }

const formStep = document.querySelectorAll(".form-step");
const btnPrev = document.querySelectorAll(".btn-prev");
const btnNext = document.querySelectorAll(".btn-next");
const form = document.querySelector(".form");
const line = document.querySelectorAll(".line");
let stepCount = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btnNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    stepCount++;
    updateFormStep();
    updateProgress();
  });
});

btnPrev.forEach((btn) => {
  btn.addEventListener("click", () => {
    stepCount--;
    updateFormStep();
    updateProgress();
  });
});

function updateFormStep() {
  formStep.forEach((step) => {
    step.classList.contains("form__step-active") &&
      step.classList.remove("form__step-active");
  });

  formStep[stepCount].classList.add("form__step-active");
}

function updateProgress() {
  line.forEach((item, idx) => {
    if (idx < stepCount + 1) {
      item.classList.add("line-active");
    } else {
      item.classList.remove("line-active");
    }
  });
}
