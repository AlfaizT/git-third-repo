"use strict"
let nikesh=new Date();
let date=nikesh.getDate();


let m=nikesh.getMonth();
let year=nikesh.getFullYear();
console.log(date,'\n',m,year);
// let d=new Date();
// let h=d.getHours();
// let m=d.getMinite();
// let s=d.getSecond();
// console.log(h,m,s);
switch(true){
    case(m==0):
    console.log('jan');
    break;
    case(m==1):
    console.log('feb');
    break;
    case(m==2):
    console.log('mar');
    break;
    case(m==3):
    console.log('apr');
    break;
    case(m==4):
    console.log('may');
    break;
    case(m==5):
    console.log('jun');
    break;
    case(m==6):
    console.log('jul');
    break;
    case(m==7):
    console.log('aug');
    break;
    case(m==8):
    console.log('sup');
    break;
    case(m==9):
    console.log('oct');
    break;
    case(m==10):
    console.log('nov');
    break;
    case(m==11):
    console.log('dec');
}