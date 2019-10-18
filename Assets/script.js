// User Flow
// --------------------------------------
// 1. open app in browser --> create HTML, JS file, CSS 
// 2. see the date at the top of the page --> function  -->
// 3. see schedule 1 hr blocks (9am - 5pm) --> function loop
//  a. Time
//  b. text area (type event name) --> unique id's 
//  c. save event (save button) --> event handler
// 4. if task is in the past - grey  --> css styles --> function for past, present, future
// 5. if task is in the present - blue
// 6. if task is in the future - green
//-----------------------------------------

//To Build:

// 1. HTNML document
//  a. Title
//  b. Table
//      i. Rows( each hour)
//      ii. Text area
//      iii. Save Button
//
// 2. Javascript
//      a. funtion to build scheduler rows (buildRows) --> loop, moment.js
//      b. Set date at top of page (showTodaysDate) --> moment.js
//      c. Save button event handler (saveRow) --> use localStorage
//      d. change row style (updateRowStyle) --> moment.js
//          i. on page load check current time (hour) against rows in scheduler
//          ii. update style for those that are past, present, future.

// 3. CSS
//      a. styles already exsist (past, present, future)



//      a. funtion to build scheduler rows (buildRows) --> loop, moment.js
function buildRows(){
    for (var i = 0; i < 9; i++) {
    var newRow = $("<div class = 'row'>");
    //gets current time @ pageload
    var curTime = new Date().getHours();
    function am (curTime) {
        if (curTime >= 0 && curTime <= 10) {
            return true;
        } else {
            return false;
        }
    }
    // creates new row and assigns attribute of hour
    newRow.attr("hour", 9 + i);
    // adds the row to the main content
   $(".container").append(newRow);
   // grabs current value of the hour attribute
    var curHour = newRow.attr("hour");
    // adjusts hour attribute for afternoon hours
    if (curHour > 12) {
        curHour = curHour - 12;
        newRow.attr("hour", curHour);
    };
    // assigns AM or PM to hour attribute
    if (curHour >= 9 && curHour != 12) {
        curHour = curHour += "AM";
    } else {
        curHour = curHour += "PM";
    }
    // create the input area and row title
    var txtBox = $("<div class = 'col-sm-10 time-block'><textarea class = 'description'></textarea></div>");
    var hrBox = $("<div class = 'col-sm-1 hour'> " + curHour + " </div>");
    newRow.append(hrBox);
    newRow.append(txtBox);
    // adjusts time to account for afternoon hours
    if (curTime > 12) {
        curTime = curTime - 12;
    }
    // assigns classes to each hour for tracking present time
    if (parseInt(curHour) < curTime) {
       txtBox.addClass("past");
    } 
    if (parseInt(curHour) > curTime) {
        txtBox.addClass("future");
    }
    if (parseInt(curHour) === curTime) {
        txtBox.addClass("present");
    }
    //adds save button at end of row
    newRow.append("<button <i class='col-sm-1 fas fa-save saveBtn'></i></button>");
}
};
buildRows();
//      b. Set date at top of page (showTodaysDate) --> moment.js
function showTodaysDate(){
    var time = new Date();
    $("#currentDay").append("<div class = 'col-sm-12'> " + 
    time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true } 
    + " </div>"));

};
showTodaysDate();

//      c. Save button event handler (saveRow) --> use localStorage
function saveRow(){
    // $("button").on("click", function()
//  {

//  })
};
//      d. change row style (updateRowStyle) --> moment.js
function updateRowStyle(){
//          i. on page load check current time (hour) against rows in scheduler
//          ii. update style for those that are past, present, future.

}
