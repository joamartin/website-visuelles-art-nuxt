<template>
  <div class="formcarry-form-container">
    <div v-if="state === 'loading'">
      <slot name="loading"></slot>
    </div>
    <div v-else-if="state === 'success'">
      <slot name="success"></slot>
    </div>
    <div v-else-if="state === 'error'">
      <slot name="error"></slot>
    </div>
    <div
      v-else
      class="form-container"
      @submit.stop.prevent="postData(getFormData($event))"
    >
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'formcarryForm',

  data () {
    return {
      state: 'idle'
    }
  },

  props: {
    formId: {
      type: String,
      required: true
    }
  },

  methods: {
    getFormData (ev) {
      let data = {}

      for (let i = 0; i < ev.target.length; i++) {
        data[ev.target[i].name] = ev.target[i].value
      }

      return data
    },

    postData: async function (data) {
      this.state = 'loading'
      const resp = await axios.post(`https://formcarry.com/s/${this.formId}`, data)
      this.state = resp.status !== 200 ? 'error' : 'success'
    }
  }
}

</script>
