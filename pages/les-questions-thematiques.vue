<template>
  <section class="container" :style="{ 'max-width': '1216px' }">
    <video-list :videos="videos"></video-list>
  </section>
</template>

<script>

import videos from '@/assets/videos.json'
import VideoList from '@/components/VideoList'

export default {
  components: {
    VideoList
  },

  data () {
    return {
      videos: videos.filter(video => video.type === 'short')
    }
  },

  head () {
    return { title: 'Les questions thématiques - Visuelles.art' }
  }
}

</script>
