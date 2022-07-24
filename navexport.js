





let footer8875=()=>{
    return `
    <div class="foo-body">
    <div class="foo-top">
        <div class="foo-top-left">
           <a href="https://kimaye.com/pages/faqs-1"><strong>FAQ'S</strong></a> 
           <a href="https://kimaye.com/pages/contact-us"><strong>Contact Us</strong></a> 
           <a href="https://kimaye.com/pages/shipping-return-policy"><strong>Shipping & Return Policy</strong></a> 
           <a href="https://kimaye.com/pages/terms-conditions"><strong>Terms & Conditions</strong></a> 
           <a href="https://kimaye.com/pages/privacy-policy"><strong>Privacy Policy</strong></a> 
        </div>
        <div class="foo-top-right">
            <ul class="social-follow">
                <a >
                    <strong>Follow us on</strong>
                </a>
            </ul>
            <ul class="social-icon">
                <ul class="social-icons">
                    <li><a href="https://www.facebook.com/KimayeFruits/" target="_blank"><img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756" alt="Follow us on Facebook"></a></li>
                    <li><a href="https://www.instagram.com/kimayefruits/" target="_blank"><img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756" alt="Follow us on Instagram"></a></li>
                    <li><a href="https://twitter.com/kimaye_ini" target="_blank"><img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756" alt="Follow us on Twitter"></a></li>
                  </ul>
            </ul>

        </div>
    </div>
    <hr style="background: rgb(5, 185, 5);">
    <div class="foo-bottom">

                <div class="foo-bottom-t">
                  <p>Copyright©2020. All Rights Reserved</p>
                </div>
                <div class="foo-bottom-b">
                  <p><a href="https://www.ting.in/" target="_blank"><img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040" alt="Made by Ting"></a></p>
                </div>
             
    </div>
</div>
    `
}


