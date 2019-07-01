const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// const list = document.getElementById('todo-list')
// const itemCountSpan = document.getElementById('item-count')
// const uncheckedCountSpan = document.getElementById('unchecked-count')

//init trackers
var itemCount = 0
var uncheckedCount = 0
var buttonCounter = 0

// //create input button through DOM manipulation
// window.onload = inputButton()
//
// function inputButton() {
//
//   var inputAdd = document.createElement("input")
//   inputAdd.setAttribute("type", "text")
//   inputAdd.setAttribute("id", "item")
//   inputAdd.setAttribute("placeholder", "to-do item")
//   inputAdd.setAttribute("name", "item")
//   document.getElementsByClassName("container")[0].appendChild(inputAdd)
// }

function newTodo(item) {

  //add input button
  const buttonInput = document.createElement('input')
  buttonInput.setAttribute("type", "text")
  buttonInput.setAttribute("id", "id00" + itemCount)
  buttonInput.setAttribute("placeholder", "to-do item")

  //add button
  const buttonAdd = document.createElement('input')
  buttonAdd.setAttribute("type", "checkbox")
  buttonAdd.setAttribute("class", "todo-checkbox check")
  buttonAdd.setAttribute("onclick", "checkBoxFunction()")
  buttonAdd.setAttribute("id", "check" + buttonCounter)
  buttonAdd.setAttribute("value", "1")
  buttonCounter++

  //add delete button

  //add buttons to html
  listItems = document.getElementById("todo-list")
  listItems.appendChild(buttonInput)
  listItems.appendChild(buttonAdd)



  //
  // //create li element
  // newItem = document.createElement("li")
  // newItem.setAttribute("class", "todo-text")
  //
  // //add list item to li element
  // newItem.innerText = item
  // listItems.appendChild(newItem)
  // console.log(item)




  //update todo list item count
  itemCount++
  console.log("item count: " + itemCount)
  document.getElementById('item-count').textContent = itemCount

  //update todo list unchecked item count
  uncheckedCount++
  console.log("unchecked: " + uncheckedCount)
  document.getElementById('unchecked-count').textContent = uncheckedCount



}

function checkBoxFunction(e) {

  //click event set up
  var targ;
  if (!e) var e = window.event;
  if (e.target) targ = e.target;
  else if (e.srcElement) targ = e.srcElement;
  if (targ.nodeType == 3) // defeat Safari bug
    targ = targ.parentNode;

  //change unchecked to-do item count when button is clicked
  if (e.target.value == 1) {
    uncheckedCount--
    document.getElementById('unchecked-count').textContent = uncheckedCount
    e.target.value = 0

  }
  else {
    uncheckedCount++
    document.getElementById('unchecked-count').textContent = uncheckedCount
    e.target.value = 1
  }
}
