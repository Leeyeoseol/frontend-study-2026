const products = [
  { id: 1, name: "노트", price: 3000 },
  { id: 2, name: "볼펜", price: 1500 },
  { id: 3, name: "가이드북", price: 12000 },
  { id: 4, name: "텀블러", price: 15000 },
  { id: 5, name: "지우개", price: 800 },
];

//이름만
const productsName = products.map((item) => item.name);
console.log(productsName);

//10000원 이하만
const priceProducts = products.filter((item) => item.price <= 10000);
console.log(priceProducts);

//이름으로 찾기
const searchName = "텀블러";
const foundProducts = products.find((item) => item.name === searchName);
console.log(foundProducts);

//10% 할인 새 배열
const disProducts = [];
for (let i = 0; i < products.length; i++) {
  const item = products[i];

  const newProducts = {
    id: item.id,
    name: item.name,
    price: item.price * 0.9,
  };
  disProducts.push(newProducts);
}
console.log(disProducts);

//for문없이 map만으로 하는법
// const disProducts = products.map((item) => ({
//   ...item,
//   price: item.price * 0.9,
// }));
