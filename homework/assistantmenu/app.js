const gethour = document.getElementById('hour'),
        getminute = document.getElementById('minute');

const getdate = document.querySelector('.date');

const getphonecontainer = document.querySelector('.phone-container');
const getassistantmenu = document.querySelector('.assistantmenu');
const getmenu = document.querySelector('.menu');
// const getmenu = document.querySelector('.menu');
// console.log(getmenu);

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
getassistantmenu.addEventListener('click',function(){
    getassistantmenu.classList.add('show');
});


function dragmenu(e){
    // console.log(e.target);

    // to restrict move at menu-item affect assistantmenu move
    if(e.target.classList.contains('assistantmenu') || e.target.classList.contains('menucontainer') || e.target.classList.contains('menuicon')){
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
        // console.log(offsetx,offsety);

        // not to exceed the phone-container
        // if(offsetx < 0){
        //     offsetx = 0;
        // }else if(offsetx > 210){
        //     offsetx = 210;
        // }

        // if(offsety < 0){
        //     offsety = 0;
        // }else if(offsety > 450){
        //     offsety = 450;
        // }
        
        // better soluction of not to exceed the phone-container
        if(offsetx < 10){
            offsetx = 10;
        }
        else if(offsetx > 192){
            offsetx = 192;
        }
        if(offsety < 10){
            offsety = 10;
        }else if(offsety > 432){
            offsety = 432;
        }
        // offsetx and offsety count from inner not from border
        //how do i compute offsetx limit
        // 260 - 4 = 256 // count from inner to border outside
        // 256 - 50 - 4 = 202 // limit menu to inside phone-container
        // 202 - 10 = 192      // 10px inner the phone-container

        //how do i compute offsety limit
        // 500 - 4 = 496
        // 496 - 50 - 4 = 442
        // 442 - 10 = 432

        getassistantmenu.style.left = offsetx+difx+"px";
        getassistantmenu.style.top = offsety+dify+"px";

        curx = newx;
        cury = newy;
    }
}

// to hide menu when click the space
getphonecontainer.addEventListener('click',function(e){
    // console.log(e.target);
    if(e.target.classList.contains('phone-container')){
        getassistantmenu.classList.remove('show');
    }
});