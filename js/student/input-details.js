const matricNumber = document.getElementById('matric');
const faculty = document.getElementById('faculty-des');
const department = document.getElementById('deparment-des');
const repButton = document.getElementById('rep');
const memButton = document.getElementById('member');
const level = document.getElementById('level-des');
const form = document.getElementById('form');


let isSubmitting ;

const fullNameValue = localStorage.getItem('fullName');
const emailValue = localStorage.getItem('email');
const passwordValue = localStorage.getItem('password');

console.log(fullNameValue);
console.log(emailValue);


const details = {
    full_Name: 'fullNameValue',
    email: 'emailValue',
    password: 'passwordValue',
    matric_no: 'matricNumberValue',
    faculty: 'facultyValue',
    
}



form.addEventListener('submit', e =>{
    e.preventDefault();

    const matricNumberValue = matricNumber.value.trim();
    const facultyValue = faculty.value.trim();
    const departmentValue = department.value.trim();
    const levelValue = level.value.trim();
    const roleValue = repButton.classList.contains('selected') ? 'Rep' : 'Member';

    const details = {
        full_name: fullNameValue,
        email: emailValue,
        password: passwordValue,
        matric_no: matricNumberValue,
        faculty: facultyValue,
        // department: departmentValue,
        // year: levelValue,
        // type: roleValue
    };


    if(!isSubmitting){
        if(validateForm()){
            isSubmitting = true;
            // window.location.href = "../../Dashboard/Student/home.html";


            fetch('http://127.0.0.1:8000/signup/', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(details)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    window.location.href = "../../Dashboard/Student/home.html";
                } else {
                    alert('Registration failed: ' + data.message);
                    isSubmitting = false;
                }
            })
            .catch(error => {
                console.error('ERROR', error);
                alert('An error occurred during registration.');
                isSubmitting = false;
            });


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

const validateForm = () => {
    const matricNumberValid = checkMatricNumber();
    const facultyValid = checkFaculty ();
    const departmentValid = checkDepartment();
    const repButtonValid = checkRepButton();
    const memButtonValid = checkMemButton();
    const levelValid = checkLevel();



   

    

    return matricNumberValid && facultyValid && departmentValid && repButtonValid && memButtonValid && levelValid;
}









