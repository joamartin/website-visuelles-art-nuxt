<template>
  <form>
    <b-field label="Nom">
      <b-input
        name="nom"
        required>
      </b-input>
    </b-field>

    <b-field label="E-mail">
      <b-input
        type="email"
        name="email"
        required
      ></b-input>
    </b-field>

    <b-field label="Message">
      <b-input
        type="textarea"
        name="message"
      ></b-input>
    </b-field>

    <input
      type="hidden"
      name="_gotcha"
    />

    <b-button native-type="submit">Envoyer</b-button>
  </form>
</template>
