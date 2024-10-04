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
  ) as HTMLFormElement;
  const toDoErrorDiv = document.getElementById("to-do-error") as HTMLDivElement;

  let todoItems : string[] =[];

  inputContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      createToDoItem(todoList, inputElement, toDoErrorDiv);
    } catch(error: unknown) {
      if (error instanceof Error) {
      toDoErrorDiv.innerHTML = error.message;
      toDoErrorDiv.style.display = "block";
      console.error("Adding new to-do", error.message);
    }
    }
  });

  //2. Marking Items as Done
  // todoList.addEventListener("click", (event) => {
  //   const target = event.target as HTMLLIElement;
  //   toggleToDoItems(target);
  // });

  //Fetch random joke
  //fetchRandomJoke();

  //Fetch random quote
// fetchRandomQuote();

  //fetchRandomChuckNorrisJoke();

  //Functions declarations

  function createToDoItem(
    todoList: HTMLUListElement,
    inputElement: HTMLInputElement,
    toDoErrorDiv: HTMLDivElement,
  ) {
    const todoText: string = inputElement.value.trim();
      if (todoText === "") {
        throw new Error("You cannot add an empty to-do activity.");
      }
      if (todoItems.includes(todoText)) {
        throw new Error("Duplicate task item!");
      }
        toDoErrorDiv.innerHTML = "";
        todoItems.push(todoText)

        const newTodoLiElement = document.createElement("li");
        newTodoLiElement.textContent = todoText;
        newTodoLiElement.classList.add("todo-item");
        todoList.appendChild(newTodoLiElement);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        newTodoLiElement.appendChild(editButton);

        editButton.addEventListener("click", () => handleEdit(newTodoLiElement, editButton))
        inputElement.value = "";
  }

  function handleEdit(newTodoLiElement :HTMLLIElement, editButton: HTMLButtonElement):void {
    createInputEdit(newTodoLiElement,editButton)
    addListenerSaveEditChangesBtn()

 
  }

  function createInputEdit(newTodoLiElement :HTMLLIElement, editButton: HTMLButtonElement) {
    editButton.textContent = "";
    // console.log(newTodoLiElement)
    // console.log('li text content: ', newTodoLiElement.textContent)
    
    newTodoLiElement.innerHTML = `<input placeholder=${newTodoLiElement.textContent} id="edit-todo-input" ></input> <button id="save-edit-changes-btn">Save changes</button>`;
    // console.log(newTodoLiElement);
  }

  function addListenerSaveEditChangesBtn() {
    const saveEditChangesBtn = document.getElementById("save-edit-changes-btn") as HTMLButtonElement;
    const editToDoInput = document.getElementById("edit-todo-input") as HTMLInputElement;


    saveEditChangesBtn.addEventListener("click", ()=> {
      const currentToDo: string | null = editToDoInput.placeholder;
      const newToDoValue = editToDoInput.value;
      if (todoItems.includes(newToDoValue)) {
        throw new Error("Duplicate task item!");
      }
      
      console.log('to do array: ', todoItems)
      console.log("currentToDo: ", currentToDo)
      console.log("newToDoValue: ", newToDoValue)


       todoItems = replaceStringInArray(todoItems, currentToDo, newToDoValue)
      //  console.log(replaceStringInArray(["swim", "paint", "sleep"], "paint", "code to do app"))
       console.log('new to do array: ', todoItems)
    });
  }

  function toggleToDoItems(li: HTMLLIElement):void {
    li.classList.toggle("completed");
  }
});


function replaceStringInArray(arr :string[] , target :string, newString :string) {
  // Check if the target exists and then replace it
  return arr.map((item) => (item === target ? newString : item));
}


async function fetchRandomJoke(): Promise<void> {
  const urlString =
    "https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke";
  const jokePArray = document.getElementsByClassName("joke-p");

  try {
    const response = await fetch(urlString);
    if (!response.ok) {
      throw new Error(`Failed to fetch the joke! status: ${response.status}`);
    }
    const data = await response.json();
    jokePArray[0].textContent = `- ${data.setup}`;
    jokePArray[1].textContent = `- ${data.punchline}`;
  } catch (error: unknown) {
    console.error("Error fetching joke", error);
    jokePArray[0].textContent =
      "Failed to load the joke of the day. Try again later.";
  }
}

async function fetchRandomQuote() {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("quote: ", data[0].h);
  } catch (error) {
    console.error("Error fetching Quote");
  }
}

async function fetchRandomChuckNorrisJoke() {
  const urlString = "https://api.chucknorris.io/jokes/random";

  try {
    const response = await fetch(urlString);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Chuck Norris: ", data.value);
    const chuckNorrisJokeP = document.getElementById(
      "chuck-norris-p"
    ) as HTMLParagraphElement;
    chuckNorrisJokeP.textContent = data.value;
  } catch (error) {
    console.error("Error fetching Chuck Norris joke");
  }
}