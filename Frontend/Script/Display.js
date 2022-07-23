let displayArr = JSON.parse(localStorage.getItem("displayData")) || [];

let x = (n) =>{
    return document.getElementById(n);
}

let y = (n) =>{
    return document.createElement(n);
}

let append = (data) => {
    let image1 = x("I1");
    let Name = x("title");
    let Wt = x("wt");
    let Rs = x("R");

    data.forEach((elem) => {
        let image = y("img");
        image.src = elem.image
        image1.append(image);

        let name = y("h1")
        name.innerText = elem.name;
        Name.append(name);

        let origin = y("p");
        origin = `Origin : ${elem.origin}`

        let wt = y("p");
        wt.innerText = `Weight : ${elem.weigth}`;

        let price = y("p");
        price.innerText = `₹${elem.price}`;
        price.setAttribute("id","rs")
        Wt.append(origin,wt,price);

        let price2 = y("p");
        price2.innerText = `₹${elem.price}`;

        Rs.append(price2);

    })
}

append(displayArr)

let getData = async () => {
    let url = "http://127.0.0.1:3500/api/Gift"; 
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    append2(data)
}

getData();

let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];

let append2 = (data) => {
    let get = x("get");

    data.forEach((elem) => {
        let image = y("img");
        image.src = elem.image;

        image.addEventListener("click",() => {
            display(elem);
        })

        let name = y("p");
        name.innerText = elem.name;
        let price = y("h2");
        price.innerText = `₹${elem.price}`;
        let button = y("button");
        button.innerText = "SELECT OPTION"

        button.addEventListener("click",() => {
            addToCart(elem);
        })

        let divimg = y("div");
        divimg.append(image);

        let div = y("div");
        div.append(divimg,name,price,button);

        get.append(div);
    })

    let display = (elem) => {
        displayArr = [];
        displayArr.push(elem);
        console.log(displayArr);
        localStorage.setItem("displayData",JSON.stringify(displayArr));
        window.location.href = "Display.html"
    }

    let addToCart = (elem) => {
        let flag = true;
        for(let i=0; i<cartArr.length; i++){
            if(elem.id == cartArr[i].id){
                flag = false;
            }
        }
        if(flag){
            cartArr.push(elem);
            console.log(cartArr);
            localStorage.setItem("cartData",JSON.stringify(cartArr));
            alert("Item added to cart")
        }else{
            alert("This item has already been added")
        }
        
    }
}

let count = x("count");
let num = 0;
count.innerText = num;

let min = () =>{
    if(num != 0){
        num--
        count.innerText = num;
    }
}

let plus = () =>{
    num++
    count.innerText = num;
}

let arr = JSON.parse(localStorage.getItem("displayData")) || [];

let Add = () => {
   
    console.log(arr[0])
    cartArr.push(arr[0]);
    localStorage.setItem("cartData",JSON.stringify(cartArr));
}
