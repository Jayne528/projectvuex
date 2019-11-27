//管理所有資料
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)


let store = new Vuex.Store ({
    //現在當下狀態
    state: {
        todos: [1,2,3]
    },
    //所有變更的種類
    mutations: {
        setTodos(state, value) {
            state.todos = value
        }
    },
    //所有大型的計畫變更或非同步的載入動作
    actions: {
        loadTodos(context) {
            axios.get
            ("https://jsonplaceholder.typicode.com/todos").then(res=>{
                context.commit("setTodos", res.data)
            })
        }
    }
})
export default store