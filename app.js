
const express = require("express");
const fs = require("fs");
const app = express();
const productsroute = require("./routes/productsroutes");
const usersroute = require("./routes/usersroutes");
  
app.use(express.json());


app.use(productsroute);
app.use(usersroute);

app.listen(5050, () => {
    console.log("yoo! Dude is up and running");
});