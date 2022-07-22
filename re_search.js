let data = JSON.parse(localStorage.getItem("re_search"))
console.log(data)

let give = (data)=>{
    console.log(data)
    if(data.length===0){
        document.getElementById("info").textContent="NO RESULT!"
    }
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
        hr.textContent="_________________"
        let hr2= document.createElement("h2")
        hr2.textContent="_________________"
        maildiv.append(hr,mail,hr2)

        let read=document.createElement("p")
        read.textContent="Read More" 
        read.setAttribute("id","read")   

        div.append(date,img,h1,p,read,maildiv)
        div.addEventListener("click", ()=>{
            localStorage.setItem("display_info",JSON.stringify(el))
            location.href="./display_info.html"
        })
        document.getElementById("info").append(div)
    });
}


give(data)

let relatedData = async ()=>{
    let res = await fetch("https://qzoz-fruits-dummy-api.herokuapp.com/api/article/")
    let data = await res.json()
  
    related(data)
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

relatedData()



// *****************************************************************search

document.getElementById("re_search_btn").addEventListener("click",()=>{

    let re_search = async ()=>{
        let res = await fetch("https://qzoz-fruits-dummy-api.herokuapp.com/api/article/")
        let data = await res.json()
      
        search(data)
        }
        re_search();
        let x=document.getElementById("re_search").value.toUpperCase()
        let search= (data)=>{
            let arr=[]
             data.forEach(el => {
                let q=el.title.toUpperCase()
                let q2=el.description.toUpperCase()
                if(q.indexOf(x)!==-1){
                    arr.push(el)
                }
                else if(q2.indexOf(x)!==-1){
                    arr.push(el)
                }
               
            });
            console.log(arr)
            localStorage.setItem("re_search",JSON.stringify(arr))
            location.reload()
            }   
         
})