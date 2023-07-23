// UI 
const visibleIcon = document.querySelectorAll(".visibility");

const formControls = document.querySelectorAll(".form-control");
const createbtn = document.getElementById("createAccount");
const toLogin = document.getElementById("toLogin");

toLogin.lastChild.style.textDecoration = "none";


const btn = document.querySelector(".form-container .btn-group .btn");

// console.log(formControls);
// console.log(createbtn);
// console.log(toLogin.children[0]);
// console.log(toLogin.firstChild); // text content 
// console.log(toLogin.lastChild); // a tag 
// console.log(btn);

// PASSWORD SET VISIBLE 

visibleIcon.forEach(each => {

    each.addEventListener("click", (event) => {
        
        // console.log(event.target);
        // console.log(event.target.className);

        event.preventDefault();

        switch(event.target.className) {

            case "visibility":
                event.target.className = "invisibility";
                event.target.src = "./accessories/icon/invisibility.png";
                event.target.previousElementSibling.type = "text";    
            break;

            default: 
                event.target.className = "visibility";
                event.target.src = "./accessories/icon/visibility.png";
                event.target.previousElementSibling.type = "password";
        }

    });  
});

// toLogin.lastChild.addEventListener("click",);

// CHANGING FORM 

const changeForm = function (){

    if( createbtn.value === "Create Account" ) {

        document.body.children[0].children[1].children[0].textContent = "Login";

        formControls.forEach(each => {

            if(each.id === "fullName" || each.id === "confirm") {
    
                console.log(each.parentElement.style.display = "none");
            }

            each.value = "";
        });

        createbtn.id = "login";
        createbtn.classList.replace("create-btn", "login-btn");
        createbtn.value = "Login";

        toLogin.firstChild.textContent = "You Don't have an account?";

        toLogin.lastChild.textContent = "Create Account!";
    
    }else{

        document.body.children[0].children[1].children[0].textContent = "Create Account";

        formControls.forEach(each => {

            if(each.id === "fullName" || each.id === "confirm") {
    
                console.log(each.parentElement.style.display = "block");
            }

            each.value="";
        });

        createbtn.id = "createAccount";
        createbtn.classList.replace("login-btn", "create-btn");
        createbtn.value = "Create Account";

        toLogin.firstChild.textContent = "Already Have an account?";

        toLogin.lastChild.textContent = "Login!";
    }       
}

// BTN CLICK 

btn.addEventListener("click", event => {

    if( btn.value = "Create Account") {

        event.preventDefault();
    }

    document.body.children[0].children[1].children[0].textContent = "Login";

    formControls.forEach(each => {

        if(each.id === "fullName" || each.id === "confirm") {

            console.log(each.parentElement.style.display = "none");
        }

        each.value = "";
    });

    createbtn.id = "login";
    createbtn.classList.replace("create-btn", "login-btn");
    createbtn.value = "Login";

    toLogin.lastChild.textContent = "Create Account!";

});