<template>
  <div v-if="videoDetails">
    <div class="row">
      <div class="col-sm-8">
        <div class="card">
          <img
            :src="videoDetails.items[0].snippet.thumbnails.maxres.url"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              {{ videoDetails.items[0].snippet.title }}
            </h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="row">
          <div class="card mb-3" style="">
            <div class="row g-0">
              <div class="col-md-6">
                <!----------------  col md-6, md-6 or maybe md-4, md-8 ---------------->
                <img
                  :src="videoDetails.items[0].snippet.thumbnails.maxres.url"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">Title(smaller)</h5>
                  <p class="card-text">
                    Need to make smaller letters to fill in cards
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Smallers as wel</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VideoDetails",
  props: ["vId"],
  created() {
    this.oneVideo();
    this.allSideVideos();
  },
  data() {
    return {
      api_key: "AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",
      url: "https://www.googleapis.com/youtube/v3/videos?id=",
      second_url: "&part=snippet,contentDetails,statistics,status",
      videoDetails: null,
      sideVideos: null,
    };
  },
  methods: {
    async oneVideo() {
      let response = await axios.get(
        `${this.url}${this.vId}&key=${this.api_key}${this.second_url}`
      );
      this.videoDetails = response.data;
      console.log("video details:");
      console.log(this.videoDetails);
    },

    async allSideVideos() {
      let res = await axios.get(
        `${this.url}${this.vId}&key=${this.api_key}${this.second_url}`
      );
      this.sideVideos = res.data;
      console.log("side videos: ");
      console.log(this.sideVideos);
    },
  },
};
</script>

<style>
p {
  font-size: 8px;
}
</style>
