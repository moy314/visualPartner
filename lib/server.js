const visualPartnerConstroller = require("../lib/controllers/visualPartnerConstroller");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "WELCOME TO VISUAL PARTNER API"});
});


app.get("/v1/visualartner/getstudents", (request, response) => {
    response.json(visualPartnerConstroller.getStudents());
});

app.get("/v1/visualartner/havecertification", (request, response) => {
    response.json(visualPartnerConstroller.haveCertification());
});

app.get("/v1/visualartner/credits", (request, response) => {
    response.json(visualPartnerConstroller.credits());
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});