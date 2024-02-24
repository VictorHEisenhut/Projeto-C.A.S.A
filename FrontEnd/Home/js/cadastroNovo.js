const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const simBtns = document.querySelectorAll(".btn-sim");
const naoBtns = document.querySelectorAll(".btn-nao");
const voltarBtns = document.querySelectorAll(".btn-voltar");
//const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

voltarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    formStepsNum--;
    formStepsNum--;
    formStepsNum--;
    formStepsNum--;
    formStepsNum--;
    formStepsNum--;
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

simBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

naoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  //const progressActive = document.querySelectorAll(".progress-step-active");

  //progress.style.width =
  //  ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

