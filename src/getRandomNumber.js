const getRandomNumber = () => {
  const min = 1;
  const max = 20;
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomNumber;
