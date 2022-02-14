let studentDataBase = JSON.parse(localStorage.getItem("studentDataBase")) || [];

studentDataBase.map((e)=>{
    let body = document.getElementById("body");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = e.name;
    let td2 = document.createElement("td");
    td2.innerHTML = e.age;
    let td3 = document.createElement("td");
    td3.innerHTML = e.gender;
    let td4 = document.createElement("td");
    td4.innerHTML = e.email;
    let td5 = document.createElement("td");
    td5.innerHTML = e.phone;
    let td6 = document.createElement("td");
    td6.innerHTML = "Accept";
    td6.style.background="Green";
    td6.style.cursor = "pointer"
    td6.addEventListener("click",()=>{
        let admitted = JSON.parse(localStorage.getItem("admitted")) || [];
        admitted.push(e);
        localStorage.setItem("admitted",JSON.stringify(admitted))
    })
    let td7 = document.createElement("td");
    td7.innerHTML = "Reject";
    td7.style.background="Red";
    td7.style.cursor = "pointer"
    td7.addEventListener("click",()=>{
        let rejected = JSON.parse(localStorage.getItem("rejected")) || [];
        rejected.push(e);
        localStorage.setItem("rejected",JSON.stringify(rejected))
    })
    tr.append(td1,td2,td3,td4,td5,td6,td7);
    body.append(tr);
})