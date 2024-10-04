To-Do List App
Overview
The To-Do List App is a simple application that allows users to manage their tasks efficiently. It includes several files that work together to provide a seamless user experience.

Project Structure
1. ./src/index.html
The main HTML file serves as the entry point for the application. It contains the basic structure of the web page and links to the CSS and JavaScript files.

2. ./src/css/style.css
This file contains all the styles for the application. It defines the layout, colors, fonts, and overall appearance of the To-Do List app, ensuring a visually appealing interface.

3. ./src/ts/app.ts
This file is a TypeScript file in which you add your ts code.

3. ./dist/js/app.js
This JavaScript file will be generated from the app.ts file. You don't need to touch this.

5. watcher
In this project we are using watchers; a feature that automates the execution of the code by monitoring file changes. When you make changes to app.ts, the watcher will automatically run the necessary commands to reflect those changes in real-time.

Running the Project
To run the To-Do List application locally, follow these steps:

Clone the Repository: Clone this repository to your local machine using the following command:

git clone <repository-url>
Navigate to the Project Directory:

cd <project-directory>
Install Dependencies: If you have Node.js installed, run the following command to install any dependencies required:
npm install
Run the application:
Start the app using the following command. This will run the app and monitor file changes and automatically execute the necessary commands. This mean you once run npm start and your project starts running. You don't have to stop it or run any other commands everytime you change something. Just save the changes and it will be reflected on your page.

npm start
What you need to implement
Before implementing new features, read the current index.html and app.ts files to understand the initial structures we have. This will help you identify where to add new functionalities.

1. Adding New Todo Items
Every time the user clicks on the Add button, a new To-Do item will be created and added to the list. The application listens for the click event on the button and updates the displayed list of tasks accordingly.

2. Marking Items as Done
If the user clicks on a To-Do item, a line will appear over the item to indicate that it is completed. Clicking the item again will remove the line, allowing the user to easily toggle the completion status of their tasks.

3. Polishing the Page with CSS
Make your page as polished as possible using CSS. This includes adjusting the layout, colors, and fonts to create an attractive and user-friendly interface. Pay attention to spacing, hover effects, and overall aesthetics to enhance user experience.

4. Adding a Quote/Joke of the Day Section
This feature will fetch a random quote or joke every time the page is refreshed using the fetch method and display it on the page. Additionally, we will handle any potential errors that may arise during the fetch operation.

Step 1: Set Up the HTML Structure
First, you need to add a section in your HTML file where the quote or joke will be displayed. Add the following HTML code inside the <body> tag:

<div id="quote-section">
    <h2>Quote/Joke of the Day</h2>
    <p id="quote-text">Loading...</p>
</div>
Step 2: Fetch a Quote or Joke
implement a function that uses the fetch method to retrieve a random quote or joke from an external API. You can choose any API that provides quotes or jokes; You can use the "ZenQuotes" API for quotes and the "JokeAPI"(https://official-joke-api.appspot.com/random_joke) for jokes.

Step 3: Style the Quote/Joke Section
You may want to add some CSS to make the quote/joke section visually appealing.

Step 4: Adding Edit Functionality to Each To-Do Item
You will add an edit button to each to-do item, which allows the user to modify the task name. This task has three main parts:

Part 1: Add an edit button for each to-do item. When the button is clicked, it should call a function called handleEdit.

Part 2: Replace the task text with an input field and add a "Save Changes" button.

Part 3: Update the task with the new value when the "Save Changes" button is clicked, while ensuring that duplicate tasks are not allowed.

Part 1: Adding the Edit Button and Click Event Handler
-Add an Edit Button for Each To-Do Item: When you create a new "li" element for a to-do item, you need to create an "Edit" button as well. Append this "Edit" button to the list item ("li").

-Add an Event Handler for the Edit Button: For each edit button, add an event listener for the "click" event. When the edit button is clicked, the event handler should call a function named handleEdit.

Part2: Replacing Task Text with an Input Field
-Add the Input Field and "Save Changes" Button:

In the handleEdit function, replace the text content of the task with an input field containing the current value of the to-do item. Next to this input field, add a "Save Changes" button.

-Click Event Handler for the Save Button:

Add an event listener to the "Save Changes" button to handle updating the to-do item. When clicked, call a function named handleSave.

Part 3: Updating the To-Do Item with the New Value
-Save the Changes:

In the handleSave function, when the "Save Changes" button is clicked, take the value from the input field and update the text of the task item. Then, remove the input field and the "Save Changes" button and show the task with the new name.

-Handle Duplicates(Bonus):

Before saving the new task, check if it already exists in the list. If the new task name already exists, display an error message indicating a duplicate item.