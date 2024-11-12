// FIREBASE DATABASE
const firebaseConfig = {
    apiKey: "AIzaSyCTwocuEy7oANATPdtd5JCx7Z8ik1jsv6g",
    authDomain: "t0-do-list-29555.firebaseapp.com",
    databaseURL: "https://t0-do-list-29555-default-rtdb.firebaseio.com",
    projectId: "t0-do-list-29555",
    storageBucket: "t0-do-list-29555.firebasestorage.app",
    messagingSenderId: "771431499635",
    appId: "1:771431499635:web:b15d0a94ace8d59023a706"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


  var input = document.getElementById("todoInput");

  firebase.database().ref(`Todo List`).on("child_added",function(todo){
    

    var listElement = document.createElement("li");
    var listText = document.createTextNode(todo.val());
    listElement.appendChild(listText)
    listElement.style.marginTop = "10px"
    
    // Delete button
    
    var deletebutton = document.createElement("button");
    var deleteBtnText = document.createTextNode("Delete Task");
    deletebutton.appendChild(deleteBtnText);
    
    deletebutton.setAttribute("onclick","deletetask(this)");
    deletebutton.className = "delete-btn";
    listElement.appendChild(deletebutton);
    
    // Edit Button 
    
    var editButton = document.createElement("button");
    var editbtntext = document.createTextNode("Edit Task");
    editButton.appendChild(editbtntext);
    
    editButton.setAttribute("onclick","Edittask(this)");
    editButton.className = "edit-button";
    listElement.appendChild(editButton);
    
    var list = document.getElementById("todoList");
    list.appendChild(listElement);

    input.value = "";
  
  })


function Todo(){

    if(input.value){

  firebase.database().ref(`Todo List`).push(input.value);

  console.log(listElement);
  input.value = "";

    }

    else{
        alert("Task Not Entered!");
    }

  }
  

function DeleteAll(){

    var list = document.getElementById("todoList");
    list.innerHTML = " ";

}

function deletetask(task){

console.log(task.parentNode.remove());

}

function Edittask(edit){

    var input = prompt("Enter Updated Value.");
    if(input){
    edit.parentNode.firstChild.nodeValue = input;    
    }
}