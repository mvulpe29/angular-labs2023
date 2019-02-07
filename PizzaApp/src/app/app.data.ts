import {IPizza} from "./app.model";

export let PIZZAS: Array<IPizza> = [
  {
    name: '4 STAGIONI',
    price: 27.5,
    weight: 550,
    image: 'assets/images/quattro.png',
    ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'DIAVOLA',
    price: 25,
    weight: 450,
    image: 'assets/images/pepperoni.png',
    ingredients: 'sos rosii, mozzarella, salam picant, oregano',
    canPurchase: false,
    soldOut: false
  }
];
