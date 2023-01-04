

let data = JSON.parse(localStorage.getItem("cartData"));
console.log("found:",data)
let sum=0;
for(let i=0; i<data.length; i++){
    
  sum += ( data[i].quantity ) ? (+data[i].price)*(+data[i].quantity) : data[i].price ;  


    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    let remove = document.createElement("img")

    remove.addEventListener("click", ()=>{
        data.splice(i,1);
        localStorage.setItem("cartData",JSON.stringify(data))
        location.reload();
    })

    remove.src = "../img/remove.png"
    remove.style.width="20px"
    td1.setAttribute("id","remove")
    td1.append(remove)

    let td2 = document.createElement("td")
    let img = document.createElement("img")
    img.src=data[i].image
    img.style.width="100px"
    td2.append(img)
     

    let td3 = document.createElement("td")
    td3.textContent=data[i].name

    let td4 = document.createElement("td")
    td4.textContent=`₹${data[i].price}`
    
    let td5 = document.createElement("td")
    let input=document.createElement("input")
    input.value = 1
    input.style = "text-align : center"
    input.addEventListener("change",  (e)=>{
      console.log(e.target.value)
      data.forEach((e,k)=>{
        if(i===k){
          e.quantity = e.target.value
        }
        // return e
      })
        localStorage.setItem("cartData",JSON.stringify(data))
        location.reload();
    })

    input.type="number"
    td5.append(input)
    
    
    let td6 = document.createElement("td")
    td6.textContent=`₹${(data[i].price)}`
    
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("#cart_data>table>tbody").append(tr)

}

document.getElementById("sub_total").textContent=`₹${sum}`
document.getElementById("total").textContent=`₹${sum}`