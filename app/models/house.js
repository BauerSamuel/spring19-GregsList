let houseId = 1

export default class House {
  constructor(data) {
    this.houseId = houseId
    this.price = data.price
    this.img = data.img
    this.size = data.size
    this.description = data.description || 'No Description Provided'
    houseId++
  }

  getTemplate() {
    return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h6 class="card-title">${this.price}</h6>
                <p class="card-text">${this.size}sq. feet.  ${this.description}</p>
                <button onclick="app.controllers.houseController.deleteHouse(${this.houseId})">Remove</button>
            </div>
        </div>`
  }
}