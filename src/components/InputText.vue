<template>
  <div id="InputText">
    <label class="input-label"> {{ label_text }}</label>
    <input autocomplete="off" class="input-text" type="text" :id="id_name" :name="id_name">
  </div>
</template>

<script>
  export default {
    name: 'InputText',
    props: {
      label_text: String,
      id_name: String,
    }
  }
</script>

<style>
  #InputText {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .input-label {
    display: flex;
    align-items: center;
    color: var(--ice);
  }

  .input-text {
    background-color: transparent;
    color: var(--ice);
    border: none;
    border-bottom: solid var(--ice) 2px;
    width: 250px;
    padding: 5px;
    margin-left: 20px;
    outline: none;
    transition: 0.5s;
  }

  .input-text:focus {
    border-bottom: solid rgb(81, 203, 238) 2px;
    box-shadow: 0 0 10px 0 rgba(81, 203, 238, 1);
  }

  .input-text:hover {
    box-shadow: 0 0 10px 0 rgb(81, 203, 238);
  }
</style>