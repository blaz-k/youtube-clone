<template>
  <div>
    <div :key="Id" v-for="Id in allIds">
      <h2>
        allIds:
        {{ Id }}
      </h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VideoSidebar",
  computed: {
    ...mapState(["allIds"]),
  },
};
</script>

<style></style>
