<script>
import { store } from '../store';
export default {
    props: {
        project: Object,
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<template lang="">
        <div>
            <div class="card">
                <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'"
                    class="card-img-top" alt="Cover Image">
                <div class="card-body d-flex flex-column gap-2">
                    <h5 class="card-title">{{project.title}}</h5>
                    <p class="card-text"><strong>Contenuto:</strong> {{project.content}}</p>
                    <p class="card-text">Livello: {{project.type.name}}</p>
                    <template v-if="project.tags.length">
                        <div class="d-flex gap-2 flex-wrap align-items-center">
                            <span>Tag: </span>
                            <span v-for="tag in project.tags"
                                class="badge bg-info text-white text-uppercase">{{tag.name}}</span>
                        </div>
                    </template>
                    <!-- <a href="#" class="btn btn-sm btn-success">Leggi l'articolo</a> -->
                    <!-- Routerlink con passaggio di parametro -->
                    <router-link :to="{ name: 'single-post', params: { slug: project.slug } }" class="btn btn-sm btn-success">Leggi l'articolo</router-link>

                   
                </div>
            </div>
        </div>
 


</template>
<style lang="">

</style>