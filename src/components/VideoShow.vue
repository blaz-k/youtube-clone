<template>
  <div>
    <h1>Video</h1>
    <div>{{ video }}</div>
  </div>
</template>

<script>
import axios from "axios";
//URL: https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=APIKEY&part=snippet,contentDetails,statistics,status
export default {
  name: "VideoShow",
  props: ["video"],
  created() {
    this.getData();
    console.log("this data :" + this.getData());
  },
  data() {
    return {
      api_key: "AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",
      url: "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=",
      second_url: "&part=snippet,contentDetails,statistics,status",
      complete_address: null,
    };
  },
  methods: {
    async getData() {
      let response = await axios.get(
        `${this.url}${this.api_key}${this.second_url}`
      );
      this.complete_address = response.data;
      console.log("HElou");
      console.log(this.complete_address);
    },
  },
};
</script>

<style></style>
