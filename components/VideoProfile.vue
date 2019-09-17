<template>
  <div :class="['video-profile', `align-last-${align}`]">
    <h2>{{ video.title }}</h2>
    <h3>{{ video.subtitle }}</h3>
    <div class="interview-description" v-html="video.description"></div>
  </div>
</template>

<script>

export default {
  name: 'VideoProfile',

  props: {
    video: {
      type: Object,
      required: true
    },

    align: {
      type: String,
      default: val => val === 'right' ? 'right' : 'left'
    }
  }
}

</script>

<style scoped>

h2 {
  margin-top: 2rem;
}

h3 {
  padding: 0.5rem 0;
}

.video-profile {
  text-align: justify;
}

@supports ((text-align-last: right) and (text-align-last: left)) {
  .align-last-right {
    text-align-last: right;
  }

  .align-last-right h3 {
    margin-left: 60px;
  }

  .align-last-left {
    text-align-last: left;
  }

  .align-last-left h3 {
    margin-right: 60px;
  }
}

</style>
