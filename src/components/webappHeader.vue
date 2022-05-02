<template>
    <header>
        <!-- <div class="dropDown hidden">
            <img src="./../assets/Icons/burgerMenu-icon.svg" alt="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="../#welcome" class="underlineAnimation noselect">Velkommen til</a>
                    </li>
                    <li>
                        <a href="../#whatIKnow" class="underlineAnimation noselect">Hvad kan jeg</a>
                    </li>
                    <li>
                        <a href="../#whoAmI" class="underlineAnimation noselect">Hvem er jeg</a>
                    </li>
                    <li>
                        <router-link  to="/portfolio">Portfolie</router-link>
                    </li>
                </ul>
            </nav>
        </div> -->
        <div class="logoBox">
            <router-link to="/" class="noselect">
                <h2>Denni <span>Knudsen</span></h2>
            </router-link>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="../#welcome" class="underlineAnimation noselect">Velkommen til</a>
                </li>
                <li>
                    <a href="../#whatIKnow" class="underlineAnimation noselect">Hvad kan jeg</a>
                </li>
                <li>
                    <a href="../#whoAmI" class="underlineAnimation noselect">Hvem er jeg</a>
                </li>
                <li>
                    <router-link  to="/portfolio">Portfolie</router-link>
                </li>
            </ul>
        </nav>
        <div class="ctaContain">
            <button class="callToAction noselect" onclick="clickMe()">Kontakt mig</button>
        </div>
    </header>
</template>

<script>
    export default {
        
    }

var scrollpos = window.scrollY;
var header = document.getElementById("header");

function add_class_on_scroll() {
    header.classList.add("headerScroll");
}

function remove_class_on_scroll() {
    header.classList.remove("headerScroll");
}

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});
</script>

<style lang="scss" scoped>
header {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    position: fixed;
    transition: all 500ms ease 0s;
}

/* .hidden {
    display: none;
} */

.headerScroll {
    background-color: #f8f8f8;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4)
}

.logoBox {
    height: 100px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 17%;
}

header nav {
    display: flex;
    width: 50%;
    justify-content: center;

    ul {
        display: flex;
        list-style: none;
        gap: 50px;

        li {
            padding: 2px;
            padding-bottom: 5px;

            a {
                padding: 5px;
                text-decoration: none;
                font-family: 'Encode Sans', sans-serif;
                color: #121212;
                font-size: 24px;
            }
        }
    }
}

.ctaContain {
    width: 13%;
}
</style>

<style lang="scss">
.logoBox a {
    text-decoration: none;
    padding: 20px;

    h2 {
    font-family: 'Encode Sans', sans-serif;
    font-size: 40px;
    font-weight: 500;
    color: #145629;

        span {
        color: #121212;
        }
    }  
}

.callToAction {
    width: 220px;
    height: 75px;
    background-color: #145629;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    color: #fff;    
    border: 2px solid #145629;
    transition: all 250ms ease 0s;

    &:hover {
    background-color: #fff;
    color: #145629;
    cursor: pointer;
}
}

</style>