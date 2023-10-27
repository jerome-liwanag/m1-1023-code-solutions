const orderHistory = [
  {
    items: ['JavaScript for impatient programmers'],
    price: [31.55],
    deliveryDate: ['August 8, 2020'],
    orderDate: ['August 4, 2020'],
  },
  {
    items: ['The Timeless Way of Building'],
    price: [41.33],
    deliveryDate: ['July 20, 2020'],
    orderDate: ['July 19, 2020'],
  },
  {
    items: ['Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for Wii U, PC, Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter'],
    price: [15.98],
    deliveryDate: ['July 7, 2020'],
    orderDate: ['July 4, 2020'],
  },
  {
    items: ['GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)', 'The Art of Sql'],
    price: [94.95, 33.99],
    deliveryDate: ['July 5, 2020', 'July 5, 2020'],
    orderDate: ['July 3, 2020', 'July 3, 2020']
  }
];

console.log('price of first order in orderHistory:', orderHistory[0].price[0]); // expected: 31.55
console.log('delivery date of third order in orderHistory:', orderHistory[2].deliveryDate[0]); // expected: 'July 7, 2020'
console.log('second item from fourth order in orderHistory:', orderHistory[3].items[1]); // expected: 'The Art of Sql'
console.log('price of first item from fourth order in orderHistory:', orderHistory[3].price[0]); // expected: 94.95
