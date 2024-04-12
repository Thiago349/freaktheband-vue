<template>
  <a class="styled-a" href="https://www.sympla.com.br/1005-rock-session-freak--aster--escadacima__2394555?d=Site" target="_blank">
    <button class="styled-btn" :id="id_name">
      <p class="styled-p">{{label_text}}</p>
    </button>
  </a>
</template>

<script>
  export default {
    name: 'StyledButton',
    props: {
      label_text: String,
      id_name: String,
    }
  }
</script>

<style>
  .styled-btn {
    display: flex;
    align-self: center;
    justify-content: center;
    background-color: var(--dark-grey);
    color: var(--light);
    border: 2px solid var(--ice);
    border-radius: 10%;
    transition: 0.5s;
  }

  .styled-p {
    display: flex;
    align-self: center;
    justify-content: center;
    margin: 10px 10px;
    font-size: 200px;
    font-weight: bolder;
  }

  .styled-a {
    text-decoration: none;
  }

  @media (min-width: 1100px) {
  .styled-btn:hover {
    background-color: var(--light);
    color: var(--dark-grey);
  }
}
</style>