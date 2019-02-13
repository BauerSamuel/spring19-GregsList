import House from "../models/house.js";

//PRIVATE
//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
  houses: [
    new House({ price: 535000, size: 3400, description: 'Kind of crappy. Has a charming feel on the hillside. Old.', img: 'http://2.bp.blogspot.com/-lllYIzqzUDE/Te8NJEeSx5I/AAAAAAAAAPY/NfkC8Ts4anY/s1600/crappy%20house.jpg' }),
    new House({ price: 401000, size: 2200, description: 'Needs a bit of work in the basement. Air is dry so no mold problems. Fancy enough. Also has a sweet side-porch.', img: 'https://s3-prod.crainsdetroit.com/s3fs-public/west%20village%20house%20to%20be%20moved_i.jpg' }),
    new House({ price: 679000, size: 4200, description: 'Luxurious and well designed. Nice granite throughout the house, and a secret 4th floor below the attic.', img: 'https://patch.com/img/cdn20/users/22872566/20171102/025001/styles/T800x600/public/processed_images/gwinnettwater3-1509648448-3701.jpg?width=720' })
  ]
}


//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
  houses: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class HouseService {
  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Houses() {
    return _state.houses
  }
  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.houses.push(newHouse)
    setState('houses', _state.houses)
  }
  deleteHouse(id) {
    for (let i = 0; i < _state.houses.length; i++) {
      let house = _state.houses[i];
      if (house.houseId == id) {
        _state.houses.splice(i, 1)
        break;
      }
    }
    setState('houses', _state.houses)
  }
}