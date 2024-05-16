const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const terms = document.getElementById('terms');

let isSubmitting = false;

form.addEventListener('submit', e =>{
    e.preventDefault();
    
    if (!isSubmitting){
    validateInput();
    }
})



const setError = (element, message) =>{
    const inputControl = element.nextElementSibling;

    inputControl.textContent = message;
}

const setSuccess = element =>{
    const inputControl = element.nextElementSibling;


    inputControl.textContent = "";
    inputControl.classList.remove('.error');


   
}


const validateInput = () =>{


    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let isValid = true;


    if(fullNameValue === ""){
        setError (fullName, "Enter your Full Name");
        isValid = false;

    }else{
        setSuccess(fullName);
    }

    if(emailValue === ""){
        setError(email, "Enter valid email");
        isValid = false;
    }else if (!validateEmail(emailValue)) {
        setError(email, "Please enter a valid email address");
        isValid = false;
    }
    else{
        setSuccess(email);
    }

    if (passwordValue === "" || passwordValue.length < 8){
        setError(password, "Enter your 8 digit password");
        isValid = false;
    }else{
        setSuccess(password);
    }

    if(passwordValue !== password2Value){
        setError(password2, "Passwords don't match");
        isValid = false;
    }else{
        setSuccess(password2);
    }

    if(isValid){
        isSubmitting = true;
        window.location.href = "../student/input-details.html";
        
    } else{
        isSubmitting = false;
        
    }
}


function validateEmail(mail) {
             const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(mail);
        }
