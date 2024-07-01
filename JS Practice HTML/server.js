import express from "express";

const app = express();

const apiKey = "b697139096f89f16e8a771ae34e5c515";

app.get('/200', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lat=60&lang=ru&units=standard&lon=60`)
    .then(raw => raw.text())
    .then(text => res.end(text));
});

app.get('/400', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lat=60000&lang=ru&units=standard&lon=60`)
    .then(raw => raw.text())
    .then(text => res.end(text));
});

app.get('/401', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}1&lat=60&lang=ru&units=standard&lon=60`)
    .then(raw => raw.text())
    .then(text => res.end(text));
});

app.get('/404', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=aaasdsad,aaasdsad,aaasdasds&appid=${apiKey}`)
    .then(raw => raw.text())
    .then(text => res.end(text));
});

app.get('/405', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lat=60&lang=ru&units=standard&lon=60`, { method: "PUT" })
    .then(raw => raw.text())
    .then(text => res.end(text));
});

app.listen(3000, () => console.log("http://localhost:3000/200"));