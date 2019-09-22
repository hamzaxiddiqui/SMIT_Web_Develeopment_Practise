var a;
var l;
var li;
var btn;
var btnText;

function add()
{
     a=document.getElementById("val");
     l=document.getElementById("list");
     li=document.createElement("LI");
     btn=document.createElement("Button");
     btnText=document.createTextNode("Delete");
    btn.appendChild(btnText);
    btn.onclick=function () {
        var li=this.parentNode;
        var ul=li.parentNode;
        ul.removeChild(li);
    }
    var text=document.createTextNode(val.value);
    if(val.value==="")
    {
        alert("Enter some thing in list");
    }
    else{
    li.appendChild(text);
    li.appendChild(btn);

    list.appendChild(li);
    val.value="";
}
}
function del()
{
var b=document.getElementById("list");
alert("Are you sure?");
b.innerHTML="";

}