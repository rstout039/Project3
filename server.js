const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const PORT = process.env.PORT || 3001;

// Define middleware here //

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku) //

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}
app.get("*", (req, res) =>{
    res.sendFile(path.join(publicPath, "index.html"))
});
// Add routes, both API and view //

app.use(routes);

// Connect to the MONGO DB //

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/stoutimusJobRequirementGeneration",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }
);

// Start the API server //
app.listen(PORT, function(){
    console.log(" ==> API server now listening on PORT ${PORT}!!");
})