import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import VideoDetails from "../components/VideoDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/video/:vId",
      name: "VideoDetails",
      component: VideoDetails,
      props: true,
    },
  ],
});

export default router;
