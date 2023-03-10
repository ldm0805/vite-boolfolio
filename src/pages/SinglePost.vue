<script>
    import axios from 'axios';
    import { store } from '../store';

    export default {
        name: "SinglePost",
        data() {
            return {
                store,
                post: null,
                loading: true,
            }
        },
        mounted() {
            this.loading = true;
            axios.get(`${store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.post = response.data.post
                    this.loading = false
                }
                else {
                    //redirect alla 404
                    this.$router.push({ name: 'not-found' })
                }
            })
        }
    }
</script>
<template lang="">
    <div class="container">
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="col-12" v-else>
            <div class="float-end">
                <router-link :to="{ name : 'PostList'}" class="btn btn-sm btn-success">torna indietro</router-link>
            </div>
            <div class="row">
                <div class="col-12">
                    <h2>{{post.title}}</h2>
                </div>
                <div class="cover_img">
                    <img :src=" post.cover_image != null ? `${this.store.baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/200/300'"
                        alt="">
                </div>
                <p class="card-text"><strong>Contenuto:</strong> {{post.content}}</p>
                <p class="card-text">Livello: {{post.type.name}}</p>
                <template v-if="post.tags.length">
                    <div class="d-flex gap-2 flex-wrap align-items-center">
                        <span>Tag: </span>
                        <span v-for="tag in post.tags"
                            class="badge bg-info text-white text-uppercase">{{tag.name}}</span>
                    </div>
                </template>

            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
    .cover_img {
        width: 200px;
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