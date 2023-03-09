<script>
    import axios from 'axios';
    import ProjectCard from './ProjectCard.vue';
    export default {
        components: {
            ProjectCard
        },
        name: "PostMain",
        data() {
            return {
                projects: [],
                loading: true,
                baseUrl: 'http://127.0.0.1:8000',
                currentPage: 1,
                lastPage: null
            }
        },
        methods: {
            getProjects(project_page) {
                this.loading = true,
                    axios.get(`${this.baseUrl}/api/projects`, { params: { page: project_page } }).then((response) => {
                        if (response.data.success) {
                            console.log(response.data)
                            this.projects = response.data.results.data;
                            this.currentPage = response.data.results.current_page;
                            this.lastPage = response.data.results.last_page;
                            this.loading = false;
                        }
                        else {

                        }

                    });
            }
        },
        mounted() {
            this.getProjects(this.currentPage)
        }
    }
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Boolpress</h2>
            </div>
        </div>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else>
            <div v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" :baseUrl="baseUrl"></ProjectCard>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12">
                <nav>
                    <ul class="pagination">
                        <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getProjects(currentPage - 1)">Prev</button>
                        </li>
                        <li :class="currentPage === i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                            <button class="page-link" @click="getProjects(i)">{{i}}</button>
                        </li>
                        <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    </div>

</template>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .loader {
        border: 16px solid #f3f3f3;
        /* Light grey */
        border-top: 16px solid #3498db;
        /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>