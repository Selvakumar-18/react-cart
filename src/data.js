const list = [
  {
    id: 1,
    img: "data:image/jpeg;base64,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",
    name: 'Dosa',
    type: 'Veg',
    availabilty: ['BREAKFAST','LUNCH'],
    cuisine: 'SouthIndian',
    price: 50,
    amount:1
  },
  {
  id: 2,
  img: "data:image/jpeg;base64,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",
  name: 'Sappathi',
  type: 'Veg',
  availabilty:['BREAKFAST' ,'LUNCH'],
  cuisine: 'NorthIndian',
  price: 40,
  amount:1
},
{
  id: 3,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9Y87lt1GWYqK5DUNyeGByB3GQQStqT_0Iw&usqp=CAU",
  name: 'chicken',
  type: 'Non-Veg',
  availabilty: ['BREAKFAST','LUNCH','DINNER'],
  cuisine: 'SouthIndian',
  price: 100,
  amount:1
},
    
];

export default list;
