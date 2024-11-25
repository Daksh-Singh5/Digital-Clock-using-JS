function showTime(){
    var date= new Date()
    var hours= date.getHours()
    var mins= date.getMinutes()
    var secs= date.getSeconds()
    var AmOrPm= "am"



if (hours == 0){
    hours=12
}

if (hours > 12){
    hours=hours-12
    AmOrPm="pm"
}

hours = (hours<10)? "0"+hours:hours;
mins = (mins<10)? "0"+mins:mins;
secs = (secs<10)? "0"+secs:secs;

var wholetime=hours+":"+mins+":"+secs+" "+AmOrPm

document.getElementById("Siteclock").innerHTML="time of the day "+ wholetime
setTimeout(showTime, 1000)

}

showTime()

function showdate(){
    var date= new Date()
    var day= date.getDate()
    var Month= date.getMonth() +1
    var year= date.getFullYear()
    var weakday=date.getDay()


day = (day<10)? "0"+day:day;


var wholeday=day+"/"+Month+"/"+year

if(weakday == 1){
    weakday="monday"
}
else if(weakday == 2){
    weakday="tuesday"
}
else if(weakday == 3){
    weakday="wednusday"
}
else if(weakday == 4){
    weakday="thersday"
}
else if(weakday == 5){
    weakday="friday"
}
else if(weakday == 6){
    weakday="saterday"
}
else if(weakday == 7){
    weakday="sunday"
}

document.getElementById("sitedate").innerHTML="todays date "+ wholeday +"<br>"+"day of the weak is "+weakday;
setTimeout(showdate,86400000)

}

showdate()