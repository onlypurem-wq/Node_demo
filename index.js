const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    
})

app.get('/', (req, res) => {
    res.send('Hellooooooo guysssssssss')
})

app.post('/api/products', (req, res) =>{
    res.send('Data received')
})

mongoose.connect(process.env.Mongo_URI)
.then(() => {
    console.log('Connected!');
})

.catch((error) => {
    console.log('Connection failed')
    console.error(error)
});

