// Si no estamos en produccion, permito usar el .env local
if(process.env.NODE_ENV !== "production") {
    require("dotenv").config(); // Para usar el archivo .env
}

const express = require("express");
const morgan = require("morgan"); // Me muestra por consola lo que las aplicaciones cliente van pidiendo (GET, POST, etc)
const multer = require("multer"); // Para procesar imagenes
const path = require("path");
const cors = require("cors");


// Initialization
const app = express();
require("./database");

// Settings
app.set("port", process.env.PORT || 3000); // process.env.PORT sirve por si lo subo a Heroku

// Middlewares
app.use(morgan("dev"));
/* Aca deberia ir el multer pero no lo use*/
app.use(express.urlencoded({extended:false})); // Este middleware sirve para interpretar datos de un formulario mediante JSON
app.use(express.json()); // Para entender peticiones AJAX, o sea JSONs sin formularios
app.use(cors());

// Routes
app.use("/api/foods", require("./routes/foods"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Start server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});

// Frontend