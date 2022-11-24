const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');
const getboxtitle = document.getElementById('boxtitle');

getbox.addEventListener('click',function(e){
    // getbtns.classList.toggle('show');
    getbtns.classList.add('show');
    // console.log(e.target);
    smallmenu(e.target);
});
getbox.addEventListener('dblclick',function(){
    getbtns.classList.remove('show');
});
dragme(getbox);
function dragme(getele){
    // console.log(getele);

    var getcx,getcy,setcx,setcy;
    
    //design 1
    // getele.onmousedown = getmousedown;
    
    //design 2
    // to prevent icon drag move box
    // if(getboxtitle){
    if(getele){
        getboxtitle.onmousedown = getmousedown;
    }

    function getmousedown(e){
        // console.log('i am working');
        // console.log(e.target);

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx,getcy);

        document.onmousemove = dragme;
        document.onmouseup = stopdragme;

        // console.log('step 1',getcx,getcy);

        // to store icon
        getbtns.classList.remove('show');

    }

    function dragme(e){
        // console.log(e.target);
        // console.log(getcx,getcy);

        // console.log('new position ',e.clientX,e.clientY);

        setcx = getcx - e.clientX;
        setcy = getcy - e.clientY;

        //reset for new pin position 
        getcx = e.clientX;
        getcy = e.clientY;

        // console.log('step 2',getcx,getcy);

        // console.log(getcx,setcx);
        // console.log(getcy,setcy);

        const btnleft = getele.offsetLeft;
        const btntop = getele.offsetTop;
        // console.log(btnleft,btntop);

        getele.style.left = (btnleft-setcx)+"px";
        getele.style.top = (btntop-setcy)+"px";

        // console.log(btnleft-setcx,btntop-setcy);

        // to store icon
        // getbtns.classList.remove('show');
    }
    function stopdragme(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

function smallmenu(iconbox){
    // console.log(iconbox);
    if(iconbox.classList.contains('btn-icon')){
        console.log('yes');
    }else{
        console.log('no');
    }
}

// 21MM