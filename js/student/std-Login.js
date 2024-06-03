const matricNumber = document.getElementById('matric');
const password = document.getElementById('password');
const form = document.getElementById('form');



password.addEventListener('input', e => {
    checkPassword();

})


matricNumber.addEventListener('input', e =>{
    checkMatricNumber();

})


form.addEventListener('submit', e =>{
    e.preventDefault();

    window.location.href = "../../Dashboard/Student/home.html";

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