const getRandomNumber = () => {
  let min = 1;
  let max = 20;
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomNumber;
