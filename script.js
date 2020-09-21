var wrapperEle = document.body.querySelector(".wrapper");

var prompter = prompt("enter a number")
var number = 5;

while(number<=10||repeat=="enter a number"){
  repeat=prompt("enter a number");
  number++;
}

wrapperEle.innerHTML="Program is over";