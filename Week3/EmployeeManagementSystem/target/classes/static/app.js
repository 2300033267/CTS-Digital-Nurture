const api = "http://localhost:8080/employee";

window.onload = function () {
    loadEmployees();
};

// Save Employee
function saveEmployee() {

    const employee = {
        id: parseInt(document.getElementById("id").value),
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        salary: parseFloat(document.getElementById("salary").value)
    };

    fetch(api + "/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    .then(response => response.json())
    .then(data => {

        alert("✅ Employee Saved Successfully");

        clearForm();

        loadEmployees();

    })
    .catch(err => alert(err));

}



// Load Employees

function loadEmployees() {

    fetch(api + "/all")

    .then(response => response.json())

    .then(data => {

        let table = document.getElementById("employeeTable");

        table.innerHTML = "";

        document.getElementById("totalEmployee").innerHTML = data.length;

        data.forEach(emp => {

            table.innerHTML += `

            <tr>

            <td>

            <img src="/images/employee.png"

            width="45"

            height="45"

            style="border-radius:50%;">

            </td>

            <td>${emp.id}</td>

            <td>${emp.name}</td>

            <td>${emp.department}</td>

            <td>₹ ${emp.salary}</td>

            <td>

            <button class="btn btn-warning"

            onclick="editEmployee(${emp.id})">

            <i class="fa fa-edit"></i>

            Edit

            </button>

            </td>

            <td>

            <button class="btn btn-danger"

            onclick="deleteEmployee(${emp.id})">

            <i class="fa fa-trash"></i>

            Delete

            </button>

            </td>

            </tr>

            `;

        });

    });

}



// Delete

function deleteEmployee(id){

if(confirm("Delete Employee?")){

fetch(api+"/delete/"+id,{

method:"DELETE"

})

.then(response=>response.text())

.then(data=>{

alert(data);

loadEmployees();

});

}

}



// Edit

function editEmployee(id){

fetch(api+"/"+id)

.then(response=>response.json())

.then(emp=>{

document.getElementById("id").value=emp.id;

document.getElementById("name").value=emp.name;

document.getElementById("department").value=emp.department;

document.getElementById("salary").value=emp.salary;

});

}



// Search

function searchEmployee(){

let input=document.getElementById("searchEmployee").value.toUpperCase();

let table=document.getElementById("employeeTable");

let tr=table.getElementsByTagName("tr");

for(let i=0;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[2];

if(td){

let txt=td.textContent||td.innerText;

if(txt.toUpperCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}



// Clear Form

function clearForm(){

document.getElementById("id").value="";

document.getElementById("name").value="";

document.getElementById("department").value="";

document.getElementById("salary").value="";

}