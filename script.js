function compute()
{
var principal=document.getElementById('principal').value;

var rate=document.getElementById('rate').value;

var years=document.getElementById('years').value;

var interest=principal * years * rate /100;

var year=new Date().getFullYear()+parseInt(years);

if(principal== ""){
    alert('Please enter a positive number');
    principal.focus();}

document.getElementById("result").innerHTML="If you deposit "+principal+"\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of $ "+interest+",\<br\>in the year "+year+"\<br\>";

}
var rateval = document.getElementById("rate");

rate_val.innerHTML=rateval.value;

rateval.oninput= function updateRate() 
{ 
    rate_val.innerHTML=this.value;
    
}
 
principal.onchange=function checkdata(){

if(principal.value<= 0){
    alert('Please enter a positive number');
    principal.focus();
}
}
