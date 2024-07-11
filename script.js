let fName = document.querySelector("#fName");
let LName = document.querySelector("#lName");
let phoneno = document.querySelector("#phone");
let email = document.querySelector("#email");
let submit = document.querySelector(".submit");
let faild = document.querySelector(".faild");

let tbody = document.querySelector(".tbody");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    fName.value == "" ||
    LName.value == "" ||
    phoneno.value == "" ||
    email.value == ""
  ) {
    faild.innerHTML = "*All field the required";
  } else {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    // tr.innerHTML = `
    //             <td>${fName.value}</td>
    //             <td>${LName.value}</td>
    //             <td>${phoneno.value}</td>
    //             <td>${email.value}</td>
    //             <td><button onclick="deleteRow(this)">Delete</button></td>
    // `;

    const td1 = document.createElement("td");
    td1.innerHTML = fName.value;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = LName.value;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerHTML = phoneno.value;
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.innerHTML = email.value;
    tr.appendChild(td4);

    const deleteBtn = document.createElement("td");
    tr.appendChild(deleteBtn);
    const td5 = document.createElement("button")
    td5.innerHTML = "delete"
    deleteBtn.appendChild(td5)
    // deleteBtn.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    td5.addEventListener("click",()=>{
      tbody.removeChild(tr)
    })

    fName.value = "";
    lName.value = "";
    phoneno.value = "";
    email.value = "";
  }
});
// function deleteRow(button) {
//   let row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }
