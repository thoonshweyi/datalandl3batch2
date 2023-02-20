//UI

const getvideoscreen = document.getElementById('videoscreen');
const getvideotitle = document.querySelector('.video-title');
const getprevbtn = document.getElementById('prev'),
    getplaybtn = document.getElementById('play'),
    getnextbtn = document.getElementById('next');
const getprogresscontainer = document.querySelector('.progress-container'),
        getprogress = document.querySelector('.progress');

const getvolumecontrol = document.getElementById('volumecontrol');
const getfullscreenbtn = document.getElementById('fullscreen');

const videos = ['samplevideo1','samplevideo2'];

const getvdcurtime = document.getElementById('vdcurtime');
        getvdduration = document.getElementById('vdduration');
let curidx = 0;

loadvdo(curidx);
function loadvdo(curidx){
    getvideoscreen.src = `./video/${videos[curidx]}.mp4`;
    getvideotitle.textContent = `${videos[curidx]}`;
}

function playvdo(){
    getplaybtn.querySelector('i').classList.remove('fa-play');
    getplaybtn.querySelector('i').classList.add('fa-pause');
    getvideoscreen.play();
}
function pausevdo(){
    getplaybtn.querySelector('i').classList.remove('fa-pause');
    getplaybtn.querySelector('i').classList.add('fa-play');
    getvideoscreen.pause();
}
function playpausevdo(){
    if(getvideoscreen.paused){
        playvdo();
    }else{
        pausevdo();
    }
}

function nextvdo(){
    curidx++;
    if(curidx > videos.length-1){
        curidx=0;
    }
    // console.log(curidx);
    loadvdo(curidx);
    playvdo();
}

function prevdo(){
    curidx--;
    if(curidx < 0){
        curidx = videos.length-1;
    }
    loadvdo(curidx);
    playvdo();
}

function adjustvolume(){
    var volume = Number(getvolumecontrol.value)/100;
    // console.log(volume,typeof volume);
    getvideoscreen.volume = volume;
}

function updateprogress(){
    // console.log(getvideoscreen.currentTime,getvideoscreen.duration);
    var {currentTime} = this ;
    var{duration} = this;
    // console.log(currentTime,duration)

    var currpercent = (currentTime/duration)*100;

    getprogress.style.width = `${currpercent}%`;

    // console.log(currpercent);

    var getmins = Math.floor(currentTime/60);
    var getsecs = Math.floor(currentTime%60);

    var durationmins = Math.floor(duration/60);
    var durationsecs = Math.floor(duration%60);

    var leadzeromins = getmins.toString().padStart(2,'0');
    var leadzerosecs = getsecs.toString().padStart(2,'0');

    if(durationmins < 10){
        durationmins = "0"+durationmins;
    }
    if(durationsecs < 10){
        durationsecs = "0"+durationsecs;
    }

    getvdcurtime.textContent = `${leadzeromins}:${leadzerosecs}`;
    if(currentTime === 0){ //to solve NaN error
        getvdduration.textContent = `00:00`;
    }else{
        getvdduration.textContent = `${durationmins}:${durationsecs}`;
    }
    
}

function setprogress(e){
    var clickx = e.offsetX;
    var elewidth = this.clientWidth;
    var duration = getvideoscreen.duration;
    // console.log(clickx);
    // console.log(elewidth);

    // console.log((clickx/elewidth)*duration);

    getvideoscreen.currentTime = (clickx/elewidth)*duration;
}

function fullscreen(){
    if(getvideoscreen.requestFullscreen){
        getvideoscreen.requestFullscreen();
    }else if(getvideoscreen.webkitRequestFullscreen){
        getvideoscreen.webkitRequestFullscreen();
    }else if(getvideoscreen.msRequestFullscreen){
        getvideoscreen.msRequestFullscreen();
    }else if(getvideoscreen.mozRequestFullscreen){
        getvideoscreen.mozRequestFullscreen();
    }
}

getvideoscreen.addEventListener('click',playpausevdo);
getvideoscreen.addEventListener('timeupdate',updateprogress);

getplaybtn.addEventListener('click',playpausevdo);
getnextbtn.addEventListener('click',nextvdo);
getprevbtn.addEventListener('click',prevdo);

getvolumecontrol.addEventListener('change',adjustvolume);

getprogresscontainer.addEventListener('click',setprogress);

getfullscreenbtn.addEventListener('click',fullscreen);