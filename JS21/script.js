'use strict';
/*
function testFunct() {
    const x=5;
    const y=10;
    console.log(x+y);
};

function hello() {
    testFunct()
    console.log('hello');
};

function testFunct2() {
    function t3() {
        console.log('func t3');
    };
    t3();
    console.log('function testF2');
};

hello();
testFunct2();
//t3();/error

function unixTime() {
    let time=Math.floor(new Date().getTime());
    console.log(time);
};

unixTime();

function randomInt() {
    const min=100;
    const max=200;
    let rand=Math.floor(min+Math.random()*(max+1-min));
    console.log(rand);
};

randomInt();
//console.log(randomInt);

let c=9;
function count() {
    c++;
    console.log(c);
}

count();
count();
count();
count();

//document.querySelector('.out-1').addEventListener('mousemove', count);
document.querySelector('.out-1').addEventListener('mousemove', blockWidth);

let w=100;
function blockWidth() {
    w++;
    document.querySelector('.out-1').style.width=w+'px';
};
*/
///////////////////////////////////////////////////////////////

function sum() {
    const x=5;
    const y=6;
    console.log(x+y);
}

sum();

let x=55;
let y=66;

function sum2() {
    console.log(x+y);
}

sum2();

x=100;
y=300;

sum2();

function sum3(x1, y1) {
    console.log(x1+y1);
}

sum3(40, 111);
sum3(43, 44);

let z=10;

sum3(z,20);
sum3(z,z*5);
sum3(1,2,3,4,5);
sum3(5);

function sum4(x2=15, y2=22) {
    console.log(x2+y2);
}

sum4();
sum4(20);
sum4(10,89);

function showSum(elem, x, y) {
    document.querySelector(elem).textContent=x+y;
}

showSum('.out-12', 44, 22);

function showSum2(elem, x, y) {
    elem.textContent=x+y;
}

const out1=document.querySelector('.out-11');

showSum2(out1, 30, 66);

function showAll(...args) {
    console.log(args);
    let sum=args.reduce((accum, item) => accum+=item);
    console.log(sum);
}

showAll(2, 4, 55, 67, 34);

function showAll2(res) {
    document.querySelector('.out-11').innerHTML=`<b>${res}</b>`;
}

function showAll3(num, drawFunction) {
    drawFunction(num);
}

showAll3(78, showAll2);