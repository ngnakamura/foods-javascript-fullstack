class FoodService {
    constructor() {
        this.URI = "/api/foods";
    }

    async getFoods() {
        const response = await fetch(this.URI);
        const foods = response.json();
        return foods;
    }

    postFood() {

    }

    deleteFood() {

    }
}

module.exports = FoodService;