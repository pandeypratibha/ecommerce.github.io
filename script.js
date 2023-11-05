
let Cloths = document.getElementById("Cloths");
let Review = document.getElementById("Review");
let Contactus = document.getElementById("Contactus");
let Blogs = document.getElementById("Blogs");

Cloths.addEventListener("click",function(){
    Cloths.style.color="red";
    Review.style.color="black";
    Contactus.style.color="black";
    Blogs.style.color="black";
});
Contactus.addEventListener("click",function(){
    Cloths.style.color="black";
    Review.style.color="black";
    Contactus.style.color="red";
    Blogs.style.color="black";
});
Review.addEventListener("click",function(){
    Cloths.style.color="black";
    Review.style.color="red";
    Contactus.style.color="black";
    Blogs.style.color="black";
});
Blogs.addEventListener("click",function(){
    Cloths.style.color="black";
    Review.style.color="black";
    Contactus.style.color="black";
    Blogs.style.color="red";
});


let login = document.getElementById("login");
login.addEventListener("click",function(){
    let loginpage = document.querySelector(".loginpage").style.display ="block";
});



let loged = document.getElementById("loged");
loged.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value ==""|| pass.value ==""){
        alert("Please Enter Your Email Passward")
    }
    else{
        alert("You Have Successfully Loged In");
        document.querySelector(".loginpage").style.display ="none";
    }

});



let submit=document.getElementById("submit");
submit.addEventListener("click", function(){
    let name = document.getElementById("name");
    let pwd = document.getElementById("pwd");

    if(name.value ==""|| pwd.value ==""){
        alert("Please Enter Your Email Passward")
    }
    else{
        alert(name.value + " Thanks for connecting!");
        document.querySelector(".loginpage").style.display ="none";
    }
});