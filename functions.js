/*
   New Perspectives on HTML and CSS
   Tutorial 10
   Case Problem 3
   Filename: functions.js

   This file contains functions used in the today.htm file.

   The showDate function displays the date in the format: "Weekday, Month Day, Year"
   The weekDay function displays the weekday name

*/

function showDate() {
   thisDate = new Date();
   var thisWDay=thisDate.getDay();
   var thisDay=thisDate.getDate();
   var thisMonth=thisDate.getMonth();
   var thisYear=thisDate.getFullYear();
   var mName = new Array("January", "February", "March", "April", "May", 
       "June", "July", "August", "September", "October","November", "December");
   var wdName = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
       "Thursday", "Friday", "Saturday");
   return wdName[thisWDay]+", "+mName[thisMonth]+" "+thisDay+", "+thisYear;
}

function showTime(){
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();

document.write("It is ");
document.write(hour + ":" + min + ".");
document.write("<br />")

if (hour>10 && hour<20 ) {
	return ("We're open now. Come on over!");
}

else {
	return("Sorry, we're closed");
}

}



