const gettimelineitems = document.querySelectorAll('.timeline-item');

gettimelineitems.forEach(function(timelineitem){
    timelineitem.addEventListener('mouseenter',function(){
        // console.log('The mouse is enter');
        timelineitem.classList.toggle("left");
        timelineitem.classList.toggle("right");
    });
});