import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import VideoShow from "../components/VideoShow.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/video",
            component: VideoShow,
        },
    ],
})

export default router
