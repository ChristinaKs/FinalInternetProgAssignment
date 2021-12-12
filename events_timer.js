"use strict";


//      Author: Christina Kallas & Sebastien Seide
//      Date:   29/11/2021

//      Filename:   comments_timer.js



showClock();

setInterval("showClock()", 1000);

function showClock() {
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   var eventDate = nextEvent(thisDay);
   eventDate.setHours(21,0,0);

   var days = (eventDate - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins= (hrs - Math.floor(hrs))*60; 
   var secs = (mins - Math.floor(mins))*60;

   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextEvent(currentDate) {
   var cYear = currentDate.getFullYear();
   var eventDate = new Date("December 20, 2021");
   eventDate.setFullYear(cYear);
   return eventDate;
}