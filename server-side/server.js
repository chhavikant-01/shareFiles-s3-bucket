import express from "express"; // express framework to build the application
import mongoose from "mongoose"; //  mongoose ODM to handle mongoDB documents
import cors from "cors"; // package to avoid CORS errors
import path from "path"; // to handle static files' path to help deploy the app to heroku
import "dotenv/config";


// configure the express app to use JSON and CORS()
const app = express();
app.use(cors());
app.use(express.json());

// configure the port for the server side
const PORT = process.env.PORT || 5050;

// configure the mongoose setup
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log(`MongoDB connection has been established`);
});

// configure the routes
import fileRouter from "./routes/file.route.js";
app.use("/api/file", fileRouter);

//Load the npm build package of the frontend CRA
if (process.env.NODE_ENV === "production") {
    // set a static folder
    app.use(express.static("build"));

    // Provide a wildcard as a fallback for all routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../build", "index.html"));
    });
}

// host the app on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
