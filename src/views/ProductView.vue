<template>
    <section>
        <p>test: {{route.params.id}} </p>
        <h2>Det ser ud til at jeg ikke kunne trække data ud... Det må jeg få kigget på. I det mindste er der et flot 1-tal</h2>
        <div v-for="project in filteredProjectOnId" :key="project.projectID">
            <h2> {{project.headline}}</h2>
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
                return projects.value.filter(i => i.projectID == routeId.value)
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
</style>