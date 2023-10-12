

const form = document.getElementById("form_element");
const listItem = document.getElementById("item");
form.addEventListener("submit", onSubmit);
listItem.addEventListener("click", removeItem);
listItem.addEventListener("click", editItem);
window.addEventListener("DOMContentLoaded",onReload)



function onSubmit(e) {
   e.preventDefault();
   const name = document.getElementById("name").value;
   const email = document.getElementById("floatingInput").value;
   const phone = document.getElementById("phone").value;
   
   const userDetails = {
      name: name,
      email: email,
      phone: phone

   }
  
   axios.post("http://localhost:3000/users/postUser",userDetails).then((response)=>{
      showUserOnTheScreen(response.data);
   });
   
}


function removeItem(e) {
   if (e.target.matches('#delete')) {
      if (confirm("are you sere")) {
         const li = e.target.parentElement;
         const id=li.firstChild.textContent;
         axios.delete(`http://localhost:3000/users/${id}`)
         listItem.removeChild(li);
   }

}
}

function editItem(e) {
   if (e.target.matches('#edit')) {
      const li = e.target.parentElement;
      const id=li.firstChild.textContent;
      axios.get(`http://localhost:3000/users/getUsers/${id}`)
      .then(res=>{
         const data=res.data[0];
         document.getElementById("name").value = data.name;
         document.getElementById("floatingInput").value =data.email;
         document.getElementById("phone").value =data.phone;
         axios.delete(`http://localhost:3000/users/${id}`)
         listItem.removeChild(li);
      });
   }
}










function onReload() {
   
   axios.get("http://localhost:3000/users/getUsers")
   .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
         showUserOnTheScreen(response.data[i]);
      
      }
   });
}




function showUserOnTheScreen(obj){
   const li = document.createElement("li");
   const span=document.createElement("span");
   span.classList="hide_id";
   const deleteBtn = document.createElement("button")
   deleteBtn.id = "delete";
   deleteBtn.appendChild(document.createTextNode("delete"))
   const editBtn = document.createElement("button")
   editBtn.id = "edit";
   editBtn.appendChild(document.createTextNode("edit"))
   span.appendChild(document.createTextNode(`${obj.id}`));
   li.appendChild(span);
   li.appendChild(document.createTextNode(`${obj.email}`));
   li.appendChild(document.createTextNode(`- ${obj.phone}`));
   li.appendChild(deleteBtn)
   li.appendChild(editBtn)
   listItem.appendChild(li);
}
