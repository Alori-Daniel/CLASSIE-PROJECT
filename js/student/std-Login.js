const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const toggle = document.getElementById('toggle');



password.addEventListener('input', e => {
    checkPassword();

})


email.addEventListener('input', e=>{
    checkEmail();
})



form.addEventListener('submit', e =>{
    e.preventDefault();

    emailValue = email.value;
    passwordValue = password.value;

    const details ={
        email: emailValue,
        password: passwordValue
    }

    fetch("http://127.0.0.1:8000/auth/login/",
        {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(details)
        }
    )
    .then(response => {
        // console.log("The response", response);
            return response.json();
        
    }).then(data => {

        // console.log("Response data: ", data);
        if(data.status === "200"){
            console.log(data)
            localStorage.setItem('data_got', JSON.stringify(data))
            window.location.href = "../../Dashboard/Student/home.html";        
        }else{
            alert("Registration Failed")
        }
       
    })
    .catch(error => console.error('error:' , error));


})


function validateEmail(mail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(mail);
}

const checkEmail = () => {
    const emailValue = email.value.trim();

    if(emailValue === ""){
        email.nextElementSibling.textContent = "Enter email address";
        return false;

    }else if (!validateEmail(emailValue)) {
        email.nextElementSibling.textContent = "Enter a valid email address";
        return false;

    }
    else{
        email.nextElementSibling.textContent = "";
        return true;
    }
}




const checkPassword = () => {
    const passwordValue = password.value.trim();

    if (passwordValue === "" ){
        password.nextElementSibling.textContent = "Input Password";
        return false;

    }else{
        password.nextElementSibling.textContent = "";

        return true;
    }

}

const validateForm = () =>{
    const isEmailValid = checkEmail();

    return isEmailValid;
}


toggle.addEventListener('click', e =>{
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
})