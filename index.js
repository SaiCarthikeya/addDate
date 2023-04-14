const addDate = require("date-fns/addDays");

const addNumDays = (days) => {
  const result = addDate(new Date(2020, 07, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

module.exports = addNumDays;
