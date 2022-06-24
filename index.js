const express = require('express');
const User = require('./models/User');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require('./utils/db.config');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.json())

app.set('view engine', 'ejs')
const PORT = process.env.PORT;

app.get('/', (req, res) => {

    return res.render('index')
})
app.get('/register', (req, res) => {

    return res.render('register')
});

app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        return res.render('register' , { message: 'registeration successfully' })
    } catch (error) {
        return res.status(400).json({
            success: false,
            messa: error.message
        })
    }

})
app.listen(PORT, () => {
    console.log(`server is runing on Port ${PORT}`);

})


module.exports = app;
