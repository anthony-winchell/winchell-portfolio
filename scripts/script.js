const dateContainer = document.getElementById("date-container");
var currDate = new Date();
var day = String(currDate.getDate()).padStart(2,0);
var year = currDate.getFullYear();
var month = String(currDate.getMonth() + 1).padStart(2, 0);
const dateToDisplay = `${month}/${day}/${year}`
console.log(dateToDisplay);



dateContainer.innerHTML = `<p>Today's date: ${dateToDisplay}</p>`;

