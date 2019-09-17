<template>
  <div class="contact-form-loading-container">
    <b-loading
      :active="true"
      :can-cancel="false"
      :is-full-page="false"
    ></b-loading>
  </div>
</template>

<style>

.contact-form-loading-container {
  min-height: 300px;
}

</style>
