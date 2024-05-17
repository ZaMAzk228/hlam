<template lang="">
    <div class='container'>
        <div>
            <AllUsers />
        </div>
        
        <div>
            <AllPosts :listPosts='listPosts'/>
        </div>
        
        <div>
            <AddPost v-on:addPost='addPost' />
        </div>
    </div>
</template>
<script>
import AllUsers from '../components/AllUsers.vue';
import AllPosts from '../components/AllPosts.vue'
import AddPost from '../components/AddPost.vue'
export default {
    components: {
        AllUsers,
        AllPosts,
        AddPost,
    },
    mounted() {
        console.log(localStorage.id)
        fetch("http://localhost:3004/allPosts")
            .then(res => res.json())
            .then(data => {
                this.listPosts = data
            })
    },
    methods: {
        addPost(e) {
            const obj = {
                id: localStorage.id,
                text: e.target.value
            }

            fetch("http://localhost:3004/addPost", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(data => this.listPosts = data)
        }
    },
    data() {
        return {
            listPosts: [],
        }
    },
}
</script>
<style >
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>