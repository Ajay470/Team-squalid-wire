import { getData,append } from "../Componant/Fetch.js";

let importData = async () => {
    let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
    let countDiv = document.querySelector("#count")
    let container = document.querySelector("#container");
    let count = 0;
    let url = "https://mysterious-meadow-78650.herokuapp.com/api/Combo";

    // let data = await getData(url);
    let data=[
        {
          "id": 48,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/BlueberryKiwiCombo_1080x1080.jpg?v=1662978491&",
          "name": "Mishri Cherry- Blueberry Combo",
          "price": 498,
          "weigth": "250g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 49,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/lettuce--capsi--zuchini_1080x1080.jpg?v=1667478746&",
          "name": "Kimaye Salad Combo",
          "price": 153,
          "weigth": " 250g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 50,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Plum_BB_360x.jpg?v=1621068661",
          "name": "Kimaye Plum-Blueberries Combo",
          "price": 438,
          "weigth": " 250g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 51,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo.progressive.jpg?v=1618497683",
          "name": "Kimaye Wholesome Combo",
          "price": 733,
          "weigth": "",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 52,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry_360x.png?v=1617983685",
          "name": "Kimaye Kiwi-Blueberries Combo",
          "price": 536,
          "weigth": "",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        }
      ]
      
    console.log(data);
    append(data,container,count,countDiv,cartArr);
}

importData();