<template>
  <div id="PageTitle">
    <div id="align-title">
      <h1 id="struct">{{ struct }}&nbsp;</h1>
      <h1 id="distinguished">{{ distinguished }}</h1>
    </div>
    <p id="subtitle">{{ description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'PageTitle',
    props: {
      struct: String,
      distinguished: String,
      description: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #PageTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 10vh;
    max-height: fit-content;
    margin: 2.5vh 5vh;
    margin-left: 10vw;
  }

  #align-title {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }

  #subtitle {
    display: flex;
    flex-direction: row;
    justify-content: left;
  }

  #struct {
    color: var(--ice);
    margin: 0px;
  }

  #distinguished {
    font-weight: bold;
    color: var(--light);
    margin: 0px;
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--ice);
    margin: 0px;
  }

  @media (max-width: 1100px) {
    #PageTitle {
      height: fit-content;
      margin: 20px auto;
    }

    #align-title, #subtitle {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
