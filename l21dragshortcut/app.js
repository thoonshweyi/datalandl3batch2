const getbox = document.querySelector('.box');


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

        console.log('step 1',getcx,getcy);

    }

    function dragme(e){
        // console.log(e.target);
        // console.log(getcx,getcy);

        console.log('new position ',e.clientX,e.clientY);

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
    }
    function stopdragme(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}