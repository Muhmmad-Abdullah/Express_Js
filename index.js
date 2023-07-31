const express = require("express");
const app = express();
const port = 8080;

// Sample data - Users
const users = [
    { id: 1, name: "Abdullah", address: "Lahore", email: "joni@gmail.com", education: "Mphil" },
    { id: 2, name: "Moazzma", address: "Karachi", email: "naao@gmail.com", education: "Phd" },
    { id: 3, name: "Asim", address: "Islamabad", email: "faoif@gmail.com", education: "BSCS" },
    { id: 4, name: "Shahri", address: "Chili", email: "joni@gmail.com", education: "Mphil" },
    { id: 5, name: "Aniya", address: "UK", email: "naao@gmail.com", education: "Phd" },
    { id: 6, name: "Alia", address: "USA", email: "faoif@gmail.com", education: "BSCS" },
    { id: 7, name: "Shazia", address: "Sindh", email: "joni@gmail.com", education: "Mphil" },
    { id: 8, name: "Uamir", address: "Kohat", email: "naao@gmail.com", education: "Phd" },
    { id: 9, name: "Ibrahim", address: "Kashmir", email: "faoif@gmail.com", education: "BSCS" },
    { id: 10, name: "Afzal", address: "KPK", email: "faoif@gmail.com", education: "BSCS" },
];

app.get('/', (req, res) => {
    res.send('Heloo This is  my First Express js api program ')
})

// Route to get all users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// Route to get a specific user by ID
app.get("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
