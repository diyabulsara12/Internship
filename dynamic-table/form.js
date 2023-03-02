let form=document.getElementById("btn-add");
console.log('The data is '+form);
form.addEventListener("click",() =>{

console.log("hello");
let fName=document.getElementById("fname").value;
let lastName=document.getElementById("lname").value;
let stdAdd=document.getElementById("stdadd").value;
fetch("http://localhost:3000/table",{
    method:"POST",
    body:JSON.stringify({fName,lastName,stdAdd}),
    headers: {
        "Content-Type": "application/json",
      }
}).then((response) => response.json())
.then((data) => console.log(data))
.catch(error => console.error());
}
);
