import express, { response } from "express";

const app = express();

app.get('/', (req, res) => {
    return res.send("Olá DEV")
});

app.post('/test-post', (req, res) => {
    return res.send('Olá teste de POST')
});

app.listen(3000, () => console.log('Server is running'));