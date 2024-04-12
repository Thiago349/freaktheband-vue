<template>
  <div class="main-view" id="RS05">
    <PageTitle struct="Lançamento de Lillith" distinguished="ROCK SESSION 05" description="Clique no vídeo abaixo e conheça o maior evento de Rock N Roll jovem de BH!"></PageTitle>
    <div class="content-wrapper">
      <iframe class="styled-iframe" src="https://www.youtube.com/embed/3c-YHNb5-hs?si=biAe2Q5a0VipXlot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  justify-content: center;
  height: 82.5vh;
}

.contact-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
}

.styled-iframe {
  width: calc(64vw);
  aspect-ratio: 16/9;
  border-radius: 10px;
  border: solid 5px var(--ice);
  background-color: var(--dark-grey);
  overflow: hidden;
}

@media (max-width: 1100px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  #form {
    min-height: 100%;
    width: 100%;
  }

  .styled-iframe {
    width: calc(88vw);
    height: calc(49.5vw);
  }
}
</style>
