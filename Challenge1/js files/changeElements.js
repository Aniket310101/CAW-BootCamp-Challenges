const chageRingColorToRed = () => {
  document.querySelector('.ring').classList.add('ending');
};

const chageRingColorToGreen = () => {
  document.querySelector('.ring').classList.remove('ending');
};

export {chageRingColorToRed, chageRingColorToGreen};
