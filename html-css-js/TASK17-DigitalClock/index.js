function myDigitalClock(){
let d=new Date();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let z =d.getMonth();
let x = months[z];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let y = days[d.getDay()];
document.getElementById("year").innerHTML=d.getFullYear();
document.getElementById("date").innerHTML=d.getDate();
document.getElementById("month").innerHTML= x; 
document.getElementById("dayname").innerHTML= y;
document.getElementById("hour").innerHTML= d.getHours();
document.getElementById("minute").innerHTML=d.getMinutes();
document.getElementById("second").innerHTML=d.getSeconds();
if(d.getHours()>=12){ 
      document.getElementById("period").innerHTML= "PM";
}
else{
      document.getElementById("period").innerHTML= "AM";
}
if(d.getHours()<10)
       document.getElementById("hour").innerHTML=`0${d.getHours()}`;
if(d.getMinutes()<10)
       document.getElementById("minute").innerHTML=`0${d.getMinutes()}`;
if(d.getSeconds()<10)
       document.getElementById("second").innerHTML=`0${d.getSeconds()}`;
if(d.getHours()>12)
      document.getElementById("hour").innerHTML=`0${d.getHours()-12}`;
}

setInterval(myDigitalClock);

