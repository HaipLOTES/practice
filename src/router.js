import {createRouter, createWebHashHistory} from 'vue-router'
import Search from './components/Search.vue'
import Primary from './components/Primary.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Primary},
        { path: '/search', component: Search}
    ]
})