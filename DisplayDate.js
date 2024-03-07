// Write a JavaScript program to display the current day and time in the following format.

// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM" : " AM";

// Convert 24-hour format to 12-hour format and handle special cases
hour = (hour % 12) || 12; // If hour is 0, set it to 12

// Check for special cases of Noon and Midnight
prepand = (hour === 12 && minute === 0 && second === 0) ? (prepand === " PM" ? " Noon" : " Midnight") : prepand;

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second);
