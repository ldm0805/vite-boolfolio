<script>
export default {
    name: 'ThankYou'
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Grazie per averci contattato!</h2>
                <router-link :to="{ name : 'PostList'}" class="btn btn-sm btn-danger">Torna alla pagina</router-link>
            </div>
        </div>
        
    </div>
</template>
<style lang="">
    
</style>