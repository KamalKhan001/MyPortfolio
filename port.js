let userInput = document.getElementById("userNameInput");
let passInput = document.getElementById("userPasswordInput");
const submitBtn = document.getElementById("subbtn");


let userName = "KamalKhan";
let password = 23618;


function login(){
    if(userInput.value === userName && Number(passInput.value) === password){
        window.location.href = "home/home.html";
        console.log("True condition")
    }else{
        alert("Incorrect username or password"); 
        console.log("false condition")

    }

    
}

submitBtn.addEventListener("click", login);

