NOTE: Currently working on a v2.0 that's more responsive and using Next.js/Chakra-UI. Fun!

## 📝 Table of Contents

- [Acknowledgments](#acknowledgement)
- [Prerequisites](#prereq)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Environment Variables](#environment_variables)

## 📗 Acknowledgements <a name = "acknowledgement"></a>

This README format is from <a href="http://github.com/collabcloud/project-collabcloud">CollabCloud</a>, authored by my good friend Matthew Huynh.

The design of the site was heavily influenced by a lot of awesome portfolios out there, such as:

- <a href="https://brittanychiang.com/">Brittany Chiang</a>
- <a href="http://findmatthew.com/">Matthew Williams</a>
- <a href="https://jacekjeznach.com/">Jacek Jeznach</a>
- <a href="https://chippd.github.io/">Chris Dermody</a>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

Project Structure:

- root
  - client
    - src
      - Actions (Functions that make calls to our endpoints)
      - Components (Components make up containers and try to be as modular as possible)
      - Containers (Sections within a page)
      - Pages (Pages that can be navigated to, and have a url)
      - data (Fixed data for usage in components such as WorkOverview)
      - img (I have my personal picture in here)
- routes (Endpoints that the frontend will hit)
- model (Models for the data)
- server.js (Serves the static files + backend connection to MongoDB)

### Pages

Home.js: Primary page

Admin.js: Page where you can log in and view the messages that have been sent

More.js: Under construction

### Containers

Containers are sections of Home.js that take up about 100 vw or more of a page. They can be smooth scrolled to via the Navbar.

Landing.js: The first container, stating "Hi I'm Jarrod Servilla"

About.js: Section that includes a picture of me, quick overview, and a look at the skills I am proficient in.

Work.js: Card with a toggle button menu to display the previous jobs I have had

Projects.js: Maps all of the projects in data/projects.js into Project components

Contact.js: A form where visitors can submit messages which are stored in a MongoDB collection, and accessible via the Admin page.

### Components

TBD

### Prerequisites

What things you need to install and run the application

- Node.js (runtime environment, Node package manager) [node.js](https://nodejs.org/en/download/)
- MongoDB (database server)
- Heroku (optional, for deployment)

### Installing

A step by step series of examples that tell you how to get a development environment running.

1. Check out the latest code on the master branch
2. Register and login to MongoDB Atlas and Heroku

3. [IF YOU ARE NOT USING HEROKU]
   Create an environment file in the root directory

   - `touch .env`
   - See [here](#environment_variables) for what to put in!
     [IF YOU ARE USING HEROKU]

   Under your Applications tab -> Settings -> Config Vars,
   add in the environment variables from [here](#environment_variables)!

4. Install dependencies for both the client and server
   (in root)
   - `npm install`
   - `cd client && npm install`
5. Run the program!
   - `cd server && npm run dev`

## 🎈 Usage <a name="usage"></a>

- Navigate to localhost:3000 on your browser

## 🚀 Deployment <a name = "deployment"></a>

For reference, I used <a href="https://youtu.be/71wSzpLyW9k">this awesome tutorial</a> from Traversy Media!

Instructions: TBD

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com//) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJs](https://reactjs.org/) - Front End Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Heroku](https://heroku.com/) - Deployment

Other Packages:
Frontend:

- React-bootstrap (Awesome, responsive components)
- react-router-dom
- react-icons
- react-move (animation for the barchart)
- react-reveal (Beautiful animations)
- React-Scroll (smooth scrolling)
- react-sticky-box (sticky sidebar)

Backend:

- Dotenv (.env files)
- Mongoose (Middleware for MongoDB)

## 🌲Environment Variables and Package.json Scripts<a name = "environment_variables"></a>

Note that you will need to restart the Create React App development server after making any modifications to this file.

Your environment file in the root directory should be:

```
ATLAS_URI=[your mongodb atlas uri here]
password=[your password for the admin page here]
```

Under "scripts" in package.json, you should add these:

```
client:
    "start": "react-scripts start",
    "client": "npm start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build" (if you wanna nix the server portion and deploy on GH pages)

root directory:
    "client-install": "npm install --prefix client",
    "client": "npm run client --prefix client",
    "server": "nodemon server.js",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
```
