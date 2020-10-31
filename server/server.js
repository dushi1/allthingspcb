const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json());

app.get('/data', (req, res) => {
    res.send('Hello World!')
})
app.post('/data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Got a POST request')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});