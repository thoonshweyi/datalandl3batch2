var gettxtarea = document.getElementById("textarea");
var getdivarea = document.getElementById("divarea");
getdivarea.contentEditable = true;
getdivarea.spellcheck = false;

var getbtns = document.querySelectorAll('.btn');
// console.log(getbtns);

getbtns.forEach(function(getbtn){
    getbtn.addEventListener('click',function(){
        // var getcommand = getbtn.getAttribute('data-command');
        var getcommand = getbtn.dataset['command'];
        // console.log(getcommand);

        if(getcommand === 'cleartext'){
            getdivarea.innerHTML = '';
        }else if(getcommand === "createLink" || getcommand === 'insertImage'){
            //                  message                     default
            let geturl = prompt('Enter your website link','https://');
            document.execCommand(getcommand,false,geturl);
        }else if(getcommand === 'foreColor'){
            console.log(getbtn.value);
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === 'backColor'){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === 'fontName'){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === 'paste'){
            navigator.clipboard.readText().then(function(cliptext){
                getdivarea.innerHTML += cliptext;
            });
        }
        else{
            document.execCommand(getcommand,false,null);
        }
    });
});
// catjpg link
// https://img.freepik.com/premium-vector/cat-head-emoticon-funny-decorative-drawn-cat-face-character-avatar-vector-illustration-domestic-pet_87946-2415.jpg?w=360


// function boldfun(){
//     gettxtarea.style.fontWeight = "bold";
// }

// function italicfun(){
//     gettxtarea.style.fontStyle = "italic";
// }

// function underline(){
//     gettxtarea.style.textDecoration = "underline";
// }

// function lalgfun(){
//     gettxtarea.style.textAlign = "left";
// }

// function calgfun(){
//     gettxtarea.style.textAlign = "center";
// }

// function ralgfun(){
//     gettxtarea.style.textAlign = "right";
// }

// function upcasefun(){
//     gettxtarea.style.textTransform = "uppercase";
// }
// function lwcasefun(){
//     gettxtarea.style.textTransform = "lowercase";
// }

// function capcasefun(){
//     gettxtarea.style.textTransform = "capitalize";
// }

function clearfun(){
    gettxtarea.style.fontWeight = "normal";
    gettxtarea.style.fontStyle = "normal";
    gettxtarea.style.textDecoration = "none";
    gettxtarea.style.textAlign = "left";

    gettxtarea.value = "";
}

// execCommand(aCommandName,aShowDefaultUI,aValueArgument);

// aShowDefaultUI  = true,false

// 26TE