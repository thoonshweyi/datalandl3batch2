var getdots = document.getElementsByClassName('dot');
var getpages = document.getElementsByClassName('page');
// console.log(getpages);
var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');
const getrstcontainer = document.getElementById('result-container');

var objkeys = ['email','password','firstname','lastnane','dob','phone','address'];
var datas = [];

var curridx = 0;

showpage(curridx);
function showpage(num){
    // console.log(num);
    getpages[num].style.display = "block";

    num === 0 ? getprevbtn.style.display = 'none' : getprevbtn.style.display = "inline-block";

    num === (getpages.length-1) ? getnextbtn.textContent = "Submit" : getnextbtn.textContent = "Next";

    dotindicator(num);
}


function dotindicator(num){
    // console.log(num);
    for(var x = 0; x < getdots.length; x++){
        getdots[x].classList.remove('active');
    }

    getdots[num].className += " active";
}


function gonow(num){
    // console.log(num);

    // // console.log(curridx);
    // getpages[curridx].style.display = 'none';
    // curridx = curridx + num;
    // // console.log(curridx);

    // if(curridx >= getpages.length){
    //     getform.submit();
    // }
    // showpage(curridx);

    // formvalidation();
    // if(formvalidation()){
    //     getpages[curridx].style.display = 'none';
    //     curridx = curridx + num;

    //     if(curridx >= getpages.length){
    //         getform.submit();
    //     }
    //     showpage(curridx);
    // }

    // Method 1
    // if(num === 1 && formvalidation()){
    //     getpages[curridx].style.display = 'none';
    //     curridx = curridx + num;

    //     if(curridx >= getpages.length){
    //         getform.submit();
    //     }
    //     showpage(curridx);
    // }

    // Method 2
        // if(!formvalidation()){
        //     return false;
        // }
    
        // if(num === 1 && !formvalidation()){
        //     return false;
        // }

        // if(!formvalidation())  return false;

        if(num === 1 && !formvalidation())  return false;


        getpages[curridx].style.display = 'none';
        curridx = curridx + num;

        if(curridx >= getpages.length){
            // getform.submit();

            getform.style.display = 'none';
            getrstcontainer.style.display = 'block'; 


            result(datas);

            return true;       //prevent Uncaught Error
        }
        showpage(curridx);
    
}

function* genfun(){
    var index = 0;

    while(index < objkeys.length){
        yield index++;
    }
}
// console.log(genfun().next().value);
// console.log(genfun().next().value);
let gen = genfun();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


function formvalidation(){
    var valid = true;

    var getcurrinputs = getpages[curridx].getElementsByTagName('input');
    // console.log(getcurrinputs);
    // console.log(getcurrinputs[0].value);

    for(var x = 0; x < getcurrinputs.length ; x++){
        // console.log(getcurrinputs[x].value);

        if(getcurrinputs[x].value === ''){
            getcurrinputs[x].classList.add('invalid');
            valid = false;
        }else{
            // console.log(getcurrinputs[x].value);
            // datas.push(getcurrinputs[x].value);


            // console.log("X value is = ",x);
            // console.log(objkeys[x]);
            // var obj = {
            //     key : getcurrinputs[x].value 
            //     // objkeys[x] : getcurrinputs[x].value //##error 
            // }
            // datas.push(obj);

            // Method 1
            // const keys = objkeys[gen.next().value];
            // const values = getcurrinputs[x].value;
            // const obj = {
            //     [keys] : values
            // }
            // datas.push(obj);

            // Method 2
            // const keys = objkeys[gen.next().value];
            // const values = getcurrinputs[x].value;
            // var obj = {};
            // obj[keys] = values;
            // datas.push(obj);

            // Method 3
            const keys = objkeys[gen.next().value];
            const values = getcurrinputs[x].value;
            datas.push({[keys]: values});
        }
    }

    if(valid){
        getdots[curridx].className += ' done';
    }
    return valid;
}

function result(data){
    // console.log(data);

    getrstcontainer.innerHTML = `
        <ul>
            <li>Name : ${data[2].firstname}</li>
            <li>Email : ${data[0].email}</li>
            <li>Date Of Birth : ${data[4].dob}</li>
            <li>Phone Number : ${data[5].phone}</li>
            <li>Address : ${data[6].address}</li>
        </ul>
        <button type="submit" class="submit-btn" onclick="submitbtn()">Apply Now</button>
    `;
}

function submitbtn(){
    getform.submit();
}

//10RU