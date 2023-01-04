// console.log(data)
let info = async ()=>{
    let res = await fetch("https://qzoz-fruits-dummy-api.herokuapp.com/api/article/")
    // let data = await res.json()
    let data=[
        {
          "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/98916dd850c0166e7b612a3fef874d73_70x_crop_center.progressive.jpg?v=1668505320",
          "title": "Top Fruit Safety Tips You Should Be Swearing By Every Time You Consume Them .",
          "description": "Fresh fruits bring with them a horde of health benefits, but it’s the way we consume them that is more important. While fruits have the ability to prevent many diseases such as cancer, heart stroke,...  ",
          "date_month": "Jul",
          "date_day": "24",
          "_id": "QJD4pWdu-Ebp_XZUEYT_l"
        },
        {
          "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/87be715837ec8bac95cbccf2fdded302_70x_crop_center.progressive.jpg?v=1668505334",
          "title": "Fruits Rich In Vitamin C That You Should Be Eating Everyday",
          "description": "Remember the times when our mothers used to chase us every day with a bowl of fruits when we were kids. Well, she had pretty good reasons behind doing the same. Fruits, especially the ones...  ",
          "date_month": "Jul",
          "date_day": "19",
          "_id": "fNRvII0-svLBWLE6cJ_dJ"
        },
        {
          "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/1d9b40053476b8872378bf56b7cc2fb5_70x_crop_center.progressive.jpg?v=1668505354",
          "title": "How To Remove And Clean Harmful Pesticides From Fruits",
          "description": "Remember the times when our mothers used to chase us every day with a bowl of fruits when we were kids. Well, she had pretty good reasons behind doing the same. Fruits, especially the ones...  ",
          "date_month": "Jul",
          "date_day": "07",
          "_id": "8osHUsPbQ3AtjdDJc9Hea"
        },
        {
          "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/d75717b14b38228508e43ea8d3f32e3b_70x_crop_center.progressive.jpg?v=1668505456",
          "title": "Why Should You Eat Fruits More Often?",
          "description": "Summers have arrived and so have the days where we can soak ourselves in the pleasure of treating ourselves to delicious fruits like mangoes, water melons, grapes and so on. After all, aside of helping...  <",
          "date_month": "Jul",
          "date_day": "01",
          "_id": "_ICRlr54GRmp1gUNDl5OL"
        },
        {
          "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/9a3099532f1f98635fb7bb8855341eec_70x_crop_center.png?v=1668505474",
          "title": "Grapes of India",
          "description": "David Thoreau once stated, “Live in each season as it passes: breathe the air, drink the drink, taste the seasonal fruit.” Rings true as, the more we tend to treat our cravings with junk and..",
          "date_month": "Feb",
          "date_day": "12",
          "_id": "2GCG2JUhD1Fa3twy3SWXQ"
        },
        {
          "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/immune_system_1728x-min_1000x1000.jpg?v=1614342193",
          "title": "Make Immunity your Best Friend",
          "description": "Grapes are one of the most diverse and devoured fruits in India. Known for its sweet flavours and nutrients, grapes are hard to ignore. They come in various types and are carefully nurtured into fresh...  <",
          "date_month": "Nov",
          "date_day": "10",
          "_id": "V2u4uJBxy4P_PGslZ8IXR"
        },
        {
          "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-min_1000x1000.jpg?v=1614342435",
          "title": "Nourish yourself with these 'fruitful' nutrients",
          "description": "Immunity in the New Normal The pandemic’s biggest mystery is our immune system. But, do we really understand how it functions? In simple terms, it’s your body’s armour against illnesses. The immune system als",
          "date_month": "Oct",
          "date_day": "05",
          "_id": "rhX6mccmm5fYalt8TNA93"
        },
        {
          "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/healthy_heart-min_1000x1000.jpg?v=1614342271",
          "title": "Healthy at Heart",
          "description": "October 5, 2020 (IANSlife) “Yatha Annam Tatha Mannam,” Prime Minister Narendra Modi recalled the maxim during his ‘Mann ki Baat session’ a few days back, which signifies that’ mental and intellectual development is directly related t",
          "date_month": "Sep",
          "date_day": "28",
          "_id": "SkXzCzxT2qeJcU-F1MKGB"
        },
        {
          "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/craving_blog-min_1000x1000.jpg?v=1614342502",
          "title": "Craving for Something Delicious During the Lockdown? We Got You!",
          "description": "September 28, 2020 (IANSlife) This World Heart Day, let’s have a light-hearted conversation about the importance of having a healthy heart and how one should take care of it.  Being aware of cardiovascula",
          "date_month": "Aug",
          "date_day": "14",
          "_id": "yuucCv5ErX64Bea1mGh6r"
        },
        {
          "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-1-min_1000x1000.jpg?v=1614342545",
          "title": "A fruitful monsoon diet",
          "description": "We know that you’ve been spending your time working from home and being committed to your fitness goals. But, what about those cravings that sneak up on you once in a while? Well, we are...       ",
          "date_month": "Aug",
          "date_day": "03",
          "_id": "NPLxDWbfojhHBIciyiJcY"
        },
        {
          "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/consume_fruits-min_1000x1000.jpg?v=1614598062",
          "title": "Do fruits have a time table",
          "description": "August 3, 2020 (IANSlife) Monsoon demands some extra effort to stay fit and healthy. Since our immunity takes a dip during monsoons, making us susceptible to all kinds of infections. Especially amidst the Coronaviru",
          "date_month": "Jun",
          "date_day": "08",
          "_id": "NeU_n3b2Tin2p8Su39luw"
        },
        {
          "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/working_out_at_home-min_1000x1000.jpg?v=1614598096",
          "title": "Meet your health goals during the lockdown",
          "description": "The right time to consume fruits Fruits are known to be an essential source of vitamins and minerals, and an excellent way to improve your overall health. Not just that, if you keep on consumin",
          "date_month": "May",
          "date_day": "17",
          "_id": "eLrSYmkM155LSYTBl5g_E"
        },
        {
          "url": "http://tropicalfruitandveg.com/images/kesartree.jpg",
          "title": "Dried mango flowers, containing 15% tannin, serve as astringents in cases of diarrhea, chronic dysentery, catarrh of the bladder and chronic urethritis resulting from gonorrhea. The bark contains mangiferine and is astringent and employed against rheumatism and diphtheria.",
          "description": "The mango tree is erect with a broad, rounded canopy which can attain 30-40 cm width and 20 m height. In deep soil, the taproot descends to a depth of 6 m, the profuse, wide-spreading, feeder root system also sends down many anchor roots which penetrate for several feet. The tree is long-lived, some specimens being known to be 300 years old and still fruiting. Nearly evergreen, alternate leaves are borne mainly in rosettes at the tips of the branches and numerous twigs from which they droop like ribbons on slender petioles. The new leaves are yellow, pink or wine-red, becoming dark-green and glossy above, lighter beneath. Each tree can produce hundreds and even as many as 3,000 to 4,000 small, yellowish or reddish flowers. There is great variation in the form, size, colour and quality of the fruits. They may be nearly round, oval or kidney-shaped. They range from 6 - 25 cm in length and can weigh from less than 200 g to 2 kg. The skin is leathery, waxy, smooth, thick and aromatic and the colour ranges from light-or dark-green to yellow, orange, reddish-pink to dark-red or purple. Some have a 'turpentine' odour and flavour, while others are richly and pleasantly fragrant. The flesh ranges from pale-yellow to deep-orange. Of the many hundreds of varieties of mangoes that grow in warm climates worldwide, the most popular in the UK are the Alphonso, Kesar and Sugar - all imported from the Asian sub-continent. Other popular varieties in the UK include Tommy Atkins, Keitt, Haden and Julie which are sold by supermarkets and generally look good but are tasteless as they have been picked too early.",
          "date_month": "May",
          "date_day": "17",
          "_id": "uGYbQvrlHDZ5Ac2UvPyeh"
        },
        {
          "url": "http://tropicalfruitandveg.com/images/pineapple1.jpg",
          "title": "Pineapple juice is taken as a diuretic and to expedite labor, also as a gargle in cases of sore throat and as an antidote for seasickness. The flesh of very young (toxic) fruits is deliberately ingested to achieve abortion (a little with honey on 3 successive mornings); also to expel intestinal worms; and as a drastic treatment for venereal diseases. In Africa the dried, powdered root is a remedy for edema. The crushed rind is applied on fractures and the rind decoction with rosemary is applied on hemorrhoids.",
          "description": "The pineapple plant is a terrestrial herb 0.75-1.5 m high with a spread of 1-1.2 m a very short, stout stem and a rosette of waxy, long-pointed leaves; usually needle tipped and generally bearing sharp, upcurved spines on the margins. The leaves may be all green or variously striped with red, yellow or ivory down the middle or near the margins. At blooming time, the stem elongates and enlarges near the apex and puts forth a head of small purple or red flowers, each accompanied by a single red, yellowish or green bract. The stem continues to grow and acquires at its apex a compact tuft of stiff, short leaves called the 'crown' or 'top'. Occasionally a plant may bear 2 or 3 heads, or as many as 12 fused together, instead of the normal one.As individual fruits develop from the flowers they join together forming a cone shaped, compound, juicy, fleshy fruit to 30 cm in height, with the stem serving as the fibrous but fairly succulent core. The tough, waxy rind, made up of hexagonal units, may be dark-green, yellow, orange-yellow or reddish when the fruit is ripe. The flesh ranges from nearly white to yellow. If the flowers are pollinated, small, hard seeds may be present, but generally one finds only traces of undeveloped seeds.",
          "date_month": "May",
          "date_day": "17",
          "_id": "Yj_pTmh3y5dcfZHJZ4WtQ"
        },
        {
          "url": "http://tropicalfruitandveg.com/images/borasmall2.jpg",
          "title": "The flesh of the berry is high in vitamin c plus minerals such as calcium, copper, iron, phosphorous, magnesium and zinc.In China the seeds are used to make medicine to cure ailments including insomnia, irritability and palpitations.It is also used to aid heart and liver functions.",
          "description": "The red bora berry is a draught tolerant bush that grow to 1 metre height. The leaves are very small, ovoid and about 1 cm long. The bush is very spiny with very sharp thorns growing all over the plant. The berries are very small, up to 1 cm diameter, first pale yellow and then turn red when ripe. The flesh is only 1 to 2 mm thick, brown and fragrant. The seed is a round and the size of a small pea.",
          "date_month": "May",
          "date_day": "17",
          "_id": "kYhkad0kwLxHXJhYhaFwC"
        },
        {
          "url": "http://tropicalfruitandveg.com/images/guava2.jpg",
          "title": "Guavas are evergreen trees",
          "description": "Guavas are evergreen trees that grow to over 25 ft with spreading branches although unlikely to grow to over 10 feet in the UK climate. The bark is smooth, mottled green or reddish brown and peels off in thin flakes to reveal the attractive 'bony' aspect of its trunk. The plant branches close to the ground and often produces suckers from roots near the base of the trunk.",
          "date_month": "May",
          "date_day": "17",
          "_id": "PJbuijHSCCEXM0kg8w0Yk"
        },
        {
          "url": "http://tropicalfruitandveg.com/images/dragon.jpg",
          "title": "The dragon fruit is a vining terrestrial cactus with fleshy stems",
          "description": "The dragon fruit is a vining terrestrial cactus with fleshy stems reaching from a few inches up to 20ft long (in mature plants). The plant may grow over the ground or climb onto trees using aerial roots. Its heavy, 3-sided, green, fleshy, much-branched stems with flat, wavy wings having horny margins, may reach 6 m in length. The night-blooming, very fragrant, bell-shaped, white flowers, up to 35 cm long and 22 cm wide, have a thick tube bearing several linear green scales. The non-spiny fruit is oval up to 10 cm long, 6 cm thick, coated with the bright-red, fleshy or yellow, ovate bases of scales. Within is white, juicy, sweet pulp containing innumerable tiny black, partly hollow seeds.",
          "date_month": "May",
          "date_day": "17",
          "_id": "xi6iaZtbvEBf6xHj0pxTj"
        },
        {
          "url": "http://tropicalfruitandveg.com/images/pomegranate.jpg",
          "title": "In several human clinical trials, the juice of the pomegranate has been found effective in reducing several heart risk factors, including LDL oxidation, macrophage oxidative status, and foam cell formation, all of which are steps in atherosclerosis and heart disease. Pomegranate has been shown to reduce systolic blood pressure by inhibiting serum angiotension converting enzyme.Pomegranate juice has also been shown to be effective against certain cancers such as prostate cancer.",
          "description": "The pomegranate is a shrub or small tree that can grow to 5m in warm climates. The pomegranate has glossy, thin leathery leaves that are narrow and lance-shaped. The fruit is between 7 and 10 cm in diameter with tough leathery outer skin 2 to 4 mm think. Each fruit contain hundreds of tightly packed kernels 4 � 5 mm wide and 6 to 8 mm long that are translucent when unripe that turn red when ripe and brown when overripe. Each kernel contain a small white seed at the centre.",
          "date_month": "May",
          "date_day": "17",
          "_id": "JiS27_gTHJzEUKlAqiwha"
        },
        {
          "url": "http://tropicalfruitandveg.com/images/pomegranate.jpg",
          "title": "In several human clinical trials, the juice of the pomegranate has been found effective in reducing several heart risk factors, including LDL oxidation, macrophage oxidative status, and foam cell formation, all of which are steps in atherosclerosis and heart disease. Pomegranate has been shown to reduce systolic blood pressure by inhibiting serum angiotension converting enzyme.Pomegranate juice has also been shown to be effective against certain cancers such as prostate cancer.",
          "description": "The pomegranate is a shrub or small tree that can grow to 5m in warm climates. The pomegranate has glossy, thin leathery leaves that are narrow and lance-shaped. The fruit is between 7 and 10 cm in diameter with tough leathery outer skin 2 to 4 mm think. Each fruit contain hundreds of tightly packed kernels 4 � 5 mm wide and 6 to 8 mm long that are translucent when unripe that turn red when ripe and brown when overripe. Each kernel contain a small white seed at the centre.",
          "date_month": "May",
          "date_day": "17",
          "_id": "Kta0tkoc-or44w_JhAEOi"
        },
        {
          "url": "http://tropicalfruitandveg.com/images/bananauk2.jpg",
          "title": "All parts of the banana plant have medicinal applications: the flowers in bronchitis and dysentery and on ulcers; cooked flowers are given to diabetics; the astringent plant sap in cases of hysteria, epilepsy, leprosy, fevers, hemorrhages, acute dysentery and diarrhea, and it is applied on hemorrhoids, insect and other stings and bites; young leaves are placed as poultices on burns and other skin afflictions; the astringent ashes of the unripe peel and of the leaves are taken in dysentery and diarrhea and used for treating malignant ulcers; the roots are administered in digestive disorders, dysentery and other ailments; banana seed mucilage is given in cases of catarrh and diarrhea in India.",
          "description": "The banana plant, often erroneously referred to as a 'tree', is a large herb, with succulent, very juicy stem which is a cylinder of leaf-petiole sheaths, reaching a height of 6-7.5 m and arising from a fleshy rhizome or corm. Suckers spring up around the main plant forming a clump or 'stool'', the eldest sucker replacing the main plant when it fruits and dies, this process of succession continues indefinitely. As the young fruits develop from the female flowers, they look like slender green fingers. The bracts are soon shed and the fully grown fruits in each cluster become a 'hand' of bananas, and the stalk droops with the weight until the bunch is upside down. The fruit (technically a 'berry') turns from deep-green to yellow or red and may range from 6-30 cm in length and 2-5 cm in width, and from oblong, cylindrical and blunt to pronouncedly 3-angled, somewhat curved and hornlike. The flesh, ivory-white to yellow may be firm, astringent, even gummy with latex, when unripe, turning tender, slippery and soft when ripe.",
          "date_month": "May",
          "date_day": "17",
          "_id": "PJvsubfswFoKi4xMgDZDp"
        }
      ]
    append(data)
    related(data)
    }

    info()

