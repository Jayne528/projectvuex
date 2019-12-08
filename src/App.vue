<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <ul>
      <!-- <li v-for="todo in $store.state.todos"> -->
      <!-- <li v-for="todo in todos">
        <h2>{{todo}}</h2>
        <p>{{todo.title}}</p>
      </li> -->
    </ul>
    <button @click="setTodos(['amy','bobo','cidy'])">Update Todos</button>
    <br>
      <button @click="loadTodos">load TodosA</button>
    <br>
    <router-link to="/test">To Page Test</router-link>
    <br>
    <router-link to="/user/frank">User Frank1</router-link>
    <br>
    <router-link to="/user/lisa">User Lisa</router-link>
    <br>
    <router-link to="/user/id/1">User 1</router-link>git remote add origin
    <router-link to="/user/id/2">User 2</router-link>
    <router-link to="/user/id/3">User 3</router-link>
    <transition name="page" mode="out-in">
      <router-view :key="$route.path"/>
    </transition>
  </div>
</template>

<script>
import {mapState , mapMutations, mapActions} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['todos'])
  },
  //元件載入後
  mounted() {
    // this.setTodos(['a','b','c'])
    this.loadTodos()
  },
  methods: {
    ...mapMutations(['setTodos']),
    ...mapActions(['loadTodos']),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 軟轉頁 */
.page-enter-active,.page-leave-active {
  transition: 0.3s;
}
.page-enter,.page-leave-to {
  opacity: 0;
}
</style>
