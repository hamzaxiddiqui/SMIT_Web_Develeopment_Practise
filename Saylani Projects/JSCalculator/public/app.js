function seven ()
{
    var a=7;
    document.getElementById("disp").value+=a;
    console.log(a);
}
function eight()
{
    var a=8;
    document.getElementById("disp").value+=a;
    console.log(a);
}
function nine()
{
    var a=9;
    document.getElementById("disp").value+=a;
    console.log(a);
}

function four()
{
    var a=4;
    document.getElementById("disp").value+=a;
    console.log(a);
}
function five()
{ 
    var a=5;
    document.getElementById("disp").value+=a;
    console.log(a);
}
function six()
{
    var a=6;
    document.getElementById("disp").value+=a;
    console.log(a);
}

function one()
{
    var a=1;
    document.getElementById("disp").value+=a;
    console.log(a);
}
function two()
{
    var a=2;
    document.getElementById("disp").value+=a;
    console.log(a);
}
function three()
{
    var a=3;
    document.getElementById("disp").value+=a;
    console.log(a);
}
function zero()
{
    var a=0;
    document.getElementById("disp").value+=a;
    console.log(a);
}
function cclear()
{
   Current="";
   Operation="0";
   Memory="0";
   
    document.getElementById("disp").value=Current;
    
}
function multi()
{
    
    document.getElementById("disp").value+="*";
    
}
function equ()
{
   document.getElementById("disp").value=eval(document.getElementById("disp").value);
}
function add()
{
    document.getElementById("disp").value+="+";
}
function subt()
{
    document.getElementById("disp").value+="-";

}

function div()
{
    document.getElementById("disp").value+="/";
}
function per()
{
    document.getElementById("disp").value+="%";
}
function dot()
{
    document.getElementById("disp").value+=".";
}