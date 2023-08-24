<template>
  <div id="InputTextArea">
    <label class="input-label"> {{ label_text }}</label>
    <textarea autocomplete="off" rows=6 class="input-text-area" type="text" :v-model="v_model" :id="id_name" :name="id_name"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'InputTextArea',
    props: {
      label_text: String,
      id_name: String,
      v_model: String
    }
  }
</script>

<style>
  #InputTextArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-bottom: 15px;
  }

  .input-label {
    display: flex;
    align-items: center;
    color: var(--ice);
  }

  .input-text-area {
    background-color: transparent;
    color: var(--ice);
    border: none;
    border: solid var(--ice) 2px;
    width: 100%;
    padding: 5px;
    outline: none;
    margin-top: 10px;
    transition: 0.5s;
  }

  .input-text-area:focus {
    border: solid rgb(81, 203, 238) 2px;
    box-shadow: 0 0 10px 0 rgba(81, 203, 238, 1);
  }

  .input-text-area:hover {
    box-shadow: 0 0 10px 0 rgb(81, 203, 238);
  }

  @media (max-width: 1100px) {
    #InputTextArea {
      flex-direction: column;
      align-items: center;
    }

    .input-text-area {
      width: 90%;
    }
  }
</style>