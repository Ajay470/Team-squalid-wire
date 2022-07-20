let getData = async () => {
    let url = "http://127.0.0.1:3500/api/Fruit";
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    append(data);
}

getData();

let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];

let append = (data) => {
    
    let countDiv = document.querySelector("#count");
    let countdata = document.createElement("p");
    let count = 0;
    let container = document.querySelector("#container");
    
    data.forEach((elem) => {
        let name = document.createElement("a");
        name.innerText = elem.name;
        let image = document.createElement("img");
        image.src = elem.image;
        let price = document.createElement("h2");
        price.innerText = `₹${elem.price}`;
        let Add = document.createElement("button");
        Add.setAttribute("class","add")
        Add.addEventListener("click",() => {
            addToCart(elem);
        })
        let addP = document.createElement("p");
        addP.innerText = "CHOOSE YOUR PACK"
        let addImage = document.createElement("img");
        addImage.src = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04Ni4xOTU5NywxNC4zMzMzM2MtMi4zNTA2NywwIC00LjU1Mjc0LDEuMTU4NDIgLTUuODkyOTEsMy4wOTM0MmwtMzIuNTE1OTUsNDcuMDczMjRoLTMzLjQzOTc4Yy0yLjI0MzE3LDAgLTQuMzQ5MjcsMS4wNDI5NyAtNS43MTA5NCwyLjgyNzQ3Yy0xLjM0NzMzLDEuNzc3MzMgLTEuODA1NDQsNC4wODU2NyAtMS4yMTc3Nyw2LjI0Mjg0bDE4LjM1MDU5LDY2LjQwMzY1YzEuNzEyODMsNi4xOTIgNy4zOTQxLDEwLjUyNjA0IDEzLjgxNTQzLDEwLjUyNjA0aDQ2LjQxNTM2di0xNC4zMzMzM2gtNDYuNDE1MzZsLTE1LjgzMTA1LC01Ny4zMzMzM2g5Ni43MzZoMjcuNzU2ODRsLTEuOTczNjQsNy4xNjY2N2gxNC44NjUyNGwzLjQ0MzM2LC0xMi40Mjk2OWMwLjU4NzY3LC0yLjE1NzE3IDAuMTI5NTYsLTQuNDY1NSAtMS4yMTc3NywtNi4yNDI4NGMtMS4zNjE2NywtMS43ODQ1IC0zLjQ2Nzc3LC0yLjgyNzQ3IC01LjcxMDk0LC0yLjgyNzQ3aC0zMy4zODM3OWwtMzIuMTUyMDIsLTQ3LjA0NTI1Yy0xLjMzMywtMS45NDkzMyAtMy41MzUwNywtMy4xMTQyNSAtNS44OTI5MSwtMy4xMjE0MnpNODYuMTY3OTcsMzQuMTUzNjVsMjAuNzMwMTQsMzAuMzQ2MzVoLTQxLjY5ODI1ek0xMjksMTAwLjMzMzMzdjI4LjY2NjY3aC0yOC42NjY2N3YxNC4zMzMzM2gyOC42NjY2N3YyOC42NjY2N2gxNC4zMzMzM3YtMjguNjY2NjdoMjguNjY2Njd2LTE0LjMzMzMzaC0yOC42NjY2N3YtMjguNjY2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="

        Add.append(addImage,addP);

        let imgdiv = document.createElement("div");
        imgdiv.append(image,Add);
        imgdiv.setAttribute("class","imgdiv");

        let namediv = document.createElement("div");
        namediv.append(name,price);
        namediv.setAttribute("class","namediv");

        let div = document.createElement("div");
        div.append(imgdiv,namediv);
        div.setAttribute("class","fruits");

        container.append(div);

        count++

    })

    countdata.innerText = `Showing ${count} results`
    countDiv.append(countdata);
}

let addToCart = (elem) => {
    cartArr.push(elem);
    console.log(cartArr);
    localStorage.setItem("cartData",JSON.stringify(cartArr));
}