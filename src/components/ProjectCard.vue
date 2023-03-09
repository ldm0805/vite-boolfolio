<script>
    export default {
        props: {
            project: Object,
            baseUrl: String,
        }
    }
</script>
<template lang="">
    <div class="d-flex">

        <div class="col-3">
            <div class="card">
                <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'"
                    class="card-img-top" alt="Cover Image">
                <div class="card-body d-flex flex-column gap-2">
                    <h5 class="card-title">{{project.title}}</h5>
                    <p class="card-text"><strong>Contenuto:</strong> {{project.content}}</p>
                    <p class="card-text">{{project.type.name}}</p>
                    <template v-if="project.tags.length">
                        <div class="d-flex gap-2 flex-wrap">
                            <span v-for="tag in project.tags"
                                class="badge bg-info text-white text-uppercase">{{tag.name}}</span>
                        </div>
                    </template>
                    <a href="#" class="btn btn-sm btn-success">Leggi l'articolo</a>
                </div>
            </div>
        </div>
    </div>


</template>
<style lang="">

</style>