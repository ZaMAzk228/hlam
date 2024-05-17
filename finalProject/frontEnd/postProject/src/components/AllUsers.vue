<template lang="">
    <div>
        <div v-for='(el,index) in listUsers'>
            <li :key="el.id">
               {{el.name}}
            </li>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listUsers: [],
        }
    },

    mounted(){
        fetch('http://localhost:3004/allUsers')
        .then(res=>res.json())
        .then(data => {
            this.listUsers = data
        })

    }
}
</script>
<style lang="">
    
</style>