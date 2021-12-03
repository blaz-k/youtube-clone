<template>
  <header
    class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
  >
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"
      >YouTubeClone</a
    >
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <input
      class="form-control form-control-dark w-100"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">Sign out</a>
      </div>
    </div>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >Home</router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/" class="nav-link">Video</router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="shopping-cart"></span>
                Subscriptions
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="users"></span>
                Library
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                History
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="layers"></span>
                Your Videos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="layers"></span>
                Watch Later
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="layers"></span>
                Liked Videos
              </a>
            </li>
          </ul>

          <h6
            class="
              sidebar-heading
              d-flex
              justify-content-between
              align-items-center
              px-3
              mt-4
              mb-1
              text-muted
            "
          >
            <span class="homeSpan">Subscriptions</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Blaž Kmetič
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Someone Else
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                And Someone Else
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="
            d-flex
            justify-content-between
            flex-wrap flex-md-nowrap
            align-items-center
            pt-3
            pb-2
            mb-3
            border-bottom
          "
        >
          <h1 class="h2">Dashboard</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Share
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Export
              </button>
            </div>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span data-feather="calendar"></span>
              This week
            </button>
          </div>
        </div>
        <div v-if="videoDetails" id="videoDetails">
          <div class="row">
            <div class="col-sm-8">
              <div class="card border-dark">
                <iframe
                  width="100%"
                  height="350rem"
                  :src="this.embededSrc + this.vId"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <div class="card-body">
                  <h5 class="card-title">
                    {{ videoDetails.items[0].snippet.title }}
                  </h5>
                  <p class="card-text">
                    {{
                      videoDetails.items[0].snippet.description.substring(
                        0,
                        200
                      )
                    }}
                  </p>
                  <div class="card-text details">
                    <p>
                      {{ videoDetails.items[0].statistics.viewCount }} Views
                    </p>

                    <small class="text-muted"
                      ><i class="far fa-thumbs-up"
                        >{{ videoDetails.items[0].statistics.likeCount }}
                      </i>

                      <i class="fas fa-thumbs-down">
                        {{ videoDetails.items[0].statistics.dislikeCount }}
                      </i>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4" id="videosRight">
              <div class="row">
                <VideoSidebar />
                <!--

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
                            videoDetails.items[0].snippet.description.substring(
                              0,
                              60
                            )
                          }}
                          /
                        </p>
                        <p>
                          {{ videoDetails.items[0].statistics.viewCount }} Views
                        </p>
                      </div>
                    </div>
                  </div>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import VideoSidebar from "../components/VideoSidebar.vue";

export default {
  name: "VideoDetails",
  props: ["vId"],
  created() {
    this.oneVideo();
  },
  computed: {
    ...mapState(["allIds"]),
  },
  components: {
    VideoSidebar,
  },
  data() {
    return {
      api_key: "AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",
      url: "https://www.googleapis.com/youtube/v3/videos?id=",
      second_url: "&part=snippet,contentDetails,statistics,status",
      videoDetails: null,
      sideVideos: null,
      embededSrc: "https://www.youtube.com/embed/",
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
  },
};
</script>

<style>
#videosRight p {
  font-size: 10px;
}

#videosRight h5 {
  font-size: 12px;
}

.prvi {
  display: flex;
  align-items: center;
}

.row {
  border: none;
}

#videoDetails .fas {
  margin-left: 2vh;
}

#videoDetails .details {
  display: flex;
  justify-content: space-between;
}
</style>
