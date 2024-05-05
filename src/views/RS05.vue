<template>
  <div class="main-rs" id="RS05">
    <PageTitle struct="Lançamento de Lillith" distinguished="ROCK SESSION 05"></PageTitle>
    <div class="content">
      <iframe class="styled-iframe" src="https://www.youtube.com/embed/AJ2AkwruBCM?si=Y6CpKE5eIblhcw05" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <StyledButton label_text="SYMPLA"></StyledButton>
    </div>
  </div>
</template>

<script>
  import PageTitle from '../components/PageTitle.vue';
  import StyledButton from '../components/StyledButton.vue';

  export default {
    name: 'RS05Page',
    components: { PageTitle, StyledButton }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  justify-content: center;
}

.main-rs {
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, rgb(40, 0, 0) 30%, rgb(30, 0, 0) 60%);
  box-sizing: border-box;
  border: 2.5px solid var(--ice);
  border-top: none;
  border-bottom: none;
  width: 95vw;
  height: 100dvh;
}

.styled-iframe {
  width: calc(64vw);
  aspect-ratio: 16/9;
  border-radius: 10px;
  border: solid 2.5px var(--ice);
  background-color: var(--dark-grey);
  overflow: hidden;
}

@media (max-width: 1100px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }

  .styled-iframe {
    width: calc(88vw);
    height: calc(49.5vw);
  }
}
</style>
