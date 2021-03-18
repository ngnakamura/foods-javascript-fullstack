/* Para interactuar con nuestra API REST */

// Importar archivo CSS
import e from "cors";
import "./styles/app.css";

import UI from "./UI";

/* Logica de Comidas */

// Boton para seleccionar comida random
document.getElementById("randomizer-button")
    .addEventListener("click", function (e) {
        const ui = new UI();
        ui.pickFood();

        e.preventDefault();
    })