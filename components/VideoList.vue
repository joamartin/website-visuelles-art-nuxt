<template>
  <ul>
    <video-list-item
      v-for="(video, index) in videos"
      :key="video.url"
      :video="video"
      :index="index"
    ></video-list-item>
  </ul>
</template>

<script>

import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',

  components: {
    VideoListItem
  },

  props: {
    videos: {
      type: Array,
      required: true
    }
  }
}

</script>
