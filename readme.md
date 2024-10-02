# To-Do List App

## Overview

The To-Do List App is a simple application that allows users to manage their tasks efficiently. It includes several files that work together to provide a seamless user experience.

## Project Structure

### 1. ./src/index.html
The main HTML file serves as the entry point for the application. It contains the basic structure of the web page and links to the CSS and JavaScript files.

### 2. ./src/css/style.css
This file contains all the styles for the application. It defines the layout, colors, fonts, and overall appearance of the To-Do List app, ensuring a visually appealing interface.

### 3. ./src/ts/app.ts
This file is a TypeScript file in which you add your ts code.

### 3. ./dist/js/app.js
This JavaScript file will be generated from the `app.ts` file. You don't need to touch this.


### 5. watcher
In this project we are using watchers; a feature that automates the execution of the code by monitoring file changes. When you make changes to `app.ts`, the watcher will automatically run the necessary commands to reflect those changes in real-time.


## Running the Project

To run the To-Do List application locally, follow these steps:

1. **Clone the Repository**:
   Clone this repository to your local machine using the following command:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:

  ```bash
  cd <project-directory>
  ```

3. **Install Dependencies**:
If you have Node.js installed, run the following command to install any dependencies required:

  ```bash
  npm install
  ```

4. **Run the application**:

Start the app using the following command. This will run the app and monitor file changes and automatically execute the necessary commands. This mean you once run npm start and your project starts running. You don't have to stop it or run any other commands everytime you change something. Just save the changes and it will be reflected on your page.

  ```bash
  npm start
  ```


  ## What you need to implement

Before implementing new features, read the current `index.html` and `app.ts` files to understand the initial structures we have. This will help you identify where to add new functionalities.

### 1. Adding New Todo Items
Every time the user clicks on the **Add** button, a new To-Do item will be created and added to the list. The application listens for the click event on the button and updates the displayed list of tasks accordingly.

### 2. Marking Items as Done
If the user clicks on a To-Do item, a line will appear over the item to indicate that it is completed. Clicking the item again will remove the line, allowing the user to easily toggle the completion status of their tasks.

### 3. Polishing the Page with CSS
Make your page as polished as possible using CSS. This includes adjusting the layout, colors, and fonts to create an attractive and user-friendly interface. Pay attention to spacing, hover effects, and overall aesthetics to enhance user experience.
