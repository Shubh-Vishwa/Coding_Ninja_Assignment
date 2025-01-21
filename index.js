// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserControllers from "./src/controllers/user.controller.js";
// import UserController from "./src/controllers/user.controller.js";

const app = express();
const UserController = new UserControllers();

// Middleware for handling JSON and URL-encoded form data
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Middleware for using EJS layouts
app.use(expressEjsLayouts);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the path for views
app.set("views", path.resolve("src", "views"));

// GET route to render the registration page
app.get('/register', UserController.getRegister);

// POST route to handle user registration
app.post('/register', UserController.addUser);

// GET route to render the login page
app.get('/login', UserController.getLogin);

// POST route to handle user login
app.post('/login', UserController.loginUser);

export default app;
