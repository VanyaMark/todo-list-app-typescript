document.addEventListener("DOMContentLoaded", () => {
  // Get references to the input field, button, and the to-do list container
  const inputElement = document.getElementById(
    "todo-input"
  ) as HTMLInputElement;
  const addButton = document.getElementById(
    "add-todo-button"
  ) as HTMLButtonElement;
  const todoList = document.getElementById("todo-list") as HTMLUListElement;
  const inputContainer = document.getElementById(
    "input-container"
  ) as HTMLDivElement;

  // 1. Adding new Todo Item on click
  addButton.addEventListener("click", () => {
    createToDoItem(todoList, inputElement);
  });

  // 1. Adding new Todo Item on keyboard Enter
  inputContainer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // event.preventDefault();
      createToDoItem(todoList, inputElement);
    }
  });

  //2. Marking Items as Done
  todoList.addEventListener("click", (event) => {
    const target = event.target as HTMLLIElement;
    // console.log(target.textContent);

    toggleToDoItems(target);
  });
});

function toggleToDoItems(li: HTMLLIElement) {
  li.classList.toggle("completed");
}

function createToDoItem(
  todoList: HTMLUListElement,
  inputElement: HTMLInputElement
) {
  const todoText: string = inputElement.value.trim();
  if (todoText !== "") {
    const newTodoLiElement = document.createElement("li");
    newTodoLiElement.textContent = todoText;
    newTodoLiElement.classList.add("todo-item");
    todoList.appendChild(newTodoLiElement);
  }
   inputElement.value = "";
}

// Rana's code
// function addTodoItem(inputElement:HTMLInputElement, todoList:HTMLUListElement) {
//   const todoText: string = inputElement.value.trim();

//   if (todoText !== "") {
//     const newTodoItem = document.createElement("li");
//     newTodoItem.textContent = todoText;
//     todoList.appendChild(newTodoItem)
//   }

//   //reset input field
//   inputElement.value = "";
// }
