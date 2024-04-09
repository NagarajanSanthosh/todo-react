const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/todo').then(app.listen(5555, () => {
    console.log("Server is running on port 5555");
})).catch(err => console.log("db not connected", err));
const userS = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const taskS = new mongoose.Schema({
    id: Number,
    text: String,
    description: String,
    completed: Boolean,
})
const taskModel = mongoose.model('tasks', taskS)
const userModel = mongoose.model('userslist', userS);

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Home');
});

app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const data = {
        "name": name,
        "email": email,
        "password": password
    };
    console.log(data);
    try {
        await userModel.create(data);
        res.status(201).send("User created successfully");
    } catch (error) {
        console.error('Error occurred', error);
        res.status(500).send("Error creating user");
    }
});
app.post('/api/tasks', async (req, res) => {
    const { id, text, description, completed } = req.body;
    const data = {
        id: id,
        text: text,
        description: description,
        completed: completed,
    }
    try {
        await taskModel.create(data);
        res.status(201).send("Task uploaded");
    }
    catch (error) {
        console.error('Error occurred', error);
        res.status(500).send("Error creating task");
    }
})
app.get('/api/tasks', (req, res) => {
    taskModel.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
})

