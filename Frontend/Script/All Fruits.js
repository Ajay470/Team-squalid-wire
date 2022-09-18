import { getData,append } from "../Componant/Fetch.js";

let importData = async () => {
    let displayArr = [];
    let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
    let countDiv = document.querySelector("#count")
    let container = document.querySelector("#container");
    let count = 0;
    let url = "https://mysterious-meadow-78650.herokuapp.com/api/Fruit";

    let data = await getData(url);
    console.log(data);
    append(data,container,count,countDiv,cartArr,displayArr);
}

importData();