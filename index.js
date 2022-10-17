const addDays = require("date-fns/addDays");
let newDate = (days) => {
  return addDays(new Date(2020, 7, 22), days);
};

module.exports = newDate;
