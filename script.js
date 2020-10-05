//Global variables

var hour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

var displayedHours = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
];

//Displays the current date and time
var currentDay = dayjs().format("dddd, MMM D YYYY");
$("#currentDay").append(currentDay);

//Loop that creates the rows for each hour
for (var i = 0; i < hour.length; i++) {
  var createDiv = $("<div>");
  createDiv
    .attr("class", "row time-block")
    .attr("id", "hour-" + hour[i])
    .attr("value", hour[i]);
  //Creates the text area
  var createTextArea = $("<textarea>");
  $(".container").append(createDiv);

  //Puts the displayedHours on the left side
  var currentTime = displayedHours[i];
  createDiv.append($("<div class = 'col-md-1 hour'>").text(currentTime));

  //The text area across 10 columns
  createDiv.append(
    createTextArea
      .attr("class", "col-md-10 description")
      .attr("id", "memo-area")
  );
