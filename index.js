const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  const checkFormat = (value) => {
    return value < 10 ? "0" + value : value;
  };

  return (seconds) => {
    let timerHours = 0,
      timerMinuts = 0,
      timerSeconds = 0;

    const setTimerValue = () => {
      timerHours = checkFormat(Math.floor(seconds / 60 / 60));
      timerMinuts = checkFormat(Math.floor((seconds / 60) % 60));
      timerSeconds = checkFormat(seconds % 60);

      timerEl.innerHTML = `${timerHours}:${timerMinuts}:${timerSeconds}`;
      seconds--;
    };
    setTimerValue();
    setInterval(setTimerValue, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
