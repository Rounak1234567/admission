let sub = document.getElementById("submit");

sub.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let studentDataBase = JSON.parse(localStorage.getItem("studentDataBase")) || [];
    
    let data = {
        name:name,
        age:age,
        gender:gender,
        email:email,
        phone:phone,
    }
    studentDataBase.push(data);
    localStorage.setItem("studentDataBase",JSON.stringify(studentDataBase))
})