<template>
  <div class="main-view" id="Musicas">
    <PageTitle struct="Nossas músicas" distinguished="AUTORAIS!" description="Leia a letra de todas as músicas da banda!"></PageTitle>
    <div class="content-wrapper">
      <div class="scrollable" id="display-buttons">
        <div class="button-div" v-for="music, index in musics" :key="index" >
          <button @click="change_music" class="btn music-btn" v-bind:id="music"> {{ music }} </button>
        </div>
      </div>
      <div id="display-music">
        <img id="music-image">
        <h3 id="music-text"> Selecione uma música! </h3>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
const styles = getComputedStyle(document.documentElement);

  export default {
    name: 'MusicasPage',
    data() {
      return {
        musics: ["Lillith", "Marie"],
        selected_music: ""
      }
    },
    methods: { change_music(event) {
        document.getElementById("music-image").src = require(`@/assets/Letras/${event.target.id}.png`);
        document.getElementById("music-image").style.display = 'flex';
        document.getElementById("music-text").style.display = 'none';
        if (this.selected_music != "") {
          document.getElementById(this.selected_music).style.color = styles.getPropertyValue("--light")
          document.getElementById(this.selected_music).style.backgroundColor = styles.getPropertyValue("--dark-grey")
        }
        document.getElementById(event.target.id).style.color = styles.getPropertyValue("--dark-grey")
        document.getElementById(event.target.id).style.backgroundColor = styles.getPropertyValue("--light")
        this.selected_music = event.target.id
      }
    },
    components: { PageTitle },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Musicas {
    width: 100%;
  }

  .content-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin: 0 1.25vw;
  }

  .music-btn {
    border: solid var(--light) 2px;
    border-radius: 10%;
    background-color: var(--dark-grey);
    color: var(--light);
    font-size: 28px;
    transition: 0.5s;
  }

  .music-btn:hover{
    background-color: var(--light) !important;
    color: var(--dark) !important;
  }

  .button-div {
    width: fit-content;
    margin: 10px 10px;
  }

  #display-buttons {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .scrollable {
    overflow-x: hidden;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 15px;
    background-color: var(--dark-grey);
    border-radius: 0.5px;
  }

  /* Make scrollbar visible when needed */
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-grey);
    border: solid 2px var(--ice);
  }

  #display-music {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid var(--light) 2px;
    border-radius: 15px;
    width: 100%;
    min-height: 70vh;
    margin: 0px 10px;
  }

  #music-image {
    display: none;
    border-radius: 15px;
    width: 100%;
    height: auto;
  }

  #music-text {
    color: var(--light);
  }

  @media (max-width: 1100px) {
    .content-wrapper {
      flex-direction: column;
      align-items: center;
    }

    #display-music {
      margin: 0;
    }

    #display-buttons {
      flex-direction: row;
      padding-top: 0%;
      width: calc(90vw - 40px);
    }

    .scrollable {
      overflow-x: auto;
      overflow-y: hidden;
    }

    ::-webkit-scrollbar {
      width: 15px;
      background-color: var(--dark-grey);
      border-radius: 0.5px;
    }

    /* Make scrollbar visible when needed */
    ::-webkit-scrollbar-thumb {
      background-color: var(--dark-grey);
      border: solid 2px var(--ice);
    }
  }
</style>
