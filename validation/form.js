let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let firstname = document.getElementById("fname").value;
  let empname = document.getElementById("fname");
  var regex = /^[0-9a-zA-Z]+$/;
  if (firstname === "") {
    document.getElementById("empfname").innerHTML = "This is Required field";
    empname.style.border = "1px solid red ";
  } else if (!firstname.match(regex)) {
    document.getElementById("empfname").innerHTML = "Enter Valid input";
    empname.style.border = "1px solid red ";
  } else {
    document.getElementById("empfname").innerHTML = "";
    empname.style.border = "none";
  }
//   console.log(document.getElementById("empfname").innerHTML);
  let lastname = document.getElementById("lname").value;
  let emplastname = document.getElementById("lname");
  if (lastname === "") {
    document.getElementById("lastName").innerHTML = "This is Required field";
    emplastname.style.border = "1px solid red ";
  } else if (!lastname.match(regex)) {
    document.getElementById("lastName").innerHTML = "Please Enter Valid input";
    emplastname.style.border = "1px solid red ";
  } else {
    document.getElementById("lastName").innerHTML = "";
    emplastname.style.border = "none";
  }

  let phoneNum = document.getElementById("phno").value;
  let empphone = document.getElementById("phno");
  let regex2 = /^[89][0-9]{9}$/;

  if (phoneNum === "") {
    document.getElementById("phoneNo").innerHTML = "This is Required field";
    empphone.style.border = "1px solid red ";
  } else if (!phoneNum.match(regex2)) {
    document.getElementById("phoneNo").innerHTML = "enter valid Input";
    empphone.style.border = "1px solid red ";
  } else {
    document.getElementById("phoneNo").innerHTML = "";
    empphone.style.border = "none";
  }
  let email = document.getElementById("mail").value;
  let empemail = document.getElementById("mail");

  //    regex3=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  let regex3 = /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com|in)/;
  if (email == "") {
    document.getElementById("emailadd").innerHTML = "This is required filed";
     empemail.style.border="1px solid red";
  } else if (!email.match(regex3)) {
    document.getElementById("emailadd").innerHTML = "Enter valid email";
    empemail.style.border = "1px solid red";
  } else {
    document.getElementById("emailadd").innerHTML = "";
    // empmail.style.border="none";
  }
  let orgemail = document.getElementById("orgmail").value;
  let emporgemail = document.getElementById("orgmail");

  let regex4 = /^([a-zA-Z\_.\0-9s]+)@1Rivet\.(com)$/;
  if (orgemail == "") {
    document.getElementById("orgemail").innerHTML = "This is required filed";
    emporgemail.style.border = "1px solid red";
  } else if (!orgemail.match(regex4)) {
    document.getElementById("orgemail").innerHTML =
      "Please enter valid organization address";
    emporgemail.style.border = "1px solid red";
  } else {
    document.getElementById("orgemail").innerHTML = "";
    // empemail.style.border="none"
  }

  let password = document.getElementById("pwd").value;
  let emppwd = document.getElementById("pwd");
  regex4 =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]){8,16}$/;
  if (password === "") {
    document.getElementById("password").innerHTML = "This is required filed";
    emppwd.style.border = "1px solid red";
  }
  //    else if(!password.match(regex4))
  //    {
  //     document.getElementById("password").innerHTML="enter valid password"
  //     emppwd.style.border="1px solid red"
  //    }
  else {
    document.getElementById("password").innerHTML = "";
    empemail.style.border = "none";
  }
  let empSalary = document.getElementById("emp-salary").value;
  let emppsalary = document.getElementById("emp-salary");
  if (empSalary === "") {
    document.getElementById("salary").innerHTML = "This is required filed";
    emppsalary.style.border = "1px solid red";
  } else if (empSalary >= 5000) {
    document.getElementById("salary").innerHTML = "";
    // emppsalary.style.border="1px solid red"
  } else {
    document.getElementById("salary").innerHTML = "enter Proper salary";
    emppsalary.style.border = "1px solid red";
  }
  //  debugger
//     let firstname1 = document.getElementById("fname").value;
//       let lastname1 = document.getElementById("lname").value;
//       let phoneno1 = document.getElementById("phno").value;
//       let email1 = document.getElementById("mail").value;
//       let orgemail1 = document.getElementById("orgmail").value;
//       let password1 = document.getElementById("pwd").value;
//       let salary1 = document.getElementById("emp-salary").value;
//   fetch("http://localhost:3000/table", {
//     method: "POST",
//     body: JSON.stringify({
//       firstname1,
//       lastname1,
//       phoneno1,
//       email1,
//       orgemail1,
//       password1,
//       salary1,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((Response) => Response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

  if (!(document.getElementById("fname")==""))  {
    console.log("hello");
    let firstname1 = document.getElementById("fname").value;
    let lastname1 = document.getElementById("lname").value;
    let phoneno1 = document.getElementById("phno").value;
    let email1 = document.getElementById("mail").value;
    let orgemail1 = document.getElementById("orgmail").value;
    let password1 = document.getElementById("pwd").value;
    let salary1 = document.getElementById("emp-salary").value;

    fetch(" http://localhost:3000/table", {
      method: "POST",
      body: JSON.stringify({
        firstname1,
        lastname1,
        phoneno1,
        email1,
        orgemail1,
        password1,
        salary1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => Response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  else{
    console.log("eroor");
  }
});
