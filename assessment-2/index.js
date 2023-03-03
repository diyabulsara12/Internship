let saveButton=document.getElementById("savebtn");
saveButton.addEventListener("click",(e) => {
    e.preventDefault();
    validation();
})
function validation()
{
    let cName = document.getElementById("cname").value;
    
     var regex = /^[0-9a-zA-Z]{3,25}$/;

    if (cName === "") {
      document.getElementById("cnamemessage").innerHTML = "This  is Required";
    }
    else if (!cName.match(regex)) {
        document.getElementById("cnamemessage").innerHTML = "Length should be min 3 and max 25 characters"; 
      }
      else{
        document.getElementById("cnamemessage").innerHTML =" "; 
      }
       let cDescription=document.getElementById("cdescription").value;
       var descregex2 = /^[0-9a-zA-Z]{3,150}$/;
        
    if (cDescription === "") {
        document.getElementById("cdescmessage").innerHTML = "This is Required";
      }
     
      else if (!cDescription.match(descregex2)) 
      {
        document.getElementById("cdescmessage").innerHTML = "Length should be min 3 and max 150 characters"; 
      }
      else{
        document.getElementById("cdescmessage").innerHTML =" "; 
      }
      let dtStatus=document.getElementById("status").value;
    if (dtStatus === "") {
        document.getElementById("statusmessage").innerHTML = "This is Required";
      }
      else{
        document.getElementById("statusmessage").innerHTML = " ";
      }
    let dRate=document.getElementById("rate").value;
    // let rateregex=/^[0-9]$/;
    if (dRate === "") {
        document.getElementById("ratemessage").innerHTML = "This is Required";
      }
      else{
        document.getElementById("ratemessage").innerHTML = " ";
      }

//    else if (!dRate.match(rateregex)) 
// {
//   document.getElementById("ratesmessage").innerHTML = "Length should be min 3 and max 150 characters"; 
// }
 let cBalance= document.getElementById("balance").value;
//  let balanceregex=/^[0-9]$/;
 if (cBalance === "") {
    document.getElementById("balancemessage").innerHTML = "This is Required";
  }
  else{
    document.getElementById("balancemessage").innerHTML = " ";
  }

// else if (!cBalance.match(balanceregex)) 
// {
//   document.getElementById("balancemessage").innerHTML = "Length should be min 3 and max 150 characters"; 
// }
let cDeposit= document.getElementById("deposit").value;
//  let depositeregex=/^[0-9]$/;
 if (cDeposit === "") {
    document.getElementById("depositmessage").innerHTML = "This is Required";
  }
  else{

    document.getElementById("depositmessage").innerHTML = " ";
  }

// else if (!cDeposit.match(depositeregex)) 
// {
//   document.getElementById("depositmessage").innerHTML = "Length should be min 3 and max 150 characters"; 
// }

if (
    cnamemessage.innerHTML === " " &&
    cdescmessage.innerHTML === " " &&
    statusmessage.innerHTML === " " &&
    ratemessage.innerHTML === " " &&
    balancemessage.innerHTML === " " &&
    depositmessage.innerHTML === " ")
    {
        let cName = document.getElementById("cname").value;
        let cDescription=document.getElementById("cdescription").value;
        let dtStatus=document.getElementById("status").value;
        let dRate=document.getElementById("rate").value;
        let cBalance= document.getElementById("balance").value;
        let cDeposit= document.getElementById("deposit").value;

        fetch(" http://localhost:3000/table",{
            method:"POST",
            headers: 
            { "Content-Type": "application/json" },

        body:JSON.stringify({ cName, cDescription,dtStatus, dRate,cBalance,cDeposit})
        }).then((response)=> response.json())
        .then((data) => console.log(data));
    }
}

 headers={"id":"#", "cName":"NAME","cDescription":"DESCRIPTION","dtStatus":"STATUS","dRate":"RATE","cBalance":"BALANCE","cDeposit":"DEPOSIT"}

 let table=document.createElement("table");
 table.className="table";
 console.log(table);

 function thead(table,data)
 {
    let thead=document.createElement("thead");
    table.appendChild(thead);
    table.appendChild(thead);
             
    let trow=thead.insertRow();
    // trow.className='emp-th'
    trow.className="data-th"
     
    let row=document.createElement("row");
    thead.appendChild(row);
    row.className="data-td";
    for (const key in data) {
      
        let th=document.createElement("th");
        th.className="data-th";
        let text=document.createTextNode(data[key]);
        th.appendChild(text);
        trow.appendChild(th);
        
    }

    let th=document.createElement("th");
     th.className="data-td"
    let text=document.createTextNode("ACTION");
    th.appendChild(text)
    trow.appendChild(th);
    
 }
  
 window.addEventListener("load",fetch("http://localhost:3000/table")
 .then((response)=> response.json())
 .then((data)=> {

    let tbody=table.createTBody();
    for (const element  of data) {
        tr=document.createElement("tr");
        tr.className="data-tr"
        tbody.appendChild(tr);
        table.appendChild(tbody);
        for (const key in headers ) {
           let td=document.createElement("td");
        //    td.className="data-td";
           let text=document.createTextNode(element[key])
           td.appendChild(text)
           tr.appendChild(td);
            }
            let td=document.createElement("td")
            td.className="data-td";
            let deleteBtn=document.createElement("button");
            deleteBtn.className="delete-btn";
            let text=document.createTextNode("DELETE");
            deleteBtn.appendChild(text);
           
            deleteBtn.addEventListener("click",(event) =>{fetch(`http://localhost:3000/table/${element.id}`,{
                method:"DELETE"
            }).catch((error) => console.error())
            table.deleteRow(tr.rowIndex)
        });

            td.appendChild(deleteBtn);
            let editBtn=document.createElement("button");
            editBtn.className="edit-btn";
            let text1=document.createTextNode("EDIT");
            editBtn.appendChild(text1);
            td.appendChild(editBtn);

         editBtn.addEventListener("click",(event) => {
        document.getElementById("cname").value=element.cName;
        document.getElementById("cdescription").value=element.cDescription;
        document.getElementById("status").value=element.dtStatus;
        document.getElementById('rate').value=element.dRate;
        document.getElementById('balance').value=element.cBalance;
        document.getElementById('deposit').value=element.cDeposit;

        let updateButton=document.getElementById('updatebtn');
        updateButton.addEventListener("click", (event) =>{ fetch(`http://localhost:3000/table/${element.id}`,{
            method:"PUT",
            headers: 
            { "Content-Type": "application/json" },
            body:JSON.stringify({cname:document.getElementById("cname").value,
            cdescription:document.getElementById("cdecription").value,
            status:document.getElementById("status").value,
            rate:document.getElementById("rate").value,
            balance:document.getElementById("balance").value,
            deposit:document.getElementById("deposit").value
        })

        })  .catch((error) => console.error())
    } 
        )
     }   
       );
    
    
            tr.appendChild(td);
        } 
    }
 )
 );
 

 thead(table,headers)
   let body=document.querySelector("body");
   body.appendChild(table);





