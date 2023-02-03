// date object

var date= new Date();
console.log(date);

const pastDate= new Date('12-15-2022' )
document.write(pastDate+"<br>");

let a = date.getDay();
// document.write(a);

let ar1=['Sunday','Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',
];
document.write(ar1[a]+"<br>");
// let newstr = str.split(" ");
// document.write(newstr[0],"<br>");
let h= date.getHours();
document.write(h+"<br>");
let m=date.getMinutes();
let s=date.getSeconds();
if(h>12)
{
    h=h-12;
    document.write("current time is "+h +" " +"PM : "+m+" : "+s+"<br>")
}
else{
    document.write("current time is "+h +"AM : "+m+" : "+s+"<br>")
}
//square root of given number
let b;
function square(b)
{
    return Math.sqrt(b);
}
document.write(square(9)+"<br>");
document.write("sqaure root of 4 is "+square(4)+"<br>");

let firstNum;
let secondNum;
function maximum(firstNum,secondNum)
{
    return Math.max(firstNum,secondNum)
}
document.write("Maximum is "+maximum(4,5)+"<br>");
// Random Number Generator
let z=10;
document.write("Random number is "+Math.random()*z+"<br>");
 
//  given number is greater or not
let number=700;
if(number>100 && number<500)
{
    document.write("number is between 100 and 500"+"<br>");
}
else{
    document.write("Number is not between 100 and 500"+"<br>");
}
// given numbers are equal or not 
function equal(x,y)
{
    if(x===y)
    {
        document.write("true");
    }
    else
    {
        document.write("false");
    }

}
// return true
equal(1,1);
equal(1,"1");





 












