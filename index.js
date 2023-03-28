const addInput= document.getElementById('add-field')
const colorInput = document.getElementById("color-field");
const itemList = document.getElementById("item-list");
 const listDiv = document.getElementById("list-div"); //for hiding/showing
 const toggle = document.getElementById("toggle-button");


function addItem(){
   
    // console.log('button clicked')
    const li = document.createElement("li");
    li.innerHTML =addInput.value;
    addInput.value = "";
    itemList.appendChild (li)
}

function removeItem(){
    // console.log('button ')
    li = document.querySelectorAll("#item-list li");
    itemList.removeChild(li[li.length - 1]);
}
// change color

function changeColor(){
    const list =document.querySelectorAll('li');
    const lastPickedColor =colorInput.value;

    for (let i = 0; i < list.length; i++) {
        list[i].style.color = lastPickedColor;
      }
  }
  // hide/show list
// function toggleButton() {
//     if (listDiv.style.display == "none") {
//       listDiv.style.display = "block";
//       toggle.textContent = "Hide list";
//     } else {
//       listDiv.style.display = "none";
//       toggle.textContent = "Show list";
//     }
//   }

  function toggleButton() {
    // var listDiv = document.getElementById("listDiv");
    if (listDiv.style.display === "none") {
      listDiv.style.display = "block";
      toggle.textContent = "Hide list";
    } else {
      listDiv.style.display = "none";
      toggle.textContent = "Show list";
    }
  }
  