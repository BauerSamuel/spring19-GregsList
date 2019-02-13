let id = 1

export default class Car {
    constructor(data) {
        this.id = id
        this.price = data.price
        this.title = data.title
        this.img = data.img
        this.description = data.description || 'No Description Provided'
        id++
    }

    getTemplate() {
        return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h6 class="card-title">${this.title}</h56>
                <p class="card-text">${this.description} -- ${this.price}</p>
                <button onclick="app.controllers.carController.deleteCar(${this.id})">Remove</button>
            </div>
        </div>`
    }
}