let navbar001=()=>{

    return  ` 
    <div id="top_navbar">
        <div id="header"
            style="background-color: green; color: white; font-size: 20px; padding: 5px; 
            z-index: 1000; text-align: center;  position: fixed; top: 0px; left: 0px; right: 0px;">
            <p> Delivering in Mumbai and Delhi | Same day delivery!</p>
        </div>
    </div>


    <div id="navbar" >
        <div class="wrapper" style="background-color: rgb(233, 232, 232);padding: 5px 120px; 
        z-index: 1000; display: flex; align-items: center;  position: fixed; top: 30px; left: 0px; right: 0px; height: 50px;">


            <div id="a1">
                <div class="right-menu">
                    <button class="menu-button">SHOP</button><img style="width:15px;  "
                        src="data:image/png;base64,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"
                        alt="">
                    <div class="dropdown-menu">
                        <a href="./Frontend/All Fruits.html">ALL FRUITS</a>
                        <a href="./Frontend/Fresh Cuts.html">FRESH CUTS</a>
                        <a href="./Frontend/Combo.html">FRUIT COMBOS</a>
                        <a href="./Frontend/Gift.html">GIFTS BY KIMAYE</a>
                        <a href="./Frontend/Graps.html">GRAPE FAMILY BY KIMAYE</a>
                        <a href="https://kimaye.com/a/returns">RETURN AND REPLACEMENT</a>
                        <a href="#">FRUITS X SUBSCRIPTION</a>
                        <a href="https://kimaye.com/pages/community-buying">COMMUNITY BUYING</a>
                    </div>
                </div>


                <div class="right-menu">
                    <button class="menu-button">LEARN</button><img style="width:15px" src="data:image/png;base64,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" alt="">

                    <div class="dropdown-menu">
                        <a href="#">OUR STORY</a>
                        <a href="#">WHY KIMAYE</a>
                        <a href="#">TRACEABILITY</a>
                        <a href="#">BEYOND FRUITS</a>
                    </div>
                </div>

                <div class="right-menu">
                    <a href="./Frontend/Grow.html">  <button class="menu-button">GROW </button></a>
                  

                </div>
            </div>

            <div id="a2">
                <div class="logo">
                    <a href="index.html"> <img style="width: 160px;" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
                            alt=""></a>

                </div>
            </div>

            <div id="a3">
                <div style="display: flex; align-items: center;" class="right-menu">

                    <div style="display: flex; align-items: center; " class="loc">
                        <img style="width: 40px;"
                            src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png"
                            alt="">
                        <p>Mumbai</p>
                    </div>



                    <div class="search">
                        <header>

                            <div class="search-icon">
                                <input type="checkbox" name="" id="show-menu">
                                <label for="show-menu" class="menu-icon">
                                    <i class="fa fa-search"></i>
                                </label>
                                <div class="hidden" style="padding: 15px; background-color: rgb(163, 172, 172); ">
                                    <input type="text" class="search" placeholder="Search for products">
                                    <button id="button" type="submit" class="fa fa-search1">SEARCH</button>
                                </div>
                            </div>
                        </header>
                      
                    </div>

                    <div class="profile">
                        <!-- <img id="profile101" onclick="login()" style="width: 30px;" -->
                        <div><img id="profile101"  style="width: 30px;" src="https://img.icons8.com/?id=12438&size=2x&color=000000" alt="">
                        </div>
                 
                            <div id="login-hidden-main" style="display: flex; justify-content: right; position: absolute; right: -161px; top: 50px;">
                                <div class="login_hidden" id="login-hidden1" style="width: 350px; height: 1000px; background-color: #f9f9f9; ">
                        
                                    <!-- //////////////////////////////////////////login inside -->
                        
                                    <div class="login-form-side" style="font-family: serif">
                                        <div class="widget-heading"
                                            style="  display: flex; align-items: center; height: 30px; background-color: black; color: #f9f9f9;justify-content: space-between; padding: 30px; ">
                                            <h3 style="font-size: 25px;" class="widget-title">SIGN IN</h3>
                                            <a id="cross-login" style="font-size: 15px; color: #f9f9f9; text-decoration: none;" href="#"
                                                class="widget-close">CLOSE -</a>
                                        </div>
                                        <div class="login-form" id="login-form101" >
                                        
                        
                                   <div style="padding:20px; display: flex; flex-direction: column ; gap: 20px;" method="post">   
                                                <p style="color: black; width: 92%;">
                                                    <label style="font-size: 20px; line-height: 20px; padding: 10px 0px; "
                                                        for="usernameside">Email address <span style="color: red;"
                                                            class="required">*</span></label>
                                                    <input
                                                        style="font-size:15px; padding: 2px 10px; border:1px solid #a4a4a5; height: 35px; width: 100%;"
                                                        type="text" class="email-login-input" name="customer[email]" id="usernameside" value="">
                                                </p>
                        
                                                <p style="color: black; width: 92%;">
                                                    <label style="font-size: 20px; line-height:  20px; padding: 10px 0px;  "
                                                        for="passwordside">Password <span style="color: red;" class="required">*</span></label>
                                                    <input
                                                        style="font-size:15px; padding: 2px 10px; border:1px solid #a4a4a5; height: 35px; width: 100%;"
                                                        class="password-loin-input" type="password" name="customer[password]" id="passwordside">
                                                </p>
                                                <p>
                                                    <a style="text-decoration: none;  font-size: 20px;  color: black;" href="javascript:void(0)"
                                                        >Forgot your password?</a>
                                                </p>
                                                <p class="form-row">
                        
                        
                        <button id="loginfun887575" style="font-size:20px; border:2px solid #161616; height: 35px; width: 100%; ">Login
                            
                        </button>
                        
                        
                                       
                                        </p>
                                        </div>
                                    </div>
                                        <!-- </form> -->
                        
                        
                                        <!-- social -->
                                        <div class="oxi-social-login">
                                            <iframe id="social_login_frame" title="Social Login Frame"
                                                src="https://social-login.oxiapps.com/widget?site=kimaye-store.myshopify.com&amp;vt=928356&amp;parenturl=https://kimaye.com/"
                                                style="margin-top: 30px; width:100%;max-width:100%;padding-top:0px;margin-bottom:5px;border:0px;height:96px;"
                                                scrolling="no">
                                            </iframe>
                                        </div>
                        
                        
                        
                                        <!-- social -->
                        
                                        <!-- /////////////////////////////////reg//////////////////////////////////////////////////////// -->
                                        <div id="register_sid1ediv" id="reg-form101">
                                      
                        
                                                <div id="ajay1" style="padding:20px; display: flex; flex-direction: column ; gap: 20px;" >
                                                <!-- /////////////////break -->
                                                <!-- <div id="reg-boxmain"> -->
                                                <p class="reg-box" style="color: black; width: 92%;">
                                                    <label style="font-size: 20px; line-height: 20px; padding: 10px 0px; "
                                                        for="FirstNamereg1">First Name</label>
                                                    <input
                                                        style="font-size:15px; padding: 2px 10px; border:1px solid #a4a4a5; height: 35px; width: 100%;"
                                                        type="text" name="customer[first_name]" id="FirstNamereg1">
                                                </p>
                                                <p class="reg-lname1" style="color: black; width: 92%;">
                                                    <label style="font-size: 20px; line-height: 20px; padding: 10px 0px; "
                                                        for="LastNamereg">Last Name</label>
                                                    <input
                                                        style="font-size:15px; padding: 2px 10px; border:1px solid #a4a4a5; height: 35px; width: 100%;"
                                                        type="text" name="customer[last_name]" id="LastNamereg">
                                                </p>
                                                <p class="reg-email" style="color: black; width: 92%;">
                                                    <label style="font-size: 20px; line-height: 20px; padding: 10px 0px; "
                                                        for="reg_emailreg">Email address <span style="color: red;"
                                                            class="required">*</span></label>
                                                    <input
                                                        style="font-size:15px; padding: 2px 10px; border:1px solid #a4a4a5; height: 35px; width: 100%;"
                                                        type="email" class="shopify-Input shopify-Input--text input-text" name="customer[email]"
                                                        id="reg_emailreg">
                                                </p>
                                                <p class="reg-password" style="color: black; width: 92%;">
                                                    <label style="font-size: 20px; line-height: 20px; padding: 10px 0px; "
                                                        for="reg_passwordreg">Password <span style="color: red;"
                                                            class="required">*</span></label>
                                                    <input
                                                        style="font-size:15px; padding: 2px 10px; border:1px solid #a4a4a5; height: 35px; width: 100%;"
                                                        type="password" class="shopify-Input shopify-Input--text input-text"
                                                        name="customer[password]" id="reg_passwordreg" required="required">
                                                </p>
                                                <div class="shopify-password-strength" aria-live="polite"></div>
                                                <p></p>
                                                <button id="regfun887575"  style="font-size:15px;  border:2px solid black; height: 35px; width: 100%;margin-top: 50px;">
                                                    Register
                                                </button>
                                 
                                            </form>
                        
                                        </div>
                                        </div>
                        
                                        <!-- /////////////////////////////////reg//////end////////////////////////////////////////////////// -->
                        
                                        <div class="register-question" style="text-align: center; display: flex; flex-direction: column; gap: 20px  ;">
                                            <span class="create-account-text" style="font-weight:120px ;">No account yet?</span>
                                            <p style="color: rgb(117, 115, 115);">Welcome to Kimaye! Help us with a few details to know you
                                                better as you take the journey of enjoying our safe and tasty fruits.</p>
                                            <button id="reg-button101"
                                                style="cursor: pointer;    border: 2px solid black; line-height: 30px; padding: 5px; font-size: 18px;width: 170px; margin: auto; text-decoration: none; color: black; "
                                                class="btn btn-style-link"  >Create an
                                                Account</button>
                                            <button id="login-buttom101"
                                                style=" cursor: pointer;    border: 2px solid black; line-height: 30px; padding: 5px; font-size: 18px;width: 150px; margin: auto; text-decoration: none; color: black; "
                                                class="btn btn-style-link"  >Login</button>
                                        </div>
                        
                        
                        
                        
                                     
                        
                        
                        
                                    </div>
                                </div>
                            </div>


                    </div>

                 <div id="cart-icon" class="carticon">
                    <a href="./Frontend/cart.html"><img style="margin-left: 10px; width: 30px;" src="https://static.thenounproject.com/png/1100446-200.png" alt=""></a>
                    
                 </div>


                </div>

            </div>

        </div>

    </div>

`
}

