const awesomeFunction = (req, res, next) => {
  res.json('Sadie Mayes');
};

const returnAnotherPerson = (req, res, next) => {
  res.json('Superduper awesome person!');
};
module.exports = {awesomeFunction, returnAnotherPerson};