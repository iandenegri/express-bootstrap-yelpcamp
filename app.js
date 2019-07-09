const express = require("express");
const bodyParser = require("body-parser");
let app = express();


// Set up the project.
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Fake data before using a db.
let campgrounds = [
    {
        name: "Salmon Creek",
        image: "https://d15omoko64skxi.cloudfront.net/wp-content/uploads/2016/05/8256206923_c77e85319e_z.jpg"
    },
    {
        name: "Granite Creek",
        image: "https://d15omoko64skxi.cloudfront.net/wp-content/uploads/2016/05/8256206923_c77e85319e_z.jpg"
    },
    {
        name: "Goat Creek",
        image: "https://d15omoko64skxi.cloudfront.net/wp-content/uploads/2016/05/8256206923_c77e85319e_z.jpg"
    },
];

// ROUTES //
// Landing
app.get("/", function(req, res){
    res.render("index.ejs");
});

// Get all objects
app.get("/campgrounds", function(req, res){
    let context = {
        campgrounds: campgrounds,
    };
    res.render("campgrounds.ejs", context);
});

// End point for posting new camp ground submitals
app.post("/campgrounds", function(req, res){
    // get data from form and add to our list of camps
    let name = req.body.name;
    let image = req.body.image;
    let new_campground = {name: name, image: image};
    campgrounds.push(new_campground);
    // redirect to campground list
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000, function(){
    console.log("Yelp Camp App is running on port 3000!");
});