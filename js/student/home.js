let userCheck = localStorage.getItem('data_got')

if (!userCheck){
  window.location.href = "../../Login/student/welcome.html"
}


let nametag = document.querySelector('#greeting')
let popupName = document.querySelector('#popup-name')
let announcement = document.querySelector('#announcement-para')
let courseAnn = document.querySelector('#course-ann')
let dateAnn = document.querySelector('#ann-date')

let userData = JSON.parse(localStorage.getItem('data_got'))['user']


function announcementDisplayer(){
  let temp = courseAnn.innerText
  fetch('http://127.0.0.1:8000/announcements/fetch/', {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify({
      "course": temp,
      "user": userData.email
    })
  })
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
    let date = data['date'].slice(0,10).split('-')
    let tmp = date[2].concat('/', date[1], '/', date[0])

    announcement.innerText = data.announcement
    dateAnn.innerText = tmp
  })
}

announcementDisplayer()



let logoutBtn = document.querySelector('#logout-btn')

const logout = () => {
  // e,preventDefault()

  fetch('http://127.0.0.1:8000/auth/logout/', {
    headers: {
        "Content-Type": "application/json"
    },
    method: 'GET'
})
.then(res => {
    return res.json()
})
.then(data => {

  localStorage.removeItem('data_got')
  // console.log("Here")

  window.location.href = "../../Login/student/login-page.html"
}
)

}

temp = userData.full_name.split((' '))


for (let i = 0; i < 2; i++){
  let one = temp[i][0]
  let two = temp[i].slice(1)

  let three = one.toUpperCase()

  temp[i] = three.concat(two)
}

nametag.innerText= `Good Morning, ${temp[0].concat(' ').concat(temp[1])}`
popupName.innerText = `${temp[0].concat(' ').concat(temp[1])}`

let subMenu = document.getElementById("subMenu")

function togglemenu() {
  subMenu.classList.toggle("open-menu");

}
const para = document.getElementById('up-para')
const upload = document.getElementById('input1');
console.log(upload.textContent);
upload.addEventListener('change', e => {
  // console.log("hello")
  // uploadValue = upload.textContent
  // console.log(uploadValue);
  console.log(upload.value);

  para.innerHTML = upload.value;

})



