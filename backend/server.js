import express from 'express';

const app=express();
const PORT=process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is ready!');
});