const XLSX = require("xlsx");

const workbook = XLSX.readFile("stored/data.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(worksheet);

module.exports = data;
