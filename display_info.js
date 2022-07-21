// console.log(data)
let info = async ()=>{
    let res = await fetch("https://qzoz-fruits-dummy-api.herokuapp.com/api/article/")
    let data = await res.json()
  
    related(data)
    }

    info()


let related = (data)=>{
    for(let i=0; i<4; i++){
        console.log(data)
        let div = document.createElement("div")
         div.setAttribute("class","related")

        let imgdiv = document.createElement("div")
        let img = document.createElement("img")
        img.src = data[i].url;
        let p = document.createElement("p")
        p.textContent = data[i].title;
        
        let date= document.createElement("p")
        date.style="backgroundColor:grey"
        date.setAttribute("class","bekar")
        date.textContent = `${data[i].date_day} / ${data[i].date_month}` ;
       
        

        imgdiv.append(img,date)

        div.append(imgdiv,p)
        div.addEventListener("click", ()=>{
            localStorage.setItem("display_info",JSON.stringify(data[i]))
            location.href="./display_info.html"
        })
        document.getElementById("search_related").append(div)
    };   
}


let display = ()=>{
    let obj = JSON.parse(localStorage.getItem("display_info"))

    let div = document.createElement("div")
         div.setAttribute("id","display_info")

         let h1 = document.createElement("h1")
         h1.textContent = obj.title;
         
         let p = document.createElement("p")
         p.innerHTML="By <span>Kimaye</span>"

         let img = document.createElement("img")
         img.src = obj.url;
         
         let p2 = document.createElement("p");
         p2.textContent=obj.description
         p2.setAttribute("id","displayP")

         let hr = document.createElement("hr")
       
         div.append(h1,p,img,p2,hr)
         


         document.getElementById("info").append(div)

                 }
        


display()