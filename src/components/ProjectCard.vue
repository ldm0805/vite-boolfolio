<script>
export default {
    props: {
        project: Object,
        baseUrl: String,
    }
}
</script>
<template lang="">
    <div>
        <div class="card my-3 d-flex">
            <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" class="card-img-top" alt="Cover Image">
            <div class="card-body d-flex flex-column gap-2">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">{{project.type.name}}</p>
                <template v-if="project.tags.length">
                    <div class="d-flex gap-2 flex-wrap">
                        <span v-for="tag in project.tags" class="badge bg-info text-dark">{{tag.name}}</span>
                    </div>
                </template>
                <a href="#" class="btn btn-sm btn-success">Leggi l'articolo</a>
            </div>
        </div>
    </div>

</template>
<style lang="">
    
</style>