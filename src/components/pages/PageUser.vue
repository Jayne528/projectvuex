<template>
    <div class="page-test">
        <h1>This page is for User</h1>
        <h2>you are {{$route.params.name}}</h2>
        <h2 v-if="user">You enter by id {{user}}</h2>
        <div>
            <h3 v-for="todo in userTodos">{{todo.title}}</h3>
        </div>
        <router-link to="/">To Page Home</router-link>
    </div>
</template>

<script>
import {mapState , mapMutations, mapActions} from 'vuex'
export default {
    data() {
        return {
            users: [
                {id: 1, name: "John"},
                {id: 2, name: "Tom"},
            ]
        }
    },
    computed: {
        ...mapState(['todos']),
        user() {
            return this.users.find(user=>user.id==this.$route.params.num)
        },
        userTodos() {
            return this.todos.filter(todo=>
                todo.userId == this.$route.params.num
            )
        }
    },
}
</script>

<style>

</style>