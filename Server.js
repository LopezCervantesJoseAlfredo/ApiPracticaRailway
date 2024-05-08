const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.port||3000;
app.use((req, res, next) => {
    console.log('peticion al server')+new Date()
    next();
})
 
app.use(morgan('combined'))
 
app.get('/', (req, res, next) => {
res.send('constestame a get desde server express');
});
 
app.post('/', (req, res, next) => {
    res.send('Contestame a post desde server express');
    });
 
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});