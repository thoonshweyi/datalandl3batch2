//GET UI
const getvideoscreen = document.getElementById('videoscreen');

const playbtn = document.getElementById('play');
const prevtbn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');
const getcontainer = document.querySelector(".container")


//For Range
// const progress = document.getElementById('progress');

//For PROGRESS CONTAINER
const getprogressctn = document.getElementById("progress-container");
const progress = document.getElementById("progress");

const getdisplaytime = document.getElementById('displaytime');
const getfullscreen = document.getElementById('fullscreen');

const getopnfullscreen = document.querySelector('.openfullscreen');
const getclsfullscreen = document.querySelector('.closefullscreen');

const gettitle = document.getElementById("title");

const videos = ['samplevideo1','samplevideo2'];

let curridx = 0;

loadvideo(videos[curridx]);
function loadvideo(vdo){
    getvideoscreen.src = `./source/${vdo}.mp4`;
    gettitle.textContent = vdo;
    
}

function playvdo(){
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    //play() method came from video api
    getvideoscreen.play();
}
function pausevdo(){
    playbtn.querySelector("i.fas").classList.remove('fa-pause');
    playbtn.querySelector("i.fas").classList.add("fa-play");


    //pause() method came from video api
    getvideoscreen.pause();
}

function playpausevdo(){
    //paused keyword come from video api
    if(getvideoscreen.paused){
        // getvideoscreen.play();
        playvdo();
    }else{
        // getvideoscreen.pause();
        pausevdo();
    }
}

function nextvdo(){
    curridx++;

    if(curridx > videos.length - 1){
        curridx = 0;
    }

    console.log(curridx);

    loadvideo(videos[curridx]);
    playvdo();
}
function previousvdo(){
    curridx -= 1;

    if(curridx < 0){
        curridx = videos.length-1;
    }
    console.log(curridx);
    loadvideo(videos[curridx]);
    playvdo();
}

function stopvideo(){
    getvideoscreen.currentTime = 0;
    pausevdo(); 
}

function updateprogress(e){

    //Method 2
    // console.log(e.target);//video tag
    // console.log(e.srcElement);//video tag
    // console.log(this);//video tag

    // const currenttime = e.target.currentTime;
    // const duration = e.target.duration
    //  if(getvideoscreen.currentTime === 0){
    //     progress.value = 0;
    // }else{
    //     progress.value = (currenttime/duration) * 100;
    // }

    //Method 2

    // const {currentTime} = e.target;
    // const {duration} = e.target
    // console.log(currentTime,duration);

    // Method 3
    // const {currentTime,duration} = e.target;
    // console.log(currentTime,duration);

    // Method 4
    const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration];
    // console.log(currentTime,duration);
    
    //  if(getvideoscreen.currentTime === 0){
    //     progress.value = 0;
    // }else{
    //     progress.value = (currentTime/duration) * 100;
    // }


    //Method 1
    //currentTime came from video api
    // console.log(getvideoscreen.currentTime);

    // duration came from video api
    // console.log(getvideoscreen.duration);

    // console.log(getvideoscreen.currentTime/getvideoscreen.duration)

    // if(getvideoscreen.currentTime === 0){
    //     progress.value = 0;
    // }else{
    //     progress.value = (getvideoscreen.currentTime/getvideoscreen.duration) * 100;
    // }

    // For PROGRESS CONTAINER
    if(getvideoscreen.currentTime === 0){
        progress.style.width = '0%';
    }else{
        const progresspercent = (currentTime / duration)*100;
        progress.style.width = `${progresspercent}%`;
    }


    let getmins = Math.floor(getvideoscreen.currentTime / 60);
    // console.log(getmins);

    // if(getmins < 10){
    //     // getmins = '0'+getmins;
    //     getmins = '0'+String(getmins);
    // }

    let getsecs = Math.floor(getvideoscreen.currentTime%60);
    // console.log(getsecs);

    // if(getsecs < 10){
    //     // getmins = '0'+getsecs;
    //     getsecs = '0'+String(getsecs);
    // }

    // getdisplaytime.innerText = `${getmins}:${getsecs}`;

    //Method 2
    // Noted : padStart(target length,pad string) must be string data type
    const minutevalue = getmins.toString().padStart(2,"0");
    const secondvalue = getsecs.toString().padStart(2,"0");

    console.log(minutevalue,secondvalue);
    console.log(typeof minutevalue,typeof secondvalue);

    getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;

}

function setprogress(e){
    // console.log('hay');
    // console.log((progress.value*getvideoscreen.duration)/100);
    
    // FOR RANGE
    // getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;

    // FOR PROGRESS CONTAINER
    const getelewidth = this.clientWidth;
    console.log(getelewidth);

    const getclickx = e.offsetX;
    console.log(getclickx);

    const duration = getvideoscreen.duration;

    getvideoscreen.currentTime = (getclickx/getelewidth) * duration;setprogress
    console.log(getvideoscreen.currentTime);
    
}


// const getdoce = document.documentElement;
// console.log(getdoce);
// console.log(document);
function openfullscreen(){
    // if(getdoce.requestFullscreen){
    //     getdoce.requestFullscreen();
    // }
    if(getvideoscreen.requestFullscreen){
        getvideoscreen.requestFullscreen();            //standard w3c
    }if(getvideoscreen.mozRequestFullscreen){
        getvideoscreen.mozRequestFullscreen();      //firefox
    }else if(getvideoscreen.webkitRequestFullscreen){
        getvideoscreen.webkitRequestFullscreen();      //chrome / safari
    }else if(getvideoscreen.msRequestFullscreen){
        getvideoscreen.msRequestFullscreen();          //microsoft pro/id/edge
    }

    getopnfullscreen.style.display = "none";
    getclsfullscreen.style.display = "inline-block";
}
function closefullscreen(){

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.webkitExistFullscreen){
        document.webkitExitFullscreen();
    }else if(document.webkitExistFullscreen){
        document.webkitExitFullscreen();
    }else if(document.msExistFullscreen){
        document.msExitFullscreen();
    }
    getopnfullscreen.style.display = "inline-block";
    getclsfullscreen.style.display = "none";
}


playbtn.addEventListener("click",playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevtbn.addEventListener('click',previousvdo);
stopbtn.addEventListener('click',stopvideo);

getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener("ended",nextvdo);
getvideoscreen.addEventListener('click',playpausevdo);

// FOR RANGE
// progress.addEventListener('click',setprogress);

// FOR PROGRESS CONTAINER
    getprogressctn.addEventListener('click',setprogress);

getopnfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen);


// const name = "aung aung";
// const age = 25;

// const [name,age] = ["30","hla hla"];
// console.log("name is ",name);
// console.log("age is ",age);


// 27TT