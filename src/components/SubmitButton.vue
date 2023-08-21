<template>
  <input class="submit-btn" type="submit" :value="label_text" :id="id_name">
</template>

<script>
  export default {
    name: 'SubmitButton',
    props: {
      label_text: String,
      id_name: String,
    }
  }
</script>

<style>
  .submit-btn {
    display: flex;
    align-self: center;
    background-color: var(--dark-grey);
    color: var(--light);
    border: 2px solid var(--ice);
    border-radius: 10%;
    transition: 0.5s;
  }

  .submit-btn:hover {
    background-color: var(--light);
    color: var(--dark-grey);
  }
</style>