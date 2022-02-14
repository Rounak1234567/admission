let rejected = JSON.parse(localStorage.getItem("rejected")) || [];

rejected.map((e)=>{
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
    tr.append(td1,td2,td3,td4,td5);
    body.append(tr);
})