let chatbox=()=>{

    return`

    <div
                style="display: flex; flex-direction: row; justify-content: space-between; align-items: flex-start; height: 140px; width: 100%; padding: 26px 16px 0px; background-color: rgb(0, 0, 0); box-sizing: border-box; color: white;">
                <div
                    style="display: flex; flex: 1 1 0%; flex-direction: row; justify-content: space-between; align-items: center;">
                    <div
                        style="overflow: hidden; text-overflow: ellipsis; line-height: 20px; white-space: nowrap; display: inline-block; width: 282px;">
                        Chat with us</div><img
                        src="https://cdn.live.zoko.io/store/customers/307ac06e-4be0-4fdd-92e9-e0c191561b99-zo-ko-close.svg"
                        style="width: 24px; height: 24px; cursor: pointer; pointer-events: unset;">
                </div>
            </div>
            <div
                style="display: flex; flex-direction: column; flex: 1 1 0%; margin-top: -68px; padding: 0px 20px; border-radius: 8px; background-color: white; box-sizing: border-box; margin-left: 16px; margin-right: 16px; align-self: stretch;">
                <div
                    style="color: rgb(117, 117, 117); margin: 24px 0px; box-sizing: border-box; font-size: 14px; text-align: left; overflow: hidden; text-overflow: ellipsis; line-height: 20px; white-space: nowrap;">
                    How can we help you today?</div>
                <div
                    style="padding: 16px; border: 1px solid rgb(245, 245, 245); box-sizing: border-box; border-radius: 8px; margin-bottom: 6.98px; cursor: pointer; color: rgb(0, 0, 0); text-decoration: none; display: flex; flex-direction: row; align-items: center;">
                    <img src="https://cdn.live.zoko.io/store/customers/a9b2a2ef-1faf-4ddd-baf9-23afa6bb7a3f-zo-ko-Whatsapp.svg"
                        style="width: 24px; height: 24px; margin-right: 8px; box-sizing: border-box;">
                    <div
                        style="flex: 1 1 0%; font-weight: 500; font-size: 14px; line-height: 20px; box-sizing: border-box; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                        Let's talk on Whatsapp</div><img
                        src="https://cdn.live.zoko.io/store/customers/1e42af48-0da8-4e29-921c-7c374e9a44f5-zo-ko-arrowRight.svg"
                        style="width: 16px; height: 16px; margin-left: 12px;">
                </div>
            </div>
            <div
                style="margin-top: 16px; color: rgb(175, 175, 175); font-weight: 400; font-size: 12px; line-height: 16px; margin-bottom: 24px; box-sizing: border-box;">
                Chat powered by <a title="Best WhatsApp App for Shopify" href="https://zoko.io" target="_blank"
                    style="color: rgb(38, 110, 241); cursor: pointer; text-decoration: none;">www.zoko.io</a>
                </div>
    
    `


}




// export {navbar001,footer8875,chatbox};
