<template>
    <section>
        <div v-for="project in filteredProjectOnId" :key="project.projectID">
            <h2> {{project.headline}}</h2>
            <div class="productInformation">
                <div>
                    <p>{{project.description}}</p>
                </div>
                <div>
                    <iframe :src="project.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import getProjects from '../modules/getProjects'

    export default {
        setup() {
            const route = useRoute()
            const routeId = ref(route.params.id)
            
            const { projects } = getProjects();

            let filteredProjectOnId = computed(() => {
                return projects.value.filter(i => i.id == routeId.value)
            })

            return {
                route,
                projects,
                filteredProjectOnId
            }
        }
    }
</script>

<style lang="scss" scoped>
section {
    padding: 150px 10% 50px;
    min-height: 670px;

}

h2 {
    font-size: 42px;
    font-family: 'Roboto Slab', serif
}

.productInformation {
    margin-top: 50px;
    display: flex;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;            
    }

    iframe {
        width: 800px;
        height: 450px;
    }
}

@media screen and (max-width: 992px) {
    section {
        height: 80vh;
    }
    
    .productInformation {
        flex-direction: column;

        div {
            margin-bottom: 50px;

            iframe {
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>