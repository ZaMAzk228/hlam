<template lang="">
    <div>
        <div v-for='el in listPosts'>
            <div class='container' :key="el.id">
                <!-- <div v-if='localStorage?.id === el.user_id?true:false'>Удалить</div> -->
                {{el.name}}
                <div>
                    {{el.text}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['listPosts'],
}
</script>
<style scoped>
    .container{
        border: 1px solid grey;
        min-height: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>