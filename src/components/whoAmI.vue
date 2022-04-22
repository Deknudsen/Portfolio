<template>
    <section class="whoAmI" id="whoAmI">
        <div class="imgBox">
            <img src="./../assets/DenniA.svg" alt="IllustrationOfMe">
        </div>
        <div class="sliderBox">
            <div class="sliderContainer">
                <div class="slide">
                    <div class="slideTitle">
                        <h2>
                            Hvem er jeg
                        </h2>
                    </div>
                    <div class="slideContent">
                        <div class="contentItem">
                            <h2>
                                Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the
                                1500s, when an unknown printer took
                                a galley of type and scrambled it to
                                make a type specimen book.
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="slide">
                    <div class="slideTitle">
                        <h2>
                            Uddannelser
                        </h2>
                    </div>
                    <div class="slideContent">
                        <div class="contentItem">
                            <h2>
                                HHx Grindsted
                            </h2>
                            <h3>
                                2013 - 2017
                            </h3>
                        </div>
                        <div class="contentItem">
                            <h2>
                                Webintegrator Grenaa
                            </h2>
                            <h3>
                                2017 - 2019
                            </h3>
                        </div>
                        <div class="contentItem">
                            <h2>
                                Multimediadesigner
                            </h2>
                            <h3>
                                2021 - now
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="slide">
                    <div class="slideTitle">
                        <h2>
                            Personlighed: ISTP-T
                        </h2>
                    </div>
                    <div class="slideContent">
                        <div class="contentItem">
                            <h2>
                                Introvert
                            </h2>
                            <div class="contentContain">
                                <h3>
                                    75%
                                </h3>
                                <div class="contentbox" id="introvert"></div>
                            </div>
                        </div>
                        <div class="contentItem">
                            <h2>
                                Observant
                            </h2>
                            <div class="contentContain">
                                <h3>
                                    54%
                                </h3>
                                <div class="contentbox" id="observant"></div>
                            </div>
                        </div>
                        <div class="contentItem">
                            <h2>
                                Thinking
                            </h2>
                            <div class="contentContain">
                                <h3>
                                    66%
                                </h3>
                                <div class="contentbox" id="thinking"></div>
                            </div>
                        </div>
                        <div class="contentItem">
                            <h2>
                                Prospecting
                            </h2>
                            <div class="contentContain">
                                <h3>
                                    71%
                                </h3>
                                <div class="contentbox" id="prospecting"></div>
                            </div>
                        </div>
                        <div class="contentItem">
                            <h2>
                                Turbulent
                            </h2>
                            <div class="contentContain">
                                <h3>
                                    89%
                                </h3>
                                <div class="contentbox" id="turbulent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slideNavBox">
                <div class="circleNav" onclick="currentSlide(1)"></div>
                <div class="circleNav" onclick="currentSlide(2)"></div>
                <div class="circleNav" onclick="currentSlide(3)"></div>
            </div>
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

.whoAmI {
    background-color: #f8f8f8;
}

.whoAmI .imgBox {
    width: 30%;
}

.whoAmI .sliderBox {
    width:35%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

.whoAmI .sliderBox .sliderContainer{
    width: 100%;
    height: 70%;
    border: 2px solid #145629;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #fff;
}

.whoAmI .sliderBox .slide {
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.slide .slideTitle {
    width: 60%;
    border-bottom: 2px solid #145629;
    height: 100px;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide .slideTitle h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-weight: 400;
}

.slide .slideContent {
    width: 60%;
    height: 400px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-family: 'Roboto', sans-serif;
}

.contentItem {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}

.slide .slideContent .contentItem h2, .slide .slideContent .contentItem h3{
    font-size: 24px;
    font-weight: 500;
    color: #565656;
}

.slide .slideContent .contentItem .contentContain {
    display: flex;
    gap: 5px;
}

.slide .slideContent .contentItem .contentbox {
    width: 200px;
    border: 2px solid #145629;
}

#introvert {
    background-image: linear-gradient(left, #145629, #145629 75%, transparent 75%, transparent 100%);
    background-image: -webkit-linear-gradient(left, #145629,#145629 75%, transparent 75%, transparent 100%);
}

#observant {
    background-image: linear-gradient(left, #145629, #145629 54%, transparent 54%, transparent 100%);
    background-image: -webkit-linear-gradient(left, #145629,#145629 54%, transparent 54%, transparent 100%);
}

#thinking {
    background-image: linear-gradient(left, #145629, #145629 66%, transparent 66%, transparent 100%);
    background-image: -webkit-linear-gradient(left, #145629,#145629 66%, transparent 66%, transparent 100%);
}

#prospecting {
    background-image: linear-gradient(left, #145629, #145629 71%, transparent 71%, transparent 100%);
    background-image: -webkit-linear-gradient(left, #145629,#145629 71%, transparent 71%, transparent 100%);
}

#turbulent {
    background-image: linear-gradient(left, #145629, #145629 89%, transparent 89%, transparent 100%);
    background-image: -webkit-linear-gradient(left, #145629,#145629 89%, transparent 89%, transparent 100%);
}

.whoAmI .sliderBox .slideNavBox {
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.whoAmI .sliderBox .slideNavBox .circleNav {
    width: 10px;
    height: 10px;
    border: 2px solid #145629;
    border-radius: 10px;
    transition: all 250ms ease-out;
    cursor: pointer;
}

.whoAmI .sliderBox .slideNavBox .circleNav:hover {
    background-color: #145629;
}

.whoAmI .sliderBox .slideNavBox .circleSelect {
    background-color: #145629;
}
</style>