import { users, registerUser, authenticateUser } from "../models/user.model.js";

export default class UserController {
  // GET route to render the register page
  getRegister = (req, res, next) => {
    res.render('user-register');
  };

  // GET route to render the login page
  getLogin = (req, res, next) => {
    res.render('user-login');
  };



  addUser = (req, res) => {
    const status = registerUser(req.body);
    if (status) return res.render("user-login");
  };



  // POST route to handle user login
  loginUser = (req, res) => {
    const { email, password } = req.body;
    const isAuthenticated = authenticateUser({ email, password });

    if (isAuthenticated) {
      // Successful login
      res.json({ success: "true", message: "login successful" });
    } else {
      // Failed login
      res.json({ success: "false", message: "login failed" });
    }
  };

}
