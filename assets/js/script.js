//function that display value 
function display(num) 
{ 
    document.getElementById("result").value+=num; 
} 

//function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("result").value; 
    let y = eval(x);
    document.getElementById("result").value = y; 
} 

//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "";
} 