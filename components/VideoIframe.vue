<template>
  <div :style="{ display: 'inline-block', width, height }">
    <iframe
      :style="{ width, height }"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      @load="loading = false"
    >
    </iframe>
    <b-loading
      :is-full-page="false"
      :active="loading"
    ></b-loading>
  </div>
</template>

<script>

export default {
  name: 'VideoIframe',

  props: {
    url: {
      type: String,
      required: true
    },

    width: {
      type: String,
      default: '100%'
    },

    height: {
      type: String,
      default: 'auto'
    }
  },

  data () {
    return {
      loading: true
    }
  }
}

</script>
