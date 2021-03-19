/* Clase para interactuar con el DOM */

import FoodService from "./services/FoodService";
const foodService = new FoodService();

class UI {
    
    async pickFood() {
        // Obtengo todas las comidas
        const foodArr = await foodService.getFoods();

        // Selecciono una sola comida random
        const food = foodArr[Math.floor(Math.random() * foodArr.length)];

        // HTML
        const foodContainer = document.getElementById("food-container");
        foodContainer.innerHTML = "";
        const div = document.createElement("div");
        div.className = "";
        div.innerHTML = `
            <div class="card m-1">
                <p id="food-text" class="card-text">${food.food_name}</p>
            </div>
        `
        foodContainer.append(div);
    }
}

export default UI;