<script>
export default {
    name: 'ThankYou'
}
</script>
<template lang="">
    <div class="container">
        <div class="row my-5">
            <div class="col-12 text-center">
                <h2>Grazie per averci contattato!</h2>
                <router-link :to="{ name : 'PostList'}" class="btn btn-sm btn-danger mt-5">Torna alla home</router-link>
            </div>
        </div>
        
    </div>
</template>
<style lang="">
    
</style>