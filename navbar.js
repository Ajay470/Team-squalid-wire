let navbar=()=>{

    return  ` 
    <div id="top_navbar">
    <div id="header"
        style="background-color: green; color: white; font-size: 20px; padding: 5px; text-align: center;">
        <p> Delivering in Mumbai and Delhi | Same day delivery!</p>
    </div>
</div>


<div id="navbar">
    <div class="wrapper" style="background-color: rgb(233, 232, 232);padding: 5px 120px;">


        <div id="a1">
            <div class="right-menu">
                <button class="menu-button">SHOP</button><img style="width:15px;"
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAC5CAMAAADXsJC1AAAAM1BMVEW+vr7+/v7t7e3////s7Oz19fX6+vrz8/P4+Pjw8PD09PTFxcXAwMDo6OjJycnKysri4uLzPmuGAAANU0lEQVR4nO2d65qkKgxFC8TrdJX9/k97hICCBLkY1Joz/qr9dTetqzDJFoRXw5ajabk6EDGpzyOIPihGJfqgmEBAyy0ihBKDLxiITooGhEBEhwiGCA5C/ZsBRGMJ/oIftcIGYotJUAARNhDRIkJYQl/pwEKi80WHCOaLISTMVT8aSJAODZDmH5B/QAqANOpohTw4iMkWvS9GEGNE9CC4LyYQ6vPCICQG9ZkhovNFhwjmiwERDoJXC8egjhqiXstVxIs/45vBBG1PRbrtZAuN4MWfce8KJHzdEcvYPyD/gJwFYotiIA0xkKBAGJQAMbbBF6aHcBuILTpEMF8MlmgwUddTyaCqRMxTMacOcTOyG+pZaXQPB3QRSnBYtkMSHCaQBLcI/v78NsHU19gitVKdPst3+LWV6vvz+oHroSrd339ki18KRJ796/WjzpQICLTIvxTI0j9ehggNEMVDEmmDue+5QJoWzl4RiWY7jgXVXcnM3z+mxV9eGlTvM3fd52WOpY+Hg6oxd5M6tLPBRMf/bC2+u+0ng/1r5aLNEW2uaMeNhzz/Afk156pXcyd7zfrNSGH4t3/sFmX+Xb8Z+WsdIpgvBkQ0DXRVEGwT691qCZPxI8J0Ti24sM9eEoF/anoq24S+dWOVKuduiy95ft9Tuu94mFxzonRf44fdR74GyHvPQxMpB4K1yL8GiNc/1rs+EUizB4LwWFqE84ymu6i5sy8bAzJlmLsthnDj55rhg5y9InIEZJQHNxbOFSgPmX3Vrxk/FxG6h6SJVonRElyLyRa9L3pPBHgoIqP6tRb+BhBocWTuJpwHMK5Th9CZO7x3m2/U8XOOCFeqY3vQIt87vcdVqgc8XtrpZZbusRYfDeT47DWRPCCxFsWjgUTOXvfxHCAJLTrPsB4FpDm429fz3zu9Q3Pn12NIizGnd5+560L5ZUcEGx969epoO3WAGLoxzkM5veUYzN8kic4XbY6YYmJaPvEUHsrp2VetEewLsyVf7fzcQYtcfTPQVbWfgz7oiwERocJM2LXYZu74Vn6FxRjJLy4R4/QsBEjp7vm5cIvLZTyudE/msWZfBwECJKdF0TwMSJ9x9ib7RoBktoiF+huBoH7u4PzHJmbuEvKL0+KbIzGEeYLG3MViSMjPHRJx0z+Yu1Fn+THk5w5a/O1lA7qHQGsghphgvmjTxKQ+Gz+3iTaXh+rj0DJu7oJ+7qjFR5i7iJ87OH/X6bmVagEPyDWPqFSLeKy5Bivdy1t8AJDSszdPFREgmfHUIXI7EFbMQ+caH0gxD0mkvxlIM5TzgFyzN3dneOBO71Jzl+TnDomYoKqMzZJzxjOEZT3CpGsbVWvawhWIdrT9XJqYFpHo547Of3DM3ZDo5w5alLkmbu6YJZIKM5FSmJ2IH+shbHPnj3AVEWluKt0peHxGu3SnAGI5vYuBkPB4u17m/C2jiLA7gCQ/rTjiIfje3BXYAJ+IdnpuDPEZUMaQs/nF8NiZu7ZjPQHol3Z6On2M2aL1RY+IaRXh8bmMY+a9RABZZjV3JKHpNdaqQ3BzR3LSc2c/ZLZu5FOlmTk46vRqVaoUyeDTUZs79xCY06sDhCbfuuHLtf+nDIE5xGVAaHhwFgaSMuQVPX6E7/RqACE5WZlfXCDuE7NzptEQAadXO6hS5BfJYzdyZx4oypTDllRG0Q0Xp8c6ZufTuIATaCOiByHTrqDItwNTV20hODkMESJiOz27FnPEqafuRPnWu3XPDVQdEqlauhP6uejIHR8pqvid06MFMtHkl9RpmamD3REiFYGQ+rmUaZkkucZxejkxJDb6T+bn1qnddgyxJ3Gs80M6Gqc3BaaElM8PUYLCmM/jflaMZ+6gDpHHRGSafkSNh8yEfg6dQcT82zVl0l0qEfpKlSSedv59HJ+WSZNriIEQ+blgcD8AMpJEVkEMhNTP5b5zR5N9KYEQ+7nsd+5InrMiTq94OgSJn3vzo2U7VnOnjt3smfzpMxiRt2wsPEcmccKM8nMU+WXYLtS5ajNhhh92VbJcQ2Huavk5R0RfMSOqR86X7tX8XN47d/zkILghchpIW83PZa4f0pE8Z+XhhyOJQCi+mCW/JKwfokO9/An23i6d05Otpb23K0zYgGyn/oQo3/bGz0G2s4SJIeqt5h5ea+56JfTbz0Z0FF/O67f1mu7gJWtfTJbopeiKZgPujnmUF6qa7qbeumoHQcK7/0ROj5ebO3o/d/DuP4vcuxNhrimtVOn8HMVyGeozldMrAULTP1R5SLg4JEXRvBApANKQ8BCcGAiNr9FOLwcIWX5JBZIQVEEQjunlrFJF9fz0YIFG19wpLOY9bxADKkicHsz108sf6+/MFu1O0Pg5NRSs1zGDpkfrqhsHQc5Kd1REMipVkvgB1WCNtRCp5o+kAiH1czWAcJLRCZEMhMbPVV0tk2ZGTZcGhMjP5QI5KJmR53gdTa7hXnT3BdX8j7x5KtE1mQdXkDi9n9+E5ZEphtznPn9N5uQ6hNTpiZi5I/Rzmat2M//ejUypruP0dpUqSTyFYFh/ofsqTs8BQjk+d8XK/0RjekEgJH7OjM9dshUCDZExAISk+Xn1cye2QkhfYJ7kaQDi9AbKfBtYjzgQVM07d6bfwlnpwgxKD190q6DLNWbUSn8xNE1DfjGrvDWbWNeGtq7aQVC8rjuZ09tXquR+7qqF7qn6iAuE3s9dtvI/idPbxvTg3Aaa54X3bIVQsjgFQsQBQmEMZnHiDfNsc+cIovkjm9MjeV9M8DNvmBtzV3QMFBNof35Xd0Xj54bDc44dhXWI5k/q9Gr5uermro7Tq+fnLt7FjMzp0eQXhMHFQHoip0fk567e586jI4jG9Ih4EO5zBwx8YYDooLoXyulRVPHnj4UHX5esgiv1xYAI56pfdrVRuBYyja85e8xsKz3O1CFOmZZVqVq98wFEbD/3gF3Mbicy8xCDe4CQvKd3hkfYz920zx27NbIu8ZRun7sT5s4qjDsSY1bOg2xt6FfWsNahoHB6RcfcBgcaM8Rq7tjmbM7tYnpXZHX83Pn9dp0yraB0t+/dW4i4fu5hW1RTTIDK5fHsPbspZktk8uC3AgkK88T/4uw77/1cycY/CBBv9p+8UhCTLXpf6IWRdQ9hJN43g8fyf+2NXA+E7iFBoRG8nCRcZu6c6H5lZDXjcwep7yZzd4/T037u+VtUX0TE+LnnA+H9FXFkFgfZ7llAaMb0ojxqbWJOZe6cKrk6kWM/dyaowjtoZtOafNEiYurbyjXrvPynbUcf+T8zxWAJ59pephYDC6fE5IvsXUzrRlaVX+h2dbUREJfu1zi9j/tmcTiW+eJqL+M4vVpxZM7e1f0ZQKZKkXU2fq4OkCCDoLkLbZbFuR1DpKhCRPk555bxnodkbvyD9JDo3jaRjW52Av5kWn6fPo7Mch9UZHufsMjb6+e0uTt8dEcfWcHPHT7KPFmHQPwjrlQ3QUxEr4eSFcueULpbgmL+yMYD83NfBoRPdERwP/dlQBanR3XXBPwcMZCqQRUE0ZNn6edSxodOBtWCJSu3jUsPxboW5UTi9ObBWc9zLxL3bo0KuzBD1zFN2oEwUJhpQZJ9jZ+DG1TlGkdk7urKLOHUphVLd1Kn93HXBC6JZeq408tQOr0PxuCbgYj21AjWEk/PZ7tEIEnm7lwMWT4vAf3E/BGZX9xHIJ7AYwjzREIPyV1xfxW9L6agaFn5jj7Kz+nEopevtEUXEWl7/Vxj7jYxlOca289dUIdAyKtZqW73bhGRD+RLolj2hNLdCmYFRD60wf1hQHh2ZP2YqP13AhG5uUbOX78YyEVBdRVZRDw/d525s7NRyv5ye6EzbVAYpzf2GU5P7YeDZdoKadeIawozZ1+K5MgKzwvRVW9LzJ06gaeYO+feTSTi+rnLSvcbgKQ5vblmcH8WENEmjGDNi5+7BUiIAeEDIhuIEgl7t857P2cWiobLLokhjccAjSE6l6Q9Qpx8gT1CdHawQUVsi3C5H86aS+SfRAXVduHROqRsBhFm7jKcHvi5wpcQvsjcOV31gMjs7G/6V5fu9r0bHNObwxtF/NVAeCCyzuKybPcsIALfPmcW16X/sLkrf5E5wc+FIiy6gIq1v+k9QRW+wPCEGWT2THTCjHmmqo7RPFPFhBdZ7f1wBvtvQCTOkYnOnmFBUXVKVUJX3RHR+QW7dT1zRzal6nZz59y7DpF5uiOWOQhuB8L5Fkc+B53ifwNEDOuY3mz2N70ViMUgtovpGXO3bnRj03GdnswvZulMsQJpbDpE5k64wkEQNndTmmhtcxcVuO1TTm8ep91PEmeBJIouIjSCu8wd1CHyaMHpzWRvmJ+sQ+y7+r57963fn7sxlj2gdHeCGcLgfw0kd1f3f0C+xtyxYBzNWwt5jbAXBlVsjX3nVfcREYmvuqPvvVsC2ejGFepzYK8fTyS+3Z71qjuIEatUI+YOdXqIn8vqqu667nnmDi47dOsWvi9Dcu9SAcHCV4VY5opd6c5tILaYggyypmU6I3ctIuB0Bl/AZXO7WsdEhwiGCPinuofYF6rFf9xz0ztuMt99AAAAAElFTkSuQmCC"
                    alt="">
                <div class="dropdown-menu">
                    <a href="#">ALL FRUITS</a>
                    <a href="#">FRESH CUTS</a>
                    <a href="#">FRUIT COMBOS</a>
                    <a href="#">GIFTS BY KIMAYE</a>
                    <a href="#">GRAPE FAMILY BY KIMAYE</a>
                    <a href="#">RETURN AND REPLACEMENT</a>
                    <a href="#">FRUITS X SUBSCRIPTION</a>
                    <a href="#">COMMUNITY BUYING</a>
                </div>
            </div>


            <div class="right-menu">
                <button class="menu-button">LEARN</button><img style="width:15px;  "
                    src="data:image/png;base64,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"
                    alt="">
                <div class="dropdown-menu">
                    <a href="#">OUR STORY</a>
                    <a href="#">WHY KIMAYE</a>
                    <a href="#">TRACEABILITY</a>
                    <a href="#">BEYOND FRUITS</a>
                </div>
            </div>

            <div class="right-menu">
                <button class="menu-button">GROW </button>

            </div>
        </div>

        <div id="a2">
            <div class="logo">
                <a href="index.html"> <img style="width: 160px;"
                        src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
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
                    <!-- <img style="background-color: rgb(233, 232, 232); width: 25px;" src="http://assets.stickpng.com/thumbs/585e4ad1cb11b227491c3391.png" alt="">
                    <div class="dropdown-menu" >
                        <input style="" type="text" placeholder="Search for products">
                        <button id="search-botton">SEARCH</button>
                    </div> -->
                </div>

                <div class="profile">
                    <img onclick="login()" style="width: 30px;"
                        src="https://img.icons8.com/?id=12438&size=2x&color=000000" alt="">

                </div>
            </div>

        </div>

    </div>

</div>
<div id="login-hidden-main" style="display: flex; justify-content: right;">
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
                <!-- <div class="shopify-message resetSuccessside" style="display:none;">We've sent you an email with a link to update your password.</div>
               <p class="text_content_success resetSuccessside" style="display:none;">A password reset email has been sent to the email address on file for your account, but may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another reset.</p>
               <ul id="gl_shopify_errorside" class="shopify-error" style="display:none;">
                  <li class="html_li" id="jas_html_frmside"></li> -->

                <!-- </ul> -->
                <!-- <form style="padding:20px; display: flex; flex-direction: column ; gap: 20px;" method="post"
                    action="/account/login" id="customer_login_side" accept-charset="UTF-8"
                    class="login shopify-form shopify-form-login"
                    onsubmit="window.Shopify.recaptchaV3.addToken(this, &quot;customer_login&quot;); return false;">
                    <input type="hidden" name="form_type" value="customer_login"><input type="hidden" name="utf8"
                        value="✓"> -->

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
                            onclick="showRecoverPasswordFormSide();return false;">Forgot your password?</a>
                    </p>
                    <p class="form-row">


<button onclick="loginfun()" style="font-size:20px; border:2px solid #161616; height: 35px; width: 100%;">Login

</button>
                        <!-- <input style="font-size:20px; border:2px solid #161616; height: 35px; width: 100%;"
                            type="submit" class="Login-button" name="login" value="Login1"> -->


           
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
                <!--  -->
                <!-- <form style="padding:20px; display: flex; flex-direction: column ; gap: 20px;" method="post"
                    action="/account" id="register_side" accept-charset="UTF-8"
                    class="login shopify-form shopif-form-login">
                    <input type="hidden" name="form_type" value="create_customer">
                    <input type="hidden" name="utf8" value="✓"> -->

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
                    <button onclick="regfun()" style="font-size:15px;  border:2px solid black; height: 35px; width: 100%;margin-top: 50px;">
                        Register
                    </button>
                    <!-- <p class="shopify-FormRow form-ow" style="color: black; margin-top: 50px;">
                        <input style="font-size:15px;  border:2px solid black; height: 35px; width: 100%;"
                            type="submit" class="shopify-Button butt" name="register" value="Register">
                    </p> -->
                    <!-- </div> -->
                </form>

            </div>
            </div>

            <!-- /////////////////////////////////reg//////end////////////////////////////////////////////////// -->

            <!--             
                <div id="recover_passwordside" style="display: none"><form method="post" action="/account/recover" id="reset_password_side" accept-charset="UTF-8" class="shopify-ResetPassword lost_reset_password" onsubmit="window.Shopify.recaptchaV3.addToken(this, &quot;recover_customer_password&quot;); return false;"><input type="hidden" name="form_type" value="recover_customer_password"><input type="hidden" name="utf8" value="✓"><p class="gl_mb_0 gl_first">Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p><p class="shopify-form-row shopify-form-row--first form-row form-row-first">
                        <label for="RecoverEmailside">Email address</label>
                        <input type="email" value="" name="email" id="RecoverEmailside" class="shopify-Input shopify-Input--text input-text" autocorrect="off" autocapitalize="off">
                     </p>
                     <div class="clear"></div> -->
            <!-- <p class="form-change">
                        <input type="submit" class="shopify-Button button" value="Reset Password">
                        <button type="button" onclick="hideRecoverPasswordFormSide();return false;" class="shopify-Button button">Cancel</button>
                     </p></form></div>yet?</span>
                <p style="color: rgb(117, 115, 115);">Welcome to Kimaye! Help us with a few details to know you
                    better as you take the journey of enjoying our safe and tasty
            </div> -->
            <div class="register-question" style="text-align: center; display: flex; flex-direction: column; gap: 20px  ;">
                <span class="create-account-text" style="font-weight:120px ;">No account yet?</span>
                <p style="color: rgb(117, 115, 115);">Welcome to Kimaye! Help us with a few details to know you
                    better as you take the journey of enjoying our safe and tasty fruits.</p>
                <button id="reg-button101"
                    style="cursor: pointer;    border: 2px solid black; line-height: 30px; padding: 5px; font-size: 18px;width: 170px; margin: auto; text-decoration: none; color: black; "
                    class="btn btn-style-link" id="hideFormLogin" onclick="reg();return false;">Create an
                    Account</button>
                <button id="login-buttom101"
                    style=" cursor: pointer;    border: 2px solid black; line-height: 30px; padding: 5px; font-size: 18px;width: 150px; margin: auto; text-decoration: none; color: black; "
                    class="btn btn-style-link" id="showFormLogin" onclick="log();return false;">Login</button>
            </div>




            <script>





                var login1 = document.getElementById("login-form101");
                // login.style.display="none";
                var reg1 = document.getElementById("ajay1");
                reg1.style.display = "none";
                var reg_button = document.getElementById("reg-button101");
                // reg_button.style.display="none";
                var log_button = document.getElementById("login-buttom101");
                log_button.style.display = "none";

let data=JSON.parse(localStorage.getItem("project-2userdata")) || [];

                function regfun(){

                    let obj={
                     name:document.getElementById("FirstNamereg1").value,
                   last:document.getElementById("LastNamereg").value,
                   email:document.getElementById("reg_emailreg").value,
                   password:document.getElementById("reg_passwordreg").value,
                    }
                    data.push(obj);
                    localStorage.setItem("project-2userdata",JSON.stringify(data));
                    window.location.href="#";                       
                }


                function loginfun(){
                  let emai=document.getElementById("usernameside").value;
                   let passwor=document.getElementById("passwordside").value;
                    let flag=0;
                   data.forEach(function(el){
                      if(el.email===emai && el.password===passwor){
                        flag++;
                        localStorage.setItem("project-2logindata",JSON.stringify(el));
                        alert("succ")
                        window.location.href="#"; 
                      }

                   })
                   if(flag===0){
                    alert("something is wrong")
                   }


                }




                function reg() {
                    console.log("1")
                    reg1.style.display = "block";
                    login1.style.display = "none";


                    reg_button.style.display = "none";
                    log_button.style.display = "block";

                }

                function log() {
                    console.log("2")
                    login1.style.display = "block";
                    reg1.style.display = "none";

                    reg_button.style.display = "block";
                    log_button.style.display = "none";
                }
            </script>
            <!-- </div> -->
            <!-- //////////////////////////////////////////login inside end-->
            <script>
                var logincount = 1;
                var loginbox = document.getElementById("login-hidden1");
                loginbox.style.display = "none";
                function login() {
                    logincount++;
                    if (logincount % 2 == 1) {
                        // let blr=document.getElementById("top_navbar");
                        // blr.style.filter="blur(2px);"
                        loginbox.style.display = "none"

                    } else {
                        loginbox.style.display = "block"
                    }
                }
            </script>



        </div>
    </div>

    `
}

export default navbar;