<script>
import axios from 'axios';

export default {
    name: "PostMain",
    data() {
        return {
            posts: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000',
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        getPosts(project_page) {
            this.loading = true,
                axios.get(`${this.baseUrl}/api/projects`, { params: { page: project_page } }).then((response) => {
                    if (response.data.success) {
                        console.log(response.data)

                        // se nel backend faccio post::all 
                        // this.projects = response.data.results 

                        // con paginate
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
        this.getPosts(this.currentPage)
    }
}
</script>
<template lang="">
<div class="container">
    <div class="row">
        <div class="col-12">
            <h2 class="text-center">Boolpress</h2>
        </div>
        <div class="col-12">
            <div v-if="loading" class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div v-else class="d-flex flex-wrap gap-5 justify-content-center">
                <div v-for="post in projects" :key="post.id" class="col-md-3">
                    <div>
                        <div class="card my-3">
                        <img :src="projects.cover_image != null ? `${baseUrl}/storage/${projects.cover_image}` : 'https://picsum.photos/200/300'" class="card-img-top" alt="Cover Image">
                        <div class="card-body">
                            <h5 class="card-title">{{post.title}}</h5>

                            <p class="card-text">{{post.excerpt}}</p>
                            <a href="#" class="btn btn-sm btn-success">Leggi l'articolo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="row text-center">
                <div class="col-12">
                    <nav>
                        <ul class="pagination">
                            <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                                <button class="page-link" @click="getPosts(currentPage - 1)">Prev</button>
                            </li>
                            <li :class="currentPage === i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                                <button class="page-link" @click="getPosts(i)">{{i}}</button>
                            </li>
                            <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                                <button class="page-link" @click="getPosts(currentPage + 1)">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<style lang="scss" scoped>
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