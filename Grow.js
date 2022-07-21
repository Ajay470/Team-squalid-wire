// console.log(data)
let info = async ()=>{
    let res = await fetch("https://qzoz-fruits-dummy-api.herokuapp.com/api/article/")
    let data = await res.json()
    append(data)
    related(data)
    }

    info()

let append = (data)=>{
    console.log(data)
    data.forEach(el => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.url;
        let h1 = document.createElement("h1")
        h1.textContent = el.title;
        let p = document.createElement("p")
        p.textContent = el.description
    
        let date= document.createElement("div")
        let day= document.createElement("h1")
        day.textContent = el.date_day
        let mon= document.createElement("h2")
        mon.textContent = el.date_month
    
        date.append(day,mon)
        
        let maildiv=document.createElement("div")
        let mail=document.createElement("img") 
        mail.setAttribute("class","mail")
        mail.src="https://pic.onlinewebfonts.com/svg/img_77652.png"
        mail.addEventListener("click",()=>{
            location.href="https://mail.google.com/mail/u/1/#inbox?compose=new"
        })
        let hr= document.createElement("h2")
        hr.textContent="___________________"
        let hr2= document.createElement("h2")
        hr2.textContent="___________________"
        maildiv.append(hr,mail,hr2)
        div.append(date,img,h1,p,maildiv)
        div.addEventListener("click", ()=>{
            localStorage.setItem("display_info",JSON.stringify(el))
            location.href="./display_info.html"
        })
        document.getElementById("info").append(div)
    });
}

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