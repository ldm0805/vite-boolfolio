<script>
export default {
    name: "AppHeader",
    data() {
        return {
            menuItems: [
                {
                    label: 'Homepage',
                    routeName: 'HomePage'
                },
                {
                    label: 'Blog',
                    routeName: 'PostList'
                }
            ]
        }
    }
}
</script>
<template lang="">
    <header>
        <nav class="navbar navbar-expand-md background-nav">
            <div class="container">
                <div class="navbar-brand">
                    <!-- <img src="/img/logo.png" class="logo"> -->
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                            <!-- <a class="nav-link text-white" :href="item.link">{{item.label}}</a> -->
                            <router-link :to="{ name: item.routeName}" class="nav-link text-white">
                                {{item.label}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
.background-nav {
    background-color: cadetblue;
    color: white;
}

.logo {
    width: 300px;
}
</style>