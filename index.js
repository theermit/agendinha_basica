const express = require('express');
const app = new express();
const port = 3000;

//configurar body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//configurar template
const templateConfigure = require("./services/templateService");
templateConfigure(app);


//routes
const router = require("./routes/route");
app.use(router);

app.listen(port, () => {
    console.log(`app escutando na porta ${port}`);
});