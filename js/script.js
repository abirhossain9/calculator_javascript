// catching numbers
var oneBtn=document.getElementById('btn_1');
var twoBtn=document.getElementById('btn_2');
var threeBtn=document.getElementById('btn_3');
var fourBtn=document.getElementById('btn_4');
var fiveBtn=document.getElementById('btn_5');
var sixBtn=document.getElementById('btn_6');
var sevenBtn=document.getElementById('btn_7');
var eightBtn=document.getElementById('btn_8');
var nineBtn=document.getElementById('btn_9');
var zeroBtn=document.getElementById('btn_0');
// catching numbers
// catching btns
var decmBtn=document.getElementById('calc_decm');
var clearBtn=document.getElementById('clear');
var backBtn=document.getElementById('back');
var displayValElement=document.getElementById('display');
// catching btns
// catching operators
var btnsArray=document.getElementsByClassName('numb_btn');
var operatorArray=document.getElementsByClassName('operator');
// declaring some necessery variables
var displayVal='0'; //by default its 0
var pendingVal;  //keeping the track of previous entered value
var evalStringArray=[]; //suppose u put 5+5 then the array will get 3 values 5,+ and 5
// for displaying element
updateDisplayVal=(clickObj)=>
{
var btnText=clickObj.target.innerText;
if (displayVal==='0')
displayVal='';
displayVal=displayVal+btnText;
displayValElement.innerText=displayVal;

}


// ferforming operations
var performOperation=(clickObj)=>
{
var operators=clickObj.target.innerText;
switch(operators)
{
case '+':
pendingVal=displayVal;
displayVal='0';
displayValElement.innerText=displayVal;
evalStringArray.push(pendingVal);
evalStringArray.push('+');
break;
case'-':
pendingVal=displayVal;
displayVal='0';
displayValElement.innerText=displayVal;
evalStringArray.push(pendingVal);
evalStringArray.push('-');
break;
case'x':
pendingVal=displayVal;
displayVal='0';
displayValElement.innerText=displayVal;
evalStringArray.push(pendingVal);
evalStringArray.push('*');
break;
case'÷':
pendingVal=displayVal;
displayVal='0';
displayValElement.innerText=displayVal;
evalStringArray.push(pendingVal);
evalStringArray.push('/');
break;
case '=':
evalStringArray.push(displayVal);
var evaluation=eval(evalStringArray.join(' '));
displayVal=evaluation+'';
displayValElement.innerText=displayVal;
evalStringArray=[];
break;
default:
break;
}
}



// creating even listener
for(let i=0; i < btnsArray.length; i++ ){
btnsArray[i].addEventListener('click',updateDisplayVal,false);
}
for(let i=0; i < operatorArray.length; i++ ){
operatorArray[i].addEventListener('click',performOperation,false);
}
clearBtn.onclick=()=>
{
displayVal='0';
pendingVal=undefined;
evalStringArray=[];
displayValElement.innerHTML=displayVal;
}
backBtn.onclick=()=>
{
let lengthOfDisplayVal=displayVal.length;
displayVal=displayVal.slice(0,lengthOfDisplayVal-1);
if(displayVal==='')
displayVal='0';
displayValElement.innerHTML=displayVal;
}
decmBtn.onclick=()=>
{
if(!displayVal.includes('.'))
displayVal+='.';
displayValElement.innerHTML=displayVal;

}