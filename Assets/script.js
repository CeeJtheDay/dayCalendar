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
    newRow.attr("hour", 9 + i);
   $(".container").append(newRow);
    var curHour = newRow.attr("hour");
    if (curHour > 12) {
        curHour = curHour - 12;
        newRow.attr("hour", curHour);
    };
    if (curHour >= 9) {
        curHour = curHour += "AM";
    } else {
        curHour = curHour += "PM";
    }
    newRow.append("<div class = 'col-sm-1 hour'> " + curHour + " </div>");
    newRow.append("<div class = 'col-sm-10 text'><textarea></textarea></div>");
    newRow.append("<button <i class='col-sm-1 fas fa-save saveBtn'></i></button>");
}
};
buildRows();
//      b. Set date at top of page (showTodaysDate) --> moment.js
function showTodaysDate(){
    var currentdate = new Date(); 
var dateTime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                console.log(datetime);
}
//      c. Save button event handler (saveRow) --> use localStorage
function saveRow(){

}
//      d. change row style (updateRowStyle) --> moment.js
function updateRowStyle(){
//          i. on page load check current time (hour) against rows in scheduler
//          ii. update style for those that are past, present, future.

}
