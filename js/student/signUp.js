const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const terms = document.getElementById('terms');


fullName.addEventListener('input', e =>{
    checkFullName();
})

email.addEventListener('input', e=>{
    checkEmail();
})

password.addEventListener('input', e =>{
    checkPassword();
})

password2.addEventListener('input', e =>{
    checkPassword2();
})

const fullNameValue = fullName.value;
const emailValue = email.value;
const passwordValue = password.value;
const password2Value = document.getElementById('password2').value;
const termsValue = document.getElementById('terms').value;


let isSubmitting 

// const details = {
//     password: 'passwordValue',
//     email: 'emailValue',
//     full_Name: 'fullNameValue',
// }

form.addEventListener('submit', e =>{
    e.preventDefault();
    
    if(!isSubmitting){
        if(validateForm()){
            isSubmitting = true;
            localStorage.setItem('fullName', fullNameValue);
            localStorage.setItem('email', emailValue);
            localStorage.setItem('password', passwordValue);
            window.location.href = "../student/input-details.html";

            
        }else{
            isSubmitting = false;
        }
}

   
})


const setError = (element, message) =>{
    const inputControl = element.nextElementSibling;
    const internal = element;

    internal.classList.remove('success');

    inputControl.textContent = message;

}

const setSuccess = element =>{
    const inputControl = element.nextElementSibling;
    const internal = element;

    internal.classList.add('success');
    inputControl.textContent = "";
    


   
}


const checkFullName = () =>{
    const fullNameValue = fullName.value.trim();

    if(fullNameValue === ""){
        setError(fullName, "Enter your Full Name");
        return false;
    }else{
        setSuccess(fullName)
        return true;
    }
}

const checkEmail = () => {
    const emailValue = email.value.trim();

    if(emailValue === ""){
        setError(email, "Enter valid email");
        return false;

    }else if (!validateEmail(emailValue)) {
        setError(email, "Please enter a valid email address");
        return false;

    }
    else{
        setSuccess(email);
        return true;
    }
}

const checkPassword = () => {
    const passwordValue = password.value.trim();

    if (passwordValue === "" || passwordValue.length < 8){
        setError(password, "Enter your 8 digit password");
        return false;

    }else{
        setSuccess(password);
        return true;
    }

}

const checkPassword2 = () =>{
    const passwordValue = password.value.trim();

    const password2Value = password2.value.trim();

    if(passwordValue !== password2Value){
        setError(password2, "Passwords don't match");
        return false;

    }else{
        setSuccess(password2);
        return true;
    }

}


const validateForm = () => {
    const isFullNameValid = checkFullName();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isPassword2Valid = checkPassword2();

   

    

    return isFullNameValid && isEmailValid && isPasswordValid && isPassword2Valid;
}





function validateEmail(mail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(mail);
}






