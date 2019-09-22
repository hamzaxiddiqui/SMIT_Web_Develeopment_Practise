// var config = {
//     apiKey: "AIzaSyAZ4e-UoL8gHa_YXl6ZZdvBlABhDq5e4oI",
//     authDomain: "jstodoapp1.firebaseapp.com",
//     databaseURL: "https://jstodoapp1.firebaseio.com",
//     projectId: "jstodoapp1",
//     storageBucket: "jstodoapp1.appspot.com",
//     messagingSenderId: "132640325290"
//   };
//   firebase.initializeApp(config);

var uName = document.getElementById("tb1");
var mNum = document.getElementById("tb2");
var email = document.getElementById("tb3");
var pass = document.getElementById("tb4");
function signup() {
    localStorage.setItem("Name",uName.value);
    localStorage.setItem("Mobile" ,mNum.value);
    localStorage.setItem("Email",email.value);
    localStorage.setItem("Password",pass.value);
    
    }
    
    function login(){
    var loginName =document.getElementById("ltb1").value;
    var loginPass =document.getElementById("ltb2").value; 
    var sname =localStorage.getItem('Name');
    var spass =localStorage.getItem('Password');
    if(loginName === sname  && loginPass === spass )
    {
        
         location.href = "todo.html";
    }
    else{
        alert("Incorrect Email or Id");
    }
    }

// function signup(){
//     var userData={
    
//     }
//     userData.uName();
//     userData.mNum();
//     userData.email();
//     firebase.database().ref("/").child("UData").push(userData);

// }

