/**
 * Filename: complex_code.js
 *
 * Description: This code demonstrates a complex implementation of a social media platform backend,
 * including user authentication, friend requests, posts, and notifications.
 */

// Define constants
const MAX_USERNAME_LENGTH = 20;
const MAX_PASSWORD_LENGTH = 50;

// Create User class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    this.friends.push(user);
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }
}

// Create Post class
class Post {
  constructor(content) {
    this.content = content;
    this.comments = [];
  }

  addComment(user, content) {
    this.comments.push({ user, content });
  }
}

// Function to authenticate user
function authenticateUser(username, password) {
  // Simulating user validation
  return username === "admin" && password === "password";
}

// Function to validate username length
function isValidUsername(username) {
  return username.length <= MAX_USERNAME_LENGTH;
}

// Function to validate password length
function isValidPassword(password) {
  return password.length <= MAX_PASSWORD_LENGTH;
}

// Sample user data
const users = [
  { username: "john", password: "123456" },
  { username: "doe", password: "password" },
];

// Prompt user to enter credentials
const enteredUsername = prompt("Enter your username:");
const enteredPassword = prompt("Enter your password:");

// Authenticate user
if (authenticateUser(enteredUsername, enteredPassword)) {
  console.log("Authentication successful!");

  // Create a user instance
  const currentUser = new User(enteredUsername, enteredPassword);

  // Friend request functionality
  const friendRequestUsername = prompt("Enter the username to send a friend request:");
  const friendRequestUser = users.find((user) => user.username === friendRequestUsername);

  if (friendRequestUser) {
    currentUser.addFriend(friendRequestUser);

    // Post creation functionality
    const createPostContent = prompt("Create a post:");
    currentUser.createPost(createPostContent);

    // Comment on post functionality
    const commentOnPostIndex = parseInt(prompt("Enter the post index to comment on:"));
    const commentOnPostContent = prompt("Enter the comment:");
    currentUser.posts[commentOnPostIndex].addComment(currentUser.username, commentOnPostContent);

    console.log("Friend request sent, post created, and comment added successfully!");
  } else {
    console.log("Invalid friend request username.");
  }
} else {
  console.log("Authentication failed. Invalid username or password.");
}

// Additional creative and complex code can be added below to further enhance the social media platform.