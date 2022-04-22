<template>
    <footer>
        <div class="footerContent">
            <div class="logoBox">
                <a href="#welcome" class="noselect">
                    <h2>Denni <span>Knudsen</span></h2>
                </a>
            </div>
            <div class="iconContain">
                <a href="https://github.com/Deknudsen" target="_blank">
                    <img src="@/assets/Icons/github.png" alt="github-icon">
                </a>
                <a href="https://www.linkedin.com/in/denniknudsen/" target="_blank">
                    <img src="@/assets/Icons/linkedin-icon.svg" alt="linkedin-icon">
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
footer {
    height: 100px;
    background-color: #565656;
    display: flex;
    justify-content: center;
}

.footerContent {
    width:78%;
    display: flex;
    justify-content: space-between;
}

.footerContent .logoBox {
    width: 25%;
    justify-content: left;
}

.footerContent .iconContain {
    display: flex;
    align-items: center;
    width: 10%;
    gap: 70px;
    flex-direction: row;
}

.footerContent .iconContain a {
    width: 5%;
    height: 50px;
}

.footerContent .iconContain a img {
    width: 50px;
}
</style>