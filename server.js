require("dotenv").config();
const express = require ("express");
const connectDB = require("./config/db");
const app = express();
const ToDo = require("./routes/todo");
const cors = require('cors');

connectDB();
app.use(cors());

app.use(express.json({extended : false}));
app.get("/", (req,res) => res.send("Server is running"));            

app.use("/api/ToDo" , ToDo);


const PORT = process.env.PORT || 8000  ;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})