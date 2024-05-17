<template lang="">
    <div>
            <input v-on:keyup.enter="$emit('addPost',$event)" type="text">
    </div>
</template>
<script>
export default {
    props: ['addPost']
}
</script>
<style lang="">
    
</style>