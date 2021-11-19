import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import Video from "../components/Video.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/video",
            component: Video,
        },
    ],
})

export default router