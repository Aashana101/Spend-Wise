// utils/formatDate.js
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero if month < 10
  const day = ("0" + date.getDate()).slice(-2); // Add leading zero if day < 10
  return `${year}-${month}-${day}`; // Return date in 'yyyy-mm-dd' format
};

export default formatDate;
