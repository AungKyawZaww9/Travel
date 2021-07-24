const imgall = document.querySelectorAll('.right img');
// console.log(imgall);

const right = document.querySelector('.right');
// console.log(right);

const upbtn = document.getElementById('top');
// console.log(upbtn);

const downbtn = document.getElementById('button');
// console.log(downbtn);

const zero = document.getElementById('zero');
// console.log(zero);


let idx = 0;

function increase(){
    zero.innerHTML = idx;
}

upbtn.addEventListener('click',()=>{
    idx++;
    changeimg();
    restartinterval();


});

downbtn.addEventListener('click',()=>{
    idx--;
    changeimg();
    restartinterval();


});

let ne = imgall.length-1;
// console.log(ne);

function changeimg(){

    if(idx > imgall.length-1){
       idx = 0;
    }
    else if(idx < 0){
        idx = imgall.length-1;
    }
    // console.log(idx);
    increase();
    right.style.transform = `translateY(${-idx * 100}%)`;
}

changeimg();

let interval = setInterval(run,1000);


function run(){
    idx++;
    changeimg();

}



function restartinterval(){
    clearInterval(interval);
    interval = setInterval(run,1000);
}


//for autocount effect

const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach(function(counter){
   // console.log(counter);
    counter.innerHTML = 0;

    function autocount(){
        const getatt = +counter.getAttribute('data-target');
        // console.log(typeof(getatt));

        const getcounter = +counter.innerHTML;
        // console.log(typeof(getcounter));


        const increament = getatt / 100;

        if(getcounter < getatt){
            counter.innerHTML = Math.ceil(getcounter+increament);

            setTimeout(autocount,1000);
        }
    }

    autocount();
});