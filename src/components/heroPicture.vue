<template>
    <section class="welcome" id="welcome">
        <div class="imgBox">
            <img src="./../assets/DenniCKnudsen.png" alt="DenniCKnudsen">
        </div>
        <div class="textBox">
            <div class="textArea">
                <h2>Web Designer</h2>
                <p>
                    Under uddannelse som multimediadesigner
                    og på udkig efter praktikplads i første halvdel af 2023
                </p>
            </div>
            <button class="callToAction noselect" onclick="clickMe()">Kontakt mig</button>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
section {
    height: 980px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.welcome .textBox .callToAction {
    align-self: center;
}

.welcome .imgBox {
    width: 51%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.welcome .imgBox img {
    width: 100%;
    height: auto;
    object-fit: contain;
}

.welcome {
    height: 100vh;
    background-color: #f8f8f8;
}

.welcome .textBox {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
}

.welcome .textBox .textArea {
    gap: 28px;
}

.welcome .textBox .textArea h2 {
    font-family: 'Roboto Slab', serif;
    font-size: 70px;
    color: #121212;
}

.welcome .textBox .textArea p {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    width: 472px;
    color:#565656;
}
</style>