<template>
  <div>
    <!--
    <div class="col-sm-4" id="videosRight">
      <div class="row">
        <div class="card mb-3" style="">
          <div class="row g-0">
            <div class="col-sm-4 prvi">
              <iframe
                class="img-fluid"
                :src="this.embededSrc + this.vId"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-sm-8">
              <div class="card-body">
                <h5 class="card-title">
                  {{ videoDetails.items[0].snippet.title }}
                </h5>
                <p class="card-text">
                  {{
                    videoDetails.items[0].snippet.description.substring(0, 60)
                  }}
                  /
                </p>
                <p>{{ videoDetails.items[0].statistics.viewCount }} Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>--->

    <div :key="vId" v-for="vId in allIds">
      <VideoShow :video="vId" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VideoShow from "./VideoShow.vue";
export default {
  name: "VideoSidebar",

  computed: {
    ...mapState(["allIds"]),
  },
  components: {
    VideoShow,
  },
};
</script>

<style></style>
