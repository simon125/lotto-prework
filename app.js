const getRandomNumber = () => {
  return Math.floor(Math.random() * 49) + 1;
};
const setup = () => {
  const numbers = buildArrayWithRandomNumbers().sort((a, b) => a - b);

  render(numbers);
  document.getElementById("randomBtn").addEventListener("click", setup);
};
const buildArrayWithRandomNumbers = () => {
  const randomNumbers = [];
  while (randomNumbers.length < 6) {
    const randomNumber = getRandomNumber();
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};

const render = numbers => {
  const ballContainer = document.getElementById("ballContainer");
  ballContainer.innerHTML = "";
  const template = number => {
    return `<span class="shadow"><div class="ball ball-${number}"></div></span>`;
  };

  const balls = numbers.map(template).join("");
  ballContainer.innerHTML = balls;
  numbers.forEach(number => {
    window.bounty.default({
      el: `.ball-${number}`,
      value: number,
      animationDelay: 100,
      letterAnimationDelay: 100
    });
  });
};

document.addEventListener("DOMContentLoaded", setup);
