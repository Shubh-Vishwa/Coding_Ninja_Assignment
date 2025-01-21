// Users array that will act as a simple database for storing users
export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

// Function to register a new user
export const registerUser = (user) => {
  // const { name, email, password } = user;
  // const userItem = {
  //   id: users.length + 1,  // Assign a new ID
  //   name:name,
  //   email:email,
  //   password:password,
  // };

  // Add the new user to the users array
  users.push({ ...user, id: users.length + 1 });
  return true;
  // users.push(userItem);
};

// Function to authenticate a user during login
export const authenticateUser = (reqUser) => {
  const { email, password } = reqUser;

  // Check if the user exists and if the password matches
  const user = users.find((u) => u.email === email && u.password === password);
  return user ? true : false;  // Return true if user is found and authenticated, false otherwise
};
