<template>
    <section>
        <h2>Jeg vidste ikke hvilke produkter jeg ville have til at ligge på min portifolio, så derfor har jeg arrangeret 5 af mine alltime favorit spil for at vise at jeg kan trække data ud af et array.</h2>
    
        <div class="cardContainer">

        
            <div class="card" v-for="project in projects" :key="project.id">
                    <router-link class="router" :to="{ name: 'product', params:{ id : project.id }}">
                        <img :src="project.imgLink"  alt="...">
                        <div class="cardText">                                              
                            <h3 id="cardOne" >{{project.headline}}</h3>
                            <p>{{project.description}}</p>
                            <div class="cardMore">
                                læs mere
                            </div>
                        </div>  
                    </router-link>
            </div>
        </div>
    </section>

    
</template>

<script>
//import { ref } from 'vue'
import getProjects from '../modules/getProjects'

    export default {
        setup() {

            //let showData = ref(false)
            //let isActive = ref(false)

            
            
        const { projects } = getProjects();

        return {
            projects,
            //showData,
            //isActive,
        }

        }
        
        
    }
</script>

<style lang="scss" scoped>
section {
    min-height: 500px;
    padding: 150px 10% 50px;

    h2 {
        font-family: 'Roboto', sans-serif;
        padding-bottom: 50px;
    }

    .cardContainer {
        display: flex;
        flex-wrap: wrap;
        gap:5%;
        
        .card {
        width: 30%;
        height: 480px;
        border: 3px solid #145629;
        box-sizing: border-box;
        margin-bottom: 75px;
        border-radius: 3px;

            .router {
                text-decoration: none;
                font-family: 'Roboto', sans-serif;
                color: #000;

                
                    img {
                        width:100%;
                        height: 250px;
                        object-fit: cover;

                    }
                    .cardText {
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        
                        .cardMore {
                            margin-top: 30px;
                            margin-left: 10px;
                            border: 2px solid #145629;
                            width: 100px;
                            height: 30px;
                            border-radius: 3px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background:#145629;
                            color: #fff;

                                &:hover {
                                    background: #fff;
                                    color: #000
                                }
                        }
                    }

            }
            
        }
    }
}


</style>