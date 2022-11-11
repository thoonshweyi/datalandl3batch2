const gethour = document.getElementById('hour'),
        getminute = document.getElementById('minute');

const getdate = document.querySelector('.date');

const getphone = document.querySelector('.phone');
const getassistantmenu = document.querySelector('.assistantmenu');


const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

displaytime();
function displaytime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var tday = date.getDay();
    var tdate = date.getDate();
    var tmonth = date.getMonth();
    var tyear = date.getUTCFullYear();
    // console.log(days[tday],months[tmonth],tdate,tyear);

    if(hour > 12){
        hour = hour % 12;
    }

    if(hour < 10){
        hour = "0"+hour;
    }
    if(minute < 10){
        minute = "0"+minute;
    }

    // console.log(hour,minute);
    // console.log(gethour,getminute);

    gethour.textContent = hour;
    getminute.textContent = minute;

    getdate.textContent = `${days[tday]}, ${months[tmonth]} ${tdate} ${tyear}`;
}
setInterval(displaytime,1000);

// console.log(getassistantmenu);

var curx,cury,newx,newy;
getassistantmenu.addEventListener('mousedown',function(e){
    curx = e.clientX;
    cury = e.clientY;
    // console.log("current position : ",e.clientX,e.clientY);
    getassistantmenu.onmousemove = dragmenu;
});
// getassistantmenu
document.addEventListener('mouseup',function(e){
    
    getassistantmenu.onmousemove = null;
});



function dragmenu(e){
    // console.log("new pisition : ",e.clientX,e.clientY);

    newx = e.clientX;
    newy = e.clientY;

    //move right = plus value, move left = minus value
    //move bottom = plus value, move top = minus value
    var difx = newx - curx;
    var dify = newy - cury;

    // console.log(difx,dify);

    var offsetx = getassistantmenu.offsetLeft;
    var offsety = getassistantmenu.offsetTop;
    console.log(offsetx,offsety);

    if(offsetx < 0){
        offsetx = 0;
    }else if(offsetx > 210){
        offsetx = 210;
    }

    if(offsety < 0){
        offsety = 0;
    }else if(offsety > 450){
        offsety = 450;
    }
    
    getassistantmenu.style.left = offsetx+difx+"px";
    getassistantmenu.style.top = offsety+dify+"px";

    curx = newx;
    cury = newy;
}