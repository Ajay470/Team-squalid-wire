console.log(data)

data.forEach(el => {
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.url;
    let h1 = document.createElement("h1")
    h1.textContent = el.title;
    let p = document.createElement("p")
    p.textContent = el.discription

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
    let hr= document.createElement("h2")
    hr.textContent="______________"
    let hr2= document.createElement("h2")
    hr2.textContent="______________"
    maildiv.append(hr,mail,hr2)
    div.append(date,img,h1,p,maildiv)
    document.getElementById("info").append(div)
});