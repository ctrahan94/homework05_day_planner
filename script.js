//Global variables

var hour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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
  "7pm"
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

   //The save button takes the 1 column on the far right of the page
   createDiv.append($("<button class= 'col-md-1 saveBtn'>").text("save"));

   //If statement that creates a grey time block for past time blocks, red time block for the present time block and green time block for future time blocks
   if (dayjs().format("H") == hour[i]) {
     $("#hour-" + hour[i]).addClass("present");
   } else if (dayjs().format("H") > hour[i]) {
     $("#hour-" + hour[i]).addClass("past");
   } else if (dayjs().format("H") < hour[i]) {
     $("#hour-" + hour[i]).addClass("future");
   }
 }

 //Makes the save button clickable and sets the key as the hour you are in and the value is the message that you entered 
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var key = $(this).parent().attr("id");
  localStorage.setItem(key, value);
});

//Get the value from local storage and displays it on the webpage
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
