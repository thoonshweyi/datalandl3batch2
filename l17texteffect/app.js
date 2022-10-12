const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ['red','skyblue','violet','yellow'];
const gettxtani = document.querySelector('.txtani');
// console.log(gettxtani);

// console.log(languages);
// console.log(languages[0]);

// console.log(languages.indexOf("Reactjs"));
// console.log(languages.indexOf("Laravel"));

// console.log(colors[languages.indexOf('Reactjs')]);
// console.log(colors[languages.indexOf('Vuejs')]);



function* generator(){
    var idx = 0;

    while(true){
        yield idx++;
        if(idx > 3){
            idx = 0;
        }
    }
}

// const testnumber = generator();
// console.log(testnumber.next());          //{value: 0, done: false}

// console.log(testnumber.next().value);    //0
// console.log(testnumber.next().value);    //1
// console.log(testnumber.next().value);    //2
// console.log(testnumber.next().value);    //3

// console.log(testnumber.next().value);    //0
// console.log(testnumber.next().value);    //1
// console.log(testnumber.next().value);    //2
// console.log(testnumber.next().value);    //3

// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);


function showwords(word){

    let x = 0;
    
    // console.log(word);

    gettxtani.innerHTML = '';
    gettxtani.classList.add(colors[languages.indexOf(word)]);

    // gettxtani.innerHTML = word[0];
    // gettxtani.innerHTML += word[0];
    // gettxtani.innerHTML += word[1];


    let showinterval  = setInterval(function(){
        
        if(x >= word.length){
            clearInterval(showinterval);
            deletewords();
        }else{
            gettxtani.innerHTML += word[x];
            x++;
        }

    },500);
    
}
function deletewords(){
    let getword = gettxtani.innerHTML;
    // console.log(getword);

    let getlastidx = getword.length - 1;

    let delintval = setInterval(function(){
        if(getlastidx >= 0){
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length - 1);
            getlastidx--;
        }else{
            gettxtani.classList.remove(colors[languages.indexOf(getword)]);
            showwords(languages[gen.next().value]);
            clearInterval(delintval);
        }
    },500);
}
let gen = generator();
showwords(languages[gen.next().value]);

let gettxtlights = document.querySelectorAll('.text-light');
// console.log(gettxtlights);

gettxtlights.forEach(function(gettxtlight){
    // console.log(gettxtlight);


    let arrtexts = gettxtlight.textContent.split('');
    // console.log(arrtexts);

    gettxtlight.textContent = '';

    arrtexts.forEach(function(arrtext,idx){
        let newem = document.createElement('em');
        newem.textContent = arrtext;
        newem.style.animationDelay = `${idx * .05}s`;

        gettxtlight.append(newem);
    });
});



// 28TE








// Generator Function
// function* genfun(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const getgen = genfun();
// console.log(getgen);

// {value: 1, done: false}
// console.log(getgen.next());

// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);


// console.log(getgen.next());
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);

