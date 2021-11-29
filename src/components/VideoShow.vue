<template>
  <div v-if="complete_address" @click="videoShowDetails">
    <div class="col">
      <div class="card h-100">
        <img
          :src="complete_address.items[0].snippet.thumbnails.high.url"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">
            {{ complete_address.items[0].snippet.title }}
          </h5>
          <p class="card-text"></p>
          <p class="card-text">
            <small class="text-muted"
              >{{ complete_address.items[0].statistics.viewCount }} Views .
              {{ newDate }}</small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

//URL: https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=APIKEY&part=snippet,contentDetails,statistics,status
export default {
  name: "VideoShow",
  props: ["video"],
  computed: {
    newDate() {
      let date = new Date(this.complete_address.items[0].snippet.publishedAt);
      return moment(date).format("DD/MM/YYYY");
    },
  },
  created() {
    this.getData();
  },
  data() {
    return {
      api_key: "AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",
      url: "https://www.googleapis.com/youtube/v3/videos?id=",
      second_url: "&part=snippet,contentDetails,statistics,status",
      complete_address: null,
    };
  },
  methods: {
    async getData() {
      let response = await axios.get(
        `${this.url}${this.video}&key=${this.api_key}${this.second_url}`
      );
      this.complete_address = response.data;
      console.log(this.complete_address);
    },
    videoShowDetails() {
      console.log(this.video);
      this.$router.push({
        name: "VideoDetails",
        params: {
          vId: this.video,
        },
      });
    },
  },
};
</script>

<style></style>
