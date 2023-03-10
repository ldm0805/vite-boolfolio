//1 passaggio: importiamo i metodi dal pacchetto createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

//2 importare le componenti che rappresentano le pagine
import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';

//3 creiamo l'oggetto router, nell'array di oggetti inseriamo i dati delle nostre rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'PostList',
            component: PostList
        },
        //Rotta per il dettaglio del post
        {
            //con :nome_parametro andiamo a passare il parametro per visualizzare il dettaglio di un post, il nome_parametro deve coincidere con quello dato in api.php nella repo di laraver
            path: '/posts/:slug',
            name: 'single-post',
            component: SinglePost
        },
        //DA METTERE PER ULTIMA
        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        },
    ]
})

//4 esportiamo il router

export { router };

