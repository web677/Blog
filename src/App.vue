<!-- template -->
<template>
    <div id="app">
        <router-view
            class="view"
            keep-alive
            transition
            transition-mode="out-in"
        >
        </router-view>
    </div>
</template>

<!-- script -->
<script>
export default {
    components: {}
}
</script>

<!-- style -->
<style>
    @import "../static/css/base.css"
</style>
