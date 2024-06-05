const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const terms = document.getElementById('terms');
const signBoard = document.getElementById('sb');
const signBoard1 = document.getElementById('sb1');


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


let isSubmitting = false;

// const details = {
//     "full_name": "Toad Davis",
//     "email": "coldstaff@gmail.com",
//     "password": "pass12333",
//     "matric_no": "2999",
//     "faculty": "Science",
//     "department": "csc",
//     "year": "400",
//     "type": "student"
// };



form.addEventListener('submit', e =>{
    e.preventDefault();

// const fullNameValue = fullName.value;
// const emailValue = email.value;
// const passwordValue = password.value;
// const password2Value = document.getElementById('password2').value;

// const details = {
//     full_name: fullNameValue,
//     email: emailValue,
//     password: passwordValue,
//     matric_no: "2232",
//     faculty: "Science",
//     department: "csc",
//     year: "400",
//     type: "student"
// };

// console.log('Full Name:', fullNameValue);
//         console.log('Email:', emailValue);
//         console.log('Password:', passwordValue);
//         console.log('Confirm Password:', password2Value);
    
    if(!isSubmitting){
        if(validateForm()){
            isSubmitting = true;

            signBoard.classList.add('visible');
            signBoard1.classList.remove('visible');

            // localStorage.setItem('fullName', fullNameValue);
            // localStorage.setItem('email', emailValue);
            // localStorage.setItem('password', passwordValue);

            // window.location.href = "../student/input-details.html";

            
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






// JS FOR FORM 2


const matricNumber = document.getElementById('matric');
const faculty = document.getElementById('faculty-des');
const department = document.getElementById('deparment-des');
const repButton = document.getElementById('rep');
const memButton = document.getElementById('member');
const level = document.getElementById('level-des');
const form2 = document.getElementById('form2');


let isSubmitting1 = false ;

// const fullNameValue = localStorage.getItem('fullName');
// const emailValue = localStorage.getItem('email');
// const passwordValue = localStorage.getItem('password');

// console.log(fullNameValue);
// console.log(emailValue);
// console.log(passwordValue);


// const details = {
//     full_Name: 'fullNameValue',
//     email: 'emailValue',
//     password: 'passwordValue',
//     matric_no: 'matricNumberValue',
//     faculty: 'facultyValue',
    
// }



form2.addEventListener('submit', e =>{
    e.preventDefault();

    const fullNameValue = fullName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const matricNumberValue = matricNumber.value.trim();
    const facultyValue = faculty.value.trim();
    const departmentValue = department.value;
    const levelValue = level.value;
    const roleValue = repButton.classList.contains('selected') ? 'student' : 'student';
    

    const details = {
        full_name: fullNameValue,
        email: emailValue,
        password: passwordValue,
        matric_no: matricNumberValue,
        faculty: facultyValue,
        department: departmentValue,
        year: levelValue,
        type: roleValue
    };


    if(!isSubmitting1){
        if(validateForm1()){
            isSubmitting = true;
            // window.location.href = "../../Dashboard/Student/home.html";


            fetch('http://127.0.0.1:8000/signup/student/', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(details)
            })

            .then(res => {
                return res.json()
            })
            .then(data => { console.log(data);
               
                    window.location.href = "../../Dashboard/Student/home.html";
               
            })
            .catch(error => console.error('ERROR'))

            // .then(res => res.json())
            
            // .then(data => {
            //     console.log(data);
            //     if (data.success) {
            //         window.location.href = "../../Dashboard/Student/home.html";
            //     } else {
            //         alert('Registration failed: ' + data.message);
            //         isSubmitting = false;
            //     }
            // })
            // .catch(error => {
            //     console.error('ERROR', error);
            //     alert('An error occurred during registration.');
            //     isSubmitting = false;
            // });


            // fetch('http://127.0.0.1:8000/signup/student/', 
            // {
            //     headers:{
            //         "Content-Type": "application/json"
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(details)
            // }
                
            // ).then(res => {
            //     return res.json()
            // })
            // .then(data => console.log(data))
            // .catch(error => console.error('ERROR'))


        }else{
            isSubmitting = false;
        }
}

   
})






//CHECKING VALUES- FORM VALIDATION 

matricNumber.addEventListener('input', e =>{
    checkMatricNumber();

    
    
})

memButton.addEventListener('click', e => {
    e.preventDefault();

    checkMemButton();
    
});

repButton.addEventListener('click', e => {
    e.preventDefault();

    checkRepButton();
    
    
})

faculty.addEventListener('change', e =>{

    checkFaculty();
    
    })

level.addEventListener('change', e =>{
    checkLevel();

})

department.addEventListener('change', e =>{
    checkDepartment();
})

    
    
const checkMatricNumber = () =>{
    var checkMatric = /^[0-9]{2}[a-zA-Z]{2}[0-9]{6}$/gi;

    if (checkMatric.test(matricNumber.value)) {
        console.log(matricNumber.value.match(checkMatric));
        matricNumber.nextElementSibling.textContent = "";
        return true
    } else {
        matricNumber.nextElementSibling.textContent = "Invalid Matric Number";
        return false
    }
    
}

const checkMemButton = () =>{

    if(!repButton.classList.contains('selected') && !memButton.classList.contains('selected1')){
        
        return false;

    }
    
    if(repButton.classList.contains('selected')){
            repButton.classList.remove('selected');
            memButton.classList.add('selected1');
            return true;

        }
        
        else{
            
                memButton.classList.add('selected1');
                return true;
    }
     

    
    
}

const checkRepButton = () =>{

    
    if (memButton.classList.contains('selected1')){
        memButton.classList.remove('selected1');
        repButton.classList.add('selected');
        return true;


    }
    // else if(!repButton.classList.contains('selected') && !memButton.classList.contains('selected1')){
    //     return false;

    // }
    else{
        repButton.classList.add('selected');
        return true;
    }
     
}



const checkFaculty = () =>{
    if (faculty.value === "Select..."){
        // console.log('select faculty');
        faculty.style.borderColor = "red";
        setTimeout(() => {
            faculty.style.borderColor = "white";
        }, 2500);
        return false;
    }else{
        faculty.style.borderColor = "white";

        return true
    }
}
const checkLevel = () =>{
    if (level.value === "Select..."){
        // console.log('select level');
        level.style.borderColor = "red";
        setTimeout(() => {
            level.style.borderColor = "white";
        }, 2500);
        return false;
    }else{
        level.style.borderColor = "white";
        return true
    }
}
const checkDepartment = () =>{
    if (department.value === "Select..."){
        // console.log('select department');
        department.style.borderColor = "red";
        setTimeout(() => {
            department.style.borderColor = "white";
        }, 2500);
        return false;
    }else{
        department.style.borderColor = "white";
        return true
    }
}

const validateForm1 = () => {
    const matricNumberValid = checkMatricNumber();
    const facultyValid = checkFaculty ();
    const departmentValid = checkDepartment();
    const repButtonValid = checkRepButton();
    const memButtonValid = checkMemButton();
    const levelValid = checkLevel();



   

    

    return matricNumberValid && facultyValid && departmentValid && repButtonValid && memButtonValid && levelValid;
}