let append = (data)=>{
    console.log(data)
    document.getElementById("info").innerHTML=""
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



// *****************************************************************search

document.getElementById("re_search_btn").addEventListener("click",()=>{

    let re_search = async ()=>{
        let res = await fetch("https://qzoz-fruits-dummy-api.herokuapp.com/api/article/")
        // let data = await res.json()
        let data =[
            {
              "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/98916dd850c0166e7b612a3fef874d73_70x_crop_center.progressive.jpg?v=1668505320",
              "title": "Top Fruit Safety Tips You Should Be Swearing By Every Time You Consume Them .",
              "description": "Fresh fruits bring with them a horde of health benefits, but it’s the way we consume them that is more important. While fruits have the ability to prevent many diseases such as cancer, heart stroke,...  ",
              "date_month": "Jul",
              "date_day": "24",
              "_id": "QJD4pWdu-Ebp_XZUEYT_l"
            },
            {
              "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/87be715837ec8bac95cbccf2fdded302_70x_crop_center.progressive.jpg?v=1668505334",
              "title": "Fruits Rich In Vitamin C That You Should Be Eating Everyday",
              "description": "Remember the times when our mothers used to chase us every day with a bowl of fruits when we were kids. Well, she had pretty good reasons behind doing the same. Fruits, especially the ones...  ",
              "date_month": "Jul",
              "date_day": "19",
              "_id": "fNRvII0-svLBWLE6cJ_dJ"
            },
            {
              "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/1d9b40053476b8872378bf56b7cc2fb5_70x_crop_center.progressive.jpg?v=1668505354",
              "title": "How To Remove And Clean Harmful Pesticides From Fruits",
              "description": "Remember the times when our mothers used to chase us every day with a bowl of fruits when we were kids. Well, she had pretty good reasons behind doing the same. Fruits, especially the ones...  ",
              "date_month": "Jul",
              "date_day": "07",
              "_id": "8osHUsPbQ3AtjdDJc9Hea"
            },
            {
              "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/d75717b14b38228508e43ea8d3f32e3b_70x_crop_center.progressive.jpg?v=1668505456",
              "title": "Why Should You Eat Fruits More Often?",
              "description": "Summers have arrived and so have the days where we can soak ourselves in the pleasure of treating ourselves to delicious fruits like mangoes, water melons, grapes and so on. After all, aside of helping...  <",
              "date_month": "Jul",
              "date_day": "01",
              "_id": "_ICRlr54GRmp1gUNDl5OL"
            },
            {
              "url": "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/9a3099532f1f98635fb7bb8855341eec_70x_crop_center.png?v=1668505474",
              "title": "Grapes of India",
              "description": "David Thoreau once stated, “Live in each season as it passes: breathe the air, drink the drink, taste the seasonal fruit.” Rings true as, the more we tend to treat our cravings with junk and..",
              "date_month": "Feb",
              "date_day": "12",
              "_id": "2GCG2JUhD1Fa3twy3SWXQ"
            },
            {
              "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/immune_system_1728x-min_1000x1000.jpg?v=1614342193",
              "title": "Make Immunity your Best Friend",
              "description": "Grapes are one of the most diverse and devoured fruits in India. Known for its sweet flavours and nutrients, grapes are hard to ignore. They come in various types and are carefully nurtured into fresh...  <",
              "date_month": "Nov",
              "date_day": "10",
              "_id": "V2u4uJBxy4P_PGslZ8IXR"
            },
            {
              "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-min_1000x1000.jpg?v=1614342435",
              "title": "Nourish yourself with these 'fruitful' nutrients",
              "description": "Immunity in the New Normal The pandemic’s biggest mystery is our immune system. But, do we really understand how it functions? In simple terms, it’s your body’s armour against illnesses. The immune system als",
              "date_month": "Oct",
              "date_day": "05",
              "_id": "rhX6mccmm5fYalt8TNA93"
            },
            {
              "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/healthy_heart-min_1000x1000.jpg?v=1614342271",
              "title": "Healthy at Heart",
              "description": "October 5, 2020 (IANSlife) “Yatha Annam Tatha Mannam,” Prime Minister Narendra Modi recalled the maxim during his ‘Mann ki Baat session’ a few days back, which signifies that’ mental and intellectual development is directly related t",
              "date_month": "Sep",
              "date_day": "28",
              "_id": "SkXzCzxT2qeJcU-F1MKGB"
            },
            {
              "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/craving_blog-min_1000x1000.jpg?v=1614342502",
              "title": "Craving for Something Delicious During the Lockdown? We Got You!",
              "description": "September 28, 2020 (IANSlife) This World Heart Day, let’s have a light-hearted conversation about the importance of having a healthy heart and how one should take care of it.  Being aware of cardiovascula",
              "date_month": "Aug",
              "date_day": "14",
              "_id": "yuucCv5ErX64Bea1mGh6r"
            },
            {
              "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-1-min_1000x1000.jpg?v=1614342545",
              "title": "A fruitful monsoon diet",
              "description": "We know that you’ve been spending your time working from home and being committed to your fitness goals. But, what about those cravings that sneak up on you once in a while? Well, we are...       ",
              "date_month": "Aug",
              "date_day": "03",
              "_id": "NPLxDWbfojhHBIciyiJcY"
            },
            {
              "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/consume_fruits-min_1000x1000.jpg?v=1614598062",
              "title": "Do fruits have a time table",
              "description": "August 3, 2020 (IANSlife) Monsoon demands some extra effort to stay fit and healthy. Since our immunity takes a dip during monsoons, making us susceptible to all kinds of infections. Especially amidst the Coronaviru",
              "date_month": "Jun",
              "date_day": "08",
              "_id": "NeU_n3b2Tin2p8Su39luw"
            },
            {
              "url": "http://cdn.shopify.com/s/files/1/0449/5225/6667/articles/working_out_at_home-min_1000x1000.jpg?v=1614598096",
              "title": "Meet your health goals during the lockdown",
              "description": "The right time to consume fruits Fruits are known to be an essential source of vitamins and minerals, and an excellent way to improve your overall health. Not just that, if you keep on consumin",
              "date_month": "May",
              "date_day": "17",
              "_id": "eLrSYmkM155LSYTBl5g_E"
            },
            {
              "url": "http://tropicalfruitandveg.com/images/kesartree.jpg",
              "title": "Dried mango flowers, containing 15% tannin, serve as astringents in cases of diarrhea, chronic dysentery, catarrh of the bladder and chronic urethritis resulting from gonorrhea. The bark contains mangiferine and is astringent and employed against rheumatism and diphtheria.",
              "description": "The mango tree is erect with a broad, rounded canopy which can attain 30-40 cm width and 20 m height. In deep soil, the taproot descends to a depth of 6 m, the profuse, wide-spreading, feeder root system also sends down many anchor roots which penetrate for several feet. The tree is long-lived, some specimens being known to be 300 years old and still fruiting. Nearly evergreen, alternate leaves are borne mainly in rosettes at the tips of the branches and numerous twigs from which they droop like ribbons on slender petioles. The new leaves are yellow, pink or wine-red, becoming dark-green and glossy above, lighter beneath. Each tree can produce hundreds and even as many as 3,000 to 4,000 small, yellowish or reddish flowers. There is great variation in the form, size, colour and quality of the fruits. They may be nearly round, oval or kidney-shaped. They range from 6 - 25 cm in length and can weigh from less than 200 g to 2 kg. The skin is leathery, waxy, smooth, thick and aromatic and the colour ranges from light-or dark-green to yellow, orange, reddish-pink to dark-red or purple. Some have a 'turpentine' odour and flavour, while others are richly and pleasantly fragrant. The flesh ranges from pale-yellow to deep-orange. Of the many hundreds of varieties of mangoes that grow in warm climates worldwide, the most popular in the UK are the Alphonso, Kesar and Sugar - all imported from the Asian sub-continent. Other popular varieties in the UK include Tommy Atkins, Keitt, Haden and Julie which are sold by supermarkets and generally look good but are tasteless as they have been picked too early.",
              "date_month": "May",
              "date_day": "17",
              "_id": "uGYbQvrlHDZ5Ac2UvPyeh"
            },
            {
              "url": "http://tropicalfruitandveg.com/images/pineapple1.jpg",
              "title": "Pineapple juice is taken as a diuretic and to expedite labor, also as a gargle in cases of sore throat and as an antidote for seasickness. The flesh of very young (toxic) fruits is deliberately ingested to achieve abortion (a little with honey on 3 successive mornings); also to expel intestinal worms; and as a drastic treatment for venereal diseases. In Africa the dried, powdered root is a remedy for edema. The crushed rind is applied on fractures and the rind decoction with rosemary is applied on hemorrhoids.",
              "description": "The pineapple plant is a terrestrial herb 0.75-1.5 m high with a spread of 1-1.2 m a very short, stout stem and a rosette of waxy, long-pointed leaves; usually needle tipped and generally bearing sharp, upcurved spines on the margins. The leaves may be all green or variously striped with red, yellow or ivory down the middle or near the margins. At blooming time, the stem elongates and enlarges near the apex and puts forth a head of small purple or red flowers, each accompanied by a single red, yellowish or green bract. The stem continues to grow and acquires at its apex a compact tuft of stiff, short leaves called the 'crown' or 'top'. Occasionally a plant may bear 2 or 3 heads, or as many as 12 fused together, instead of the normal one.As individual fruits develop from the flowers they join together forming a cone shaped, compound, juicy, fleshy fruit to 30 cm in height, with the stem serving as the fibrous but fairly succulent core. The tough, waxy rind, made up of hexagonal units, may be dark-green, yellow, orange-yellow or reddish when the fruit is ripe. The flesh ranges from nearly white to yellow. If the flowers are pollinated, small, hard seeds may be present, but generally one finds only traces of undeveloped seeds.",
              "date_month": "May",
              "date_day": "17",
              "_id": "Yj_pTmh3y5dcfZHJZ4WtQ"
            },
            {
              "url": "http://tropicalfruitandveg.com/images/borasmall2.jpg",
              "title": "The flesh of the berry is high in vitamin c plus minerals such as calcium, copper, iron, phosphorous, magnesium and zinc.In China the seeds are used to make medicine to cure ailments including insomnia, irritability and palpitations.It is also used to aid heart and liver functions.",
              "description": "The red bora berry is a draught tolerant bush that grow to 1 metre height. The leaves are very small, ovoid and about 1 cm long. The bush is very spiny with very sharp thorns growing all over the plant. The berries are very small, up to 1 cm diameter, first pale yellow and then turn red when ripe. The flesh is only 1 to 2 mm thick, brown and fragrant. The seed is a round and the size of a small pea.",
              "date_month": "May",
              "date_day": "17",
              "_id": "kYhkad0kwLxHXJhYhaFwC"
            },
            {
              "url": "http://tropicalfruitandveg.com/images/guava2.jpg",
              "title": "Guavas are evergreen trees",
              "description": "Guavas are evergreen trees that grow to over 25 ft with spreading branches although unlikely to grow to over 10 feet in the UK climate. The bark is smooth, mottled green or reddish brown and peels off in thin flakes to reveal the attractive 'bony' aspect of its trunk. The plant branches close to the ground and often produces suckers from roots near the base of the trunk.",
              "date_month": "May",
              "date_day": "17",
              "_id": "PJbuijHSCCEXM0kg8w0Yk"
            },
            {
              "url": "http://tropicalfruitandveg.com/images/dragon.jpg",
              "title": "The dragon fruit is a vining terrestrial cactus with fleshy stems",
              "description": "The dragon fruit is a vining terrestrial cactus with fleshy stems reaching from a few inches up to 20ft long (in mature plants). The plant may grow over the ground or climb onto trees using aerial roots. Its heavy, 3-sided, green, fleshy, much-branched stems with flat, wavy wings having horny margins, may reach 6 m in length. The night-blooming, very fragrant, bell-shaped, white flowers, up to 35 cm long and 22 cm wide, have a thick tube bearing several linear green scales. The non-spiny fruit is oval up to 10 cm long, 6 cm thick, coated with the bright-red, fleshy or yellow, ovate bases of scales. Within is white, juicy, sweet pulp containing innumerable tiny black, partly hollow seeds.",
              "date_month": "May",
              "date_day": "17",
              "_id": "xi6iaZtbvEBf6xHj0pxTj"
            },
            {
              "url": "http://tropicalfruitandveg.com/images/pomegranate.jpg",
              "title": "In several human clinical trials, the juice of the pomegranate has been found effective in reducing several heart risk factors, including LDL oxidation, macrophage oxidative status, and foam cell formation, all of which are steps in atherosclerosis and heart disease. Pomegranate has been shown to reduce systolic blood pressure by inhibiting serum angiotension converting enzyme.Pomegranate juice has also been shown to be effective against certain cancers such as prostate cancer.",
              "description": "The pomegranate is a shrub or small tree that can grow to 5m in warm climates. The pomegranate has glossy, thin leathery leaves that are narrow and lance-shaped. The fruit is between 7 and 10 cm in diameter with tough leathery outer skin 2 to 4 mm think. Each fruit contain hundreds of tightly packed kernels 4 � 5 mm wide and 6 to 8 mm long that are translucent when unripe that turn red when ripe and brown when overripe. Each kernel contain a small white seed at the centre.",
              "date_month": "May",
              "date_day": "17",
              "_id": "JiS27_gTHJzEUKlAqiwha"
            },
            {
              "url": "http://tropicalfruitandveg.com/images/pomegranate.jpg",
              "title": "In several human clinical trials, the juice of the pomegranate has been found effective in reducing several heart risk factors, including LDL oxidation, macrophage oxidative status, and foam cell formation, all of which are steps in atherosclerosis and heart disease. Pomegranate has been shown to reduce systolic blood pressure by inhibiting serum angiotension converting enzyme.Pomegranate juice has also been shown to be effective against certain cancers such as prostate cancer.",
              "description": "The pomegranate is a shrub or small tree that can grow to 5m in warm climates. The pomegranate has glossy, thin leathery leaves that are narrow and lance-shaped. The fruit is between 7 and 10 cm in diameter with tough leathery outer skin 2 to 4 mm think. Each fruit contain hundreds of tightly packed kernels 4 � 5 mm wide and 6 to 8 mm long that are translucent when unripe that turn red when ripe and brown when overripe. Each kernel contain a small white seed at the centre.",
              "date_month": "May",
              "date_day": "17",
              "_id": "Kta0tkoc-or44w_JhAEOi"
            },
            {
              "url": "http://tropicalfruitandveg.com/images/bananauk2.jpg",
              "title": "All parts of the banana plant have medicinal applications: the flowers in bronchitis and dysentery and on ulcers; cooked flowers are given to diabetics; the astringent plant sap in cases of hysteria, epilepsy, leprosy, fevers, hemorrhages, acute dysentery and diarrhea, and it is applied on hemorrhoids, insect and other stings and bites; young leaves are placed as poultices on burns and other skin afflictions; the astringent ashes of the unripe peel and of the leaves are taken in dysentery and diarrhea and used for treating malignant ulcers; the roots are administered in digestive disorders, dysentery and other ailments; banana seed mucilage is given in cases of catarrh and diarrhea in India.",
              "description": "The banana plant, often erroneously referred to as a 'tree', is a large herb, with succulent, very juicy stem which is a cylinder of leaf-petiole sheaths, reaching a height of 6-7.5 m and arising from a fleshy rhizome or corm. Suckers spring up around the main plant forming a clump or 'stool'', the eldest sucker replacing the main plant when it fruits and dies, this process of succession continues indefinitely. As the young fruits develop from the female flowers, they look like slender green fingers. The bracts are soon shed and the fully grown fruits in each cluster become a 'hand' of bananas, and the stalk droops with the weight until the bunch is upside down. The fruit (technically a 'berry') turns from deep-green to yellow or red and may range from 6-30 cm in length and 2-5 cm in width, and from oblong, cylindrical and blunt to pronouncedly 3-angled, somewhat curved and hornlike. The flesh, ivory-white to yellow may be firm, astringent, even gummy with latex, when unripe, turning tender, slippery and soft when ripe.",
              "date_month": "May",
              "date_day": "17",
              "_id": "PJvsubfswFoKi4xMgDZDp"
            }
          ]
      
        search(data)
        }
        re_search();
        let x=document.getElementById("re_search").value
        localStorage.setItem("re_input",JSON.stringify(x))
        x=x.toUpperCase()
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
            location.href="./re_search.html"
            }   
         
})