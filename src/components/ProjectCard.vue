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
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'"  alt="Cover Image">
      </figure>
      <div class="article-body">
        <h5>{{project.title}}</h5>
        <p class="content">
            {{project.content}}
        </p>
        <p class="card-text">Livello: {{project.type.name}}</p>
            <template v-if="project.tags.length">
                <div class="d-flex gap-2 flex-wrap align-items-center">
                    <span>Tag: </span>
                    <span v-for="tag in project.tags"
                        class="badge bg-info text-white text-uppercase">{{tag.name}}</span>
                </div>
            </template>
        <router-link :to="{ name: 'single-post', params: { slug: project.slug } }" class="read-more">Leggi l'articolo <span class="sr-only">about this is some title</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </router-link>
      </div>
    </div>
  </article>

</section>

</template>
<style lang="scss" scoped>
.content {
    width: 200px;
    /* larghezza del contenitore */
    white-space: nowrap;
    /* impedisce al testo di andare a capo */
    overflow: hidden;
    /* nasconde il testo che va oltre la larghezza del contenitore */
    text-overflow: ellipsis;
    /* aggiunge i puntini di sospensione alla fine del testo che supera la larghezza del contenitore */
}

article {
    --img-scale: 1.001;
    --title-color: black;
    --link-icon-translate: -20px;
    --link-icon-opacity: 0;
    position: relative;
    border-radius: 16px;
    box-shadow: none;
    background: #fff;
    transform-origin: center;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
}


/* basic article elements styling */
article h2 {
    margin: 0 0 18px 0;
    font-size: 1.9rem;
    letter-spacing: 0.06em;
    color: var(--title-color);
    transition: color 0.3s ease-out;
}

article img {
    width: 100%;
    transform-origin: center;
    transform: scale(var(--img-scale));
    transition: transform 0.4s ease-in-out;
}

.article-body {
    padding: 24px;
}

article a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #28666e;
}

article a:focus {
    outline: 1px dotted #28666e;
}

article a .icon {
    min-width: 24px;
    width: 24px;
    margin-left: 5px;
    transform: translateX(var(--link-icon-translate));
    opacity: var(--link-icon-opacity);
    transition: all 0.3s;
}

/* using the has() relational pseudo selector to update our custom properties */
article:has(:hover, :focus) {
    --img-scale: 1.1;
    --title-color: #28666e;
    --link-icon-translate: 0;
    --link-icon-opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
</style>