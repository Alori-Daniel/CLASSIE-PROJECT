let subMenu = document.getElementById("subMenu");

    function togglemenu() {
      subMenu.classList.toggle("open-menu");

    }

    


    const courseName = document.getElementById('course');
    const courseCode = document.getElementById('courseCode');
    const department = document.getElementById('department');
    const period = document.getElementById('period');
    const courseCard= document.getElementById('course-card')

    const form = document.getElementById('form');
    const button = document.getElementById('btn')

    button.addEventListener('click', e =>{
      // e.preventdefault();

      createChild();
      // window.location.href="../../pages/Dashboard/lecturer/lec-home.html";
      


    })

    const createChild = () =>{

      window.location.href="../../Dashboard/lecturer/lec-home.html";


      let para= document.createElement('p');

      

      console.log("course.value");

      para.textContent = course.value;


      courseCard.appendChild(para);


      console.log(para);
    }

    

    // const addClass = document.getElementById('addClass')

    // addClass.addEventListener('click', e => {
    //   // alert("allow")
     1
    //   console.log("h");

    // });

    function handleClick(){
        window.location.href="../lecturer/class-schedule.html";
    }




    