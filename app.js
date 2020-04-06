const mongoose = require('mongoose')
const express = require('express')

app = express()

const dbUser = 'mongodb+srv://safwan:safwan@cluster0-wzrlv.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(
    dbUser, () => console.log('connected to database!')
)

app.get('/', (req, res) => {
    res.send('Enter /save to save a user')
})

app.get('/save', (req, res) => {
    const { dataModel } = require('./model')
    const name = 'Safwan'
    const user = new dataModel({ name })
    user.save()
    console.log('saved')
    res.send('User saved!')
})

const port = 4000;
app.listen(port, () => console.log(`Server is running at port: ${port}`))