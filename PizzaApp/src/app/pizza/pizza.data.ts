import {IPizza} from "./pizza.model";

export let PIZZAS: Array<IPizza> = [
  {
    name: '4 STAGIONI',
    price: 27.5,
    weight: 550,
    image: 'assets/images/quattro.png',
    ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare',
    canPurchase: true,
    soldOut: false,
    reviews: [{
      stars: 5,
      body: "I love this pizza!",
      author: "joe@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This pizza sucks.",
      author: "tim@example.org",
      createdOn: 1397490980837
    }]
  },
  {
    name: 'DIAVOLA',
    price: 25,
    weight: 450,
    image: 'assets/images/pepperoni.png',
    ingredients: 'sos rosii, mozzarella, salam picant, oregano',
    canPurchase: false,
    soldOut: false,
    reviews: [{
      stars: 3,
      body: "I think this pizza was just OK, could honestly be more spicy, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any pizza with chilly is for me!",
      author: "gemsRock@example.org",
      createdOn: 1397490980837
    }]
  }
];
