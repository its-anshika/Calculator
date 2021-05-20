
//function for displaying values
function dis(val)
{const hitsound=new Audio('sounds/swish.m4a');
hitsound.play();
document.getElementById("box").value+=val;
 }
//function for evaluation
function solve()
{
let x = document.getElementById("box").value;
let y = eval(x);
document.getElementById("box").value = y;
const hitsound=new Audio('sounds/cash.mp3');
hitsound.play();
}
//function for clearing the display
function clr()
{
document.getElementById("box").value = "";
}