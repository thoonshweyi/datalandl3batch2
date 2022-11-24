const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');
const btnicons = document.querySelectorAll('.btn-icon');

var boxwidth = getbox.clientWidth;
// console.log(boxwidth);
getbox.addEventListener('click',function(){
    getbtns.classList.toggle('show');

    btnicons.forEach(function(btnicon,idx){
        // console.log(getbox.offsetTop);
        btnicon.style.top = `${getbox.offsetTop+(idx+1)*40}px`;
    });
});

dragme(getbox);
function dragme(getele){
    // console.log(getele);

    var getcx,getcy,setcx,setcy;
    
    getele.onmousedown = getmousedown;
    function getmousedown(e){
        // console.log('i am working');
        // console.log(e.target);

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx,getcy);

        document.onmousemove = dragme;
        document.onmouseup = stopdragme;

        // console.log('step 1',getcx,getcy);

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

        btnicons.forEach(function(btnicon,idx){
                                //move to the btn center
            btnicon.style.left = `${btnleft+(boxwidth/2-16)}px`;
            btnicon.style.top = `${btntop}px`;
            // btnicon.style.top = `${top+40*(idx+1)}px`;
        });
    }
    function stopdragme(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}