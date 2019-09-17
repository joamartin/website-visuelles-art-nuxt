<template>
  <li>
    <div class="columns">
      <div :class="['column is-half', { 'is-hidden-tablet': align === 'left' }]">
        <video-profile
          :video="video"
          :align="align"
        ></video-profile>
      </div>
      <div class="column is-half video-container">
        <video-iframe
          :url="video.url"
          width="100%"
          height="400px"
        />
      </div>
      <div
        v-if="align === 'left'"
        class="column is-half is-hidden-mobile"
      >
        <video-profile
          :video="video"
          :align="align"
        ></video-profile>
      </div>
    </div>
  </li>
</template>

<script>

import VideoIframe from './VideoIframe'
import VideoProfile from './VideoProfile'

export default {
  name: 'VideoListItem',

  components: {
    VideoIframe,
    VideoProfile
  },

  props: {
    video: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    }
  },

  computed: {
    align () {
      return this.index % 2 === 0 ? 'right' : 'left'
    }
  }
}

</script>

<style lang="scss" scoped>

@import "~bulma/sass/utilities/_all";

li {
  margin-bottom: 6rem;
}

.column {
  padding: 0 1.2rem;
}

.video-container {
  padding-top: 1rem;
}

@media (min-width: $tablet) {
  .video-container {
    padding-top: 0;
  }
}

</style>
