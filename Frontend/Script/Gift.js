import { getData,append } from "../Componant/Fetch.js";

let importData = async () => {
    let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
    let countDiv = document.querySelector("#count")
    let container = document.querySelector("#container");
    let count = 0;
    let url = "https://mysterious-meadow-78650.herokuapp.com/api/Gift";

    // let data = await getData(url);
    let data= [{
        "id": 46,
        "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Adorenew-sw_1080x1080.jpg?v=1668505739&",
        "name": "Fruit box by kimaye",
        "price": 2230,
        "weigth": "",
        "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
        "origin": "India",
        "promise": "KIMAYE PROMISE",
        "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
      },
      {
        "id": 47,
        "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Strengthnew-sw_1080x1080.jpg?v=1668506055&",
        "name": "Fruit box by kimaye",
        "price": 1850,
        "weigth": "",
        "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
        "origin": "India",
        "promise": "KIMAYE PROMISE",
        "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
      },
      {
        "id": 1470,
        "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Cherishnew-sw_1080x1080.jpg?v=1668505917&",
        "name": "Fruit box by kimaye",
        "price": 2230,
        "weigth": "",
        "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
        "origin": "India",
        "promise": "KIMAYE PROMISE",
        "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
      }]
    console.log(data);
    append(data,container,count,countDiv,cartArr);
}

importData();