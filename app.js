if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken : mapBoxToken})

const Places = require('./models/places');

const app = express();

mongoose.connect('mongodb://localhost:27017/findMyPlace', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/views'));
app.engine('ejs',ejsMate);
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/all', (req, res) => {
    res.render('all');
})


// app.get('/place', (req, res) => {
//     console.log(req.body);
//     res.render('place');
// })

app.get('/find', (req, res) => {
    res.render('find');
})

app.put('/place', async(req, res) => {
    // const geoData = await geocoder.forwardGeocode({
    //     query: req.body.safetypin.address,
    //     limit: 1
    // }).send()
    res.render('place');
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})