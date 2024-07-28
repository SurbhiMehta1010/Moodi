const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');  // Added cors

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/moodapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).send('User created');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.status(200).send('Login successful');
    } else {
        res.status(400).send('Invalid credentials');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
