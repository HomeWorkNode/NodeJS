
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/html/index.html`);
});
app.get('/angular', (request, response) => {
    response.sendFile(`${__dirname}/html/angular.html`);
});
app.get('/node', (request, response) => {
    response.sendFile(`${__dirname}/html/node.html`);
});
app.get('/react', (request, response) => {
    response.sendFile(`${__dirname}/html/react.html`);
});
app.get('/vue', (request, response) => {
    response.sendFile(`${__dirname}/html/vue.html`);
});


app.listen(3000);
