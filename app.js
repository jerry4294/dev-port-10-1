const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for EJS templates
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define an object for the "About Me" section
const about = {
  name: 'Your Name',
  specialization: 'Your Specialization',
  bio: 'A brief biography about yourself.',
  profileImage: '/images/user.png' // Ensure this path matches your actual image location
};

// Define an array of projects
const projects = [
  {
    name: 'Project One',
    description: 'Description of Project One.',
    github: 'https://github.com/yourusername/project-one'
  },
  {
    name: 'Project Two',
    description: 'Description of Project Two.',
    github: 'https://github.com/yourusername/project-two'
  },
  // Add more projects as needed
];

// Route for the home page
app.get('/', (req, res) => {
  res.render('index', { about, projects });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
