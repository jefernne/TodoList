## Table of contents

- Introduction
- Technologies Used
- Prerequisites
- Installation Steps
- How to Run the Application

<hr>
<h3>Introduction</h3>
Welcome to the Task List Application, an intuitive and powerful tool designed to help you organize and manage your daily activities efficiently. This project integrates a modern frontend developed with React.js and Tailwind CSS, along with a backend based on Node.js and Express, and uses MongoDB as the data storage system.

#### Key Features
**Comprehensive Task Management :** Create, edit, and delete tasks with ease
** Drag and Drop Interface :** Organize tasks intuitively using the drag-and-drop functionality
**Filtering and Search :** Quickly find tasks using advanced filtering and search options
**Data Persistence :**Save and retrieve your tasks from a MongoDB database to ensure you don't lose your information
** Responsive and Modern Design :** Attractive and adaptable user experience on any device, thanks to Tailwind CSS.
<hr>
<h2>Technologies Used</h2>

- **Frontend**:
  - Vite.js
  - React.js
  - Tailwind CSS
   - Additional Libraries:
	  - `React DnD Kit`  for drag-and-drop functionality)
	  - `js-cookie` (for cookie handling)
	  - `react-router-dom` ( for routing) 


- **Backend**:
  - Node.js
  - Express
  - MongoDB
  -  - Additional Libraries:
     -  `cors`
     -   `mongoose`
     -    `dotenv`
     -  `cookie-parser`
     -  `sonwebtoken`
     -  `nodemon` (for development)


<hr>
<h2> Prerequisites </h2>

Before you begin, ensure that you have the following components installed:

- **Node.js**: [Download Node.js](https://nodejs.org/) (recommended LTS version)
  - Verify the installation by running `node -v` in your terminal.
- **npm (Node Package Manager)**: Usually installed with Node.js.
  - Verify the installation by running `npm -v` in your terminal.
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community) (recommended Community Server version)
  - Set up and run the MongoDB service on your system. Follow the installation guide for your operating system:
    - [Windows Installation Guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
    - [macOS Installation Guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
    - [Linux Installation Guide](https://docs.mongodb.com/manual/administration/install-on-linux/)
- **Git**: [Install Git](https://git-scm.com/downloads) to clone the repository.
  - Verify the installation by running `git --version` in your terminal.

Ensure these tools are properly installed and configured before proceeding with the project installation steps.

<hr>
<h2>Installation Steps</h2>

**Clone the Repository :**

 `bash`
 `git clone https://github.com/jefernne/TodoList.git`


##### Accessing the Cloned Folder :
**Open your terminal**.
**Change to the directory where the cloned folder is located** using the `cd` command in the `terminal`. For example, if the cloned folder is named `TodoList` and is in your home directory, run the following command:

		cd  .\TodoList\ 

##### Install Frontend Dependencies 
		cd .\todoListFront\
		npm install;

##### Install Backend Dependencies 
		cd .\todoListBackend\ 
		npm install;


**Environment Variable Configuration for the Backend**:
The project uses the `.env`	 file to store environment variables such as the `MongoDB URI`, `PORT`, and `secretOrPrivateKeys`. It should be located in the root of the `todoListBackend` folder.

		 URLHostMongo="mongodb://localhost:27017/TodoListdb"
		 PORT= 3000
		 secretOrPrivateKey = jefern123

<hr>

<h2>How to Run the Application</h2>

**Starting MongoDB :**
For the application to work correctly, MongoDB needs to be running. Make sure that MongoDB is installed on your machine.

Once MongoDB is installed, open a terminal and run the following command to start the MongoDB server:

		 mongod 

**Start the Backend Server:**
Make sure that your terminal is located in the `.\todoListBackend\` directory before starting the backend server. This is the folder where the server files are located and where you should run commands related to the backend.

		 npm run dev
**Start the Frontend Server:**
Make sure to open a new terminal and navigate to the `.\todoListFrontend\` directory before starting the frontend server. This is the folder where the frontend files are located and where you should run commands related to the frontend.

		 npm run dev















