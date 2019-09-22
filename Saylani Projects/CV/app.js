var uName = document.getElementById("tb1");
var mNum = document.getElementById("tb2");
var email = document.getElementById("tb3");
var pass = document.getElementById("tb4");
function signup() {
localStorage.setItem("Name",uName.value);
localStorage.setItem("Mobile" ,mNum.value);
localStorage.setItem("Email", email.value);
localStorage.setItem("Password",pass.value);
window.location.href= "login.html";
}

function login(){
var loginName =document.getElementById("ltb1").value;
var loginPass =document.getElementById("ltb2").value; 
var sname =localStorage.getItem('Name');
var spass =localStorage.getItem('Password');
if(loginName === sname  && loginPass === spass )
{
    
    window.location.href = "cv.html";
}
else{
    alert("Incorrect Email or Id");
}
}
//object cv
var info={
    name:"Hamza Siddiqui",
    cont:"0305-xxxxxx-x",
    mail:"hamzaxiddiqui@gmail.com"
};
//about 
var infoName=document.getElementById('name');
infoName.innerHTML = info.name;
 var email =document.getElementById("email");
 email.innerHTML=info.mail;
 var contact =document.getElementById("cont");
 contact.innerHTML=info.cont;
 //personel info
var persInfo={
    head:"Personel Information",
    fName:"Father's Name: ",
    dob:"Date of Birth",
    nationality:"Nationality",
    religion:"Religion"
} 

var pi={
    fName:"M.Aslam Siddiqui",
    dob:"07-07-1997",
    nationality:"Pakistani",
    religion:"Islam"
}
// var piName=document.getElementById("persInfo");
// piName.innerHTML=persInfo.head;
// var persInfo1=document.getElementById("perInfoDet1");
// persInfo1.innerHTML=persInfo.fName;
// var perInfo2=document.getElementById("perInfoDet2");
// perInfo2.innerHTML=persInfo.dob;
// var perInfo3=document.getElementById("perInfoDet3");
// perInfo3.innerHTML=persInfo.nationality;
// var perInfo4=document.getElementById("perInfoDet4");
// perInfo4.innerHTML=persInfo.religion;
// var pi1=document.getElementById("pi1");
// pi1.innerHTML =pi.fName;
// var pi2=document.getElementById("pi2");
// pi2.appendChild=pi.dob;
// var pi3=document.getElementById("pi3");
// pi3.innerHTML=pi.nationality;
// var pi4=document.getElementById("pi4");
// pi4.innerHTML=pi.religion;


