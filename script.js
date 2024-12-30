var list = document.getElementById("list-container");

var box1 = document.getElementById("box");

function add() {

  var muscle = document.createElement("li")

  muscle.style.padding="2px"

  muscle.innerHTML = box1.value + "<button onclick='deleteitem(event)' style='margin-left:10px'>Delete</button>"

  list.append(muscle);
}


function deleteitem(event)
{
      event.target.parentElement.remove()
}