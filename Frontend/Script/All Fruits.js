import { getData,append } from "../Componant/Fetch.js";

let importData = async () => {
    let displayArr = [];
    let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
    let countDiv = document.querySelector("#count")
    let container = document.querySelector("#container");
    let count = 0;
    let url = "https://mysterious-meadow-78650.herokuapp.com/api/Fruit";

    // let data = await getData(url);
    let data=[
        {
          "id": "1",
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Custard-Apple-A.progressive.jpg?v=1632485463",
          "name": "Kimaye Custard Apple (Pack of 500 gm & 1 kg)",
          "price": 135,
          "weigth": "Pack of 500 gm and 1 kg",
          "description": "Custard apples are juicy, creamy, sweet, and fragrant with a tropical aroma and hints of vanilla. They are medium to large in size and oblate or heart-shaped. The skin is thin, tough, and knobbly with dark green flesh when young, and lightens to a pea-green when ripe. The cream-colored flesh is soft and custard-like and encased in flesh, are up to twelve hard, brown or black inedible seeds.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Custard Apple straight from the farms of Maharashtra,India. Each Custard Apple is naturally ripened ."
        },
        {
          "id": 2,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/dragon-fruit--white-cover-sw_1080x1080.jpg?v=1669119503&",
          "name": "Kimaye Dragon Fruit (Red) (1 pc)",
          "price": 135,
          "weigth": " 1 pc ≈ 0.42 kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": " South Africa, New Zealand",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 3,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Kimaye-Blueberries-_125g_-kimaye-store-1668426326-sw_1080x1080.png?v=1669119107&",
          "name": "Kimaye Blueberries (250 gm)",
          "price": 182,
          "weigth": "250g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Maharashtra, India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 4,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Langra--cover_540x.jpg?v=1624445187",
          "name": "Kimaye Langra Mangoes (Pack of 1,2 and 4 kg)",
          "price": 195,
          "weigth": "1kg, 2kg & 4kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": " India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 5,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Picture3_3cf8f5aa-4155-4a94-9768-9819bb41835f_1080x1080.jpg?v=1641381097&",
          "name": "Kimaye Indian Plum (250 g)",
          "price": 81,
          "weigth": " 250g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 6,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/cherry-CHILEAN-sw_1080x1080.jpg?v=1669119365&",
          "name": "Kimaye Cherries (Mishri) (250g)",
          "price": 145,
          "weigth": "250g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 7,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/bd07b8e7-3643-4a98-996e-c85fd7d133a8_1080x1080.png?v=1614765886&",
          "name": "Kimaye Red globe (Pack of 250g & 500g)",
          "price": 48,
          "weigth": "250g & 500g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 8,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Apple-ber-cover-sw_1080x1080.jpg?v=1669118799&",
          "name": "Kimaye Apple ber (125g)",
          "price": 439,
          "weigth": "125g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "USA, Chile, Europe",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 9,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Avocado-sw_1080x1080.jpg?v=1669118894&",
          "name": "Kimaye Avocado (Imported) (1 pc )",
          "price": 199,
          "weigth": "1 pc~ 250g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Peru",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 10,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Muskmelon-cover_1080x1080.jpg?v=1633763200&",
          "name": "Kimaye Muskmelon (1 pc)",
          "price": 85,
          "weigth": "1 pc~ (1kg)",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Middle East",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 11,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry.progressive.jpg?v=1654851019",
          "name": "Mishri Cherry- Blueberry Combo",
          "price": 498,
          "weigth": "",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 12,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/donut-peach-cover_283a2dee-ca84-496b-b3da-930c2fc61e72_540x.jpg?v=1647001648",
          "name": "Kimaye Peach (250g )",
          "price": 89,
          "weigth": "250g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 13,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Muskmelon-cover_540x.jpg?v=1633763200",
          "name": "Kimaye Muskmelon (1 pc)",
          "price": 69,
          "weigth": "1 pc~ (.7kg-1kg)",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Maharashtra, India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 14,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/golden-kiwi-cover-sw_1080x1080.jpg?v=1669119635&",
          "name": "Kimaye Golden Kiwi (Pack of 1kg, 2kg & 4kg)",
          "price": 225,
          "weigth": "1kg, 2kg & 4kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 16,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Papaya-cover.progressive.jpg?v=1638875170",
          "name": "Kimaye Papaya (1 pc )",
          "price": 59,
          "weigth": " 1 pc ≈ 0.9kg ~ 1.2kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Kimaye Papaya (1 pc )",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 15,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover_19473cce-96ae-4149-aaa1-508f17ac6c28.progressive.jpg?v=1648186636",
          "name": "Kimaye Watermelon (1 pc)",
          "price": 65,
          "weigth": "1 pc~ (2 kg)",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Maharashtra, India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 17,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/cover-sw_1080x1080.jpg?v=1669119768&",
          "name": "Kimaye Green Apples (Pack of 3 pc & 6 pc)",
          "price": 189,
          "weigth": "500g",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "USA, New Zealand",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 18,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Mini-Oranges-cover_bbce1a6a-4ab6-4a62-8928-3a956ed7b8cf.progressive.jpg?v=1649913612",
          "name": "Kimaye Mini Oranges (4-6 pcs) -",
          "price": 125,
          "weigth": " 6pcs ≈ 0.38 -0.42 kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "South Africa",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 19,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/a0cfceb5-76a4-4994-9d37-978c6dc3b309-sw_1080x1080.png?v=1669119828&",
          "name": "Kimaye Imported Oranges (Pack of 3 & 6)",
          "price": 150,
          "weigth": "(Pack of 3)~ 0.6kg | (Pack of 6)~ 1.2kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Egypt",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 20,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/royal-gala-apple-cover_360x.jpg?v=1643012816",
          "name": "Kimaye Royal Gala Apples (Pack of 3 & 6)",
          "price": 168,
          "weigth": "Pack of 6~(0.960-1.05kg) ",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Turkey, USA, New Zealand",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 21,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/cover_19473cce-96ae-4149-aaa1-508f17ac6c28_1080x1080.jpg?v=1648186636&",
          "name": "Kimaye Watermelon (Pack of 2 & 4 pcs)",
          "price": 148,
          "weigth": "(Pack of 2)~ 0.5kg | (Pack of 4)~ 1.0kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": " South Africa, Spain, China",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 22,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/pear-imported_1080x1080.jpg?v=1662621294&",
          "name": "Kimaye Pear (1 pc)",
          "price": "93-135",
          "weigth": "1 pc ≈ 0.40 ~0.45 kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Thailand",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 23,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover-sun-melon_360x.jpg?v=1620314805",
          "name": "Kimaye Sun Melon (1 pc)",
          "price": 72,
          "weigth": "1 pc~ 0.7kg~1kg",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "Maharashtra, India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 24,
          "image": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/washington-applecover_540x.jpg?v=1641449752",
          "name": "Kimaye Washington Apples (Pack of 2 pc & 4 pc)",
          "price": 148,
          "weigth": "Pack of 3~(0.3-0.4kg); Pack of 6~(0.7-0.8kg) ",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "USA, New Zealand",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        },
        {
          "id": 25,
          "image": "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Kimaye-Pomegranates-_Pack-of-2-_-4_-kimaye-store-1668426097_1080x1080.png?v=1668426099&",
          "name": "Kimaye Pomegranates (Pack of 2 & 4)",
          "price": "160-309",
          "weigth": "",
          "description": "Red Dragon Fruit is a sweet fruit with pink to magenta-colored skin . It has appearance of succulent, fleshy scales overlapping and green-tipped protrusions along its length. The bright magenta flesh of the Red Dragon fruit is the result of a compound called betacyanin, which is the same pigment present in beets and prickly pear fruit. The pulp has the texture of a kiwi fruit, with small, black edible seeds throughout.",
          "origin": "India",
          "promise": "KIMAYE PROMISE",
          "PromiseDescription": "Bringing you Kimaye Dragon Fruit straight from the farms of Maharashtra, India. Each Dragon Fruit is traceable to it's farmer and source."
        }
      ]
      
    console.log(data);
    append(data,container,count,countDiv,cartArr,displayArr);
}

importData();