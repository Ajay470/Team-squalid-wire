import { getData,append } from "../Componant/Fetch.js";

let importData = async () => {
    let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
    let countDiv = document.querySelector("#count")
    let container = document.querySelector("#container");
    let count = 0;
    let url = "https://mysterious-meadow-78650.herokuapp.com/api/Fresh";

    // let data = await getData(url);
    let data=[
        {
          "id": 43,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Pomegranate-Seeds-_Arils-Cup_125g-Kimaye-1668426192_1080x1080.png?v=1668426194&",
          "name": "Pomegranate Seeds (Arils Cup)125g",
          "price": 155,
          "weigth": "(Pack of 2)~ 0.5kg ; (Pack of 4)~ 0.9kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy   scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 44,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Coconut-Chunks-Cup-_100g_-kimaye-store-1668426210-sw_1080x1080.png?v=1668505424&",
          "name": "Coconut Chunks Cup (100g)",
          "price": 51,
          "weigth": "100g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 45,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Grated-Coconut-Punnet-kimaye-store-1668426228-sw_1080x1080.png?v=1669118605&",
          "name": "Grated Coconut Punnet",
          "price": 51,
          "weigth": "100g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 46,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min-sw_1080x1080.png?v=1669118878&",
          "name": "Kimaye Arils-Coco Cup (125g)",
          "price": 55,
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