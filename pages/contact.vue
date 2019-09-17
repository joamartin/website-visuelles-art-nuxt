<template>
  <section class="container section">
    <formcarry-form form-id="xgbGNsrDeNs" class="contact-container">
      <contact-form slot="form"></contact-form>
      <contact-form-loading slot="loading"></contact-form-loading>
      <contact-form-success slot="success"></contact-form-success>
      <contact-form-error slot="error"></contact-form-error>
    </formcarry-form>
  </section>
</template>

<script>

import ContactForm from '@/components/ContactForm'
import ContactFormLoading from '@/components/ContactFormLoading'
import ContactFormSuccess from '@/components/ContactFormSuccess'
import ContactFormError from '@/components/ContactFormError'
import FormcarryForm from '@/components/FormcarryForm'

export default {
  head () {
    return { title: 'Contact - Visuelles.art' }
  },

  components: {
    ContactForm,
    ContactFormLoading,
    ContactFormSuccess,
    ContactFormError,
    FormcarryForm
  }
}

</script>

<style>

.contact-container {
  max-width: 300px;
  margin: auto;
}

</style>
