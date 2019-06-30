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

//create input button through DOM manipulation
window.onload = inputButton()

function inputButton() {

  var inputAdd = document.createElement("input")
  inputAdd.setAttribute("type", "text")
  inputAdd.setAttribute("id", "item")
  inputAdd.setAttribute("placeholder", "to-do item")
  inputAdd.setAttribute("name", "item")
  document.getElementsByClassName("container")[0].appendChild(inputAdd)

  //disable button click with 0 input

  // var requireInput = document.getElementsByClassName('button')
  // // requireInput.setAttribute("required", "");
  // requireInput.required = true;
}

function newTodo(item) {

  var item = document.getElementById("item").value
  document.getElementById("item").value = ""
  listItems = document.getElementById("todo-list")

  //create li element
  newItem = document.createElement("li")
  newItem.setAttribute("class", "todo-text")

  //add list item to li element
  newItem.innerText = item
  listItems.appendChild(newItem)
  console.log(item)

  //update todo list item count
  itemCount++
  console.log("item count: " + itemCount)
  document.getElementById('item-count').textContent = itemCount

  //update todo list unchecked item count
  uncheckedCount++
  console.log("unchecked: " + uncheckedCount)
  document.getElementById('unchecked-count').textContent = uncheckedCount

  //add button
  const buttonAdd = document.createElement('input')
  buttonAdd.setAttribute("type", "checkbox")
  buttonAdd.setAttribute("class", "todo-checkbox check")
  buttonAdd.setAttribute("onclick", "unclickFunction()")
  buttonAdd.setAttribute("id", "check")

  listItems.appendChild(buttonAdd)

}

function unclickFunction(){
  console.log("click")
  var checker = document.getElementsByClassName('check')

  uncheckedCount --
  document.getElementById('unchecked-count').textContent = uncheckedCount

  if (checker.checked){
    uncheckedCount ++
    document.getElementById('unchecked-count').textContent = uncheckedCount
  }
}
