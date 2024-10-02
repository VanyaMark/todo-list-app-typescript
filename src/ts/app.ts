document.addEventListener("DOMContentLoaded", () => {
  // Get references to the input field, button, and the to-do list container
  const inputElement = document.getElementById("todo-input") as HTMLInputElement;
  const addButton = document.getElementById("add-todo-button") as HTMLButtonElement;
  const todoList = document.getElementById("todo-list") as HTMLUListElement;

  // 1. Adding new Todo Items
  addButton.addEventListener('click', () => {
    const newTodoLiElement = document.createElement('li');
    newTodoLiElement.textContent = inputElement.value;
    todoList.appendChild(newTodoLiElement)
  })

  //2. Marking Items as Done
  

  todoList.addEventListener('click', (event) => {
    const target = event.target as HTMLLIElement;
    // console.log(target.textContent);

    toggleToDoItems(target)

  })

});

function toggleToDoItems(li: HTMLLIElement) {
  if (li.classList.contains('completed')) {
    li.classList.remove('completed')
  } else {
    li.classList.add('completed');
  }
}
