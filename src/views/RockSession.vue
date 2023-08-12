<template>
  <div id="RockSession">
    <PageTitle struct="Conheça o" distinguished="ROCK SESSION!" description="Descubra o que é o nosso evento e como foram as edições anteriores!"></PageTitle>
    <div class="content-wrapper">
      <div id="display-info">
        <div id="description" class="info-box">
          <h3>SOBRE</h3>
          <p>O Rock Session é um evento organizado pela Freak! e é imperdível para a galera do rock em Belo Horizonte! O objetivo é nos unir e abrir espaço para outras bandas e músicos, proporcionando uma noite de muita música de qualidade pra todo mundo!</p>
        </div>
        <div id="guests">
          <div class="info-box">
            <h3>BANDA CONVIDADA</h3>
            <p>A cada edição, convidamos uma banda incrível para participar do evento, trazendo diferentes lados do Rock N' Roll pra galera!</p>
          </div>
          <div class="info-box">
            <h3>PARTICIPAÇÃO ESPECIAL</h3>
            <p>Sempre reservamos espaço para participações especiais surpreendentes, trazendo artistas talentosos para dividir o palco com a gente!</p>
          </div>
        </div>
      </div>
      <div id="display-buttons">
        <div class='button-div' v-for="index in 3" :key="index" v-bind:id="'RS'+index">
          <img class='rs-button' :src="require('../assets/RS/RS'+index+'.png')">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PageTitle from '../components/PageTitle.vue';
var data;

  export default {
    name: 'RockSessionPage',
    methods: {
      getResponse() {
            const path = 'http://localhost:5000/rocksession';
            axios.get(path)
                .then((res) => {
                data = res.data;
                console.log(data);
            })
                .catch((err) => {
                console.error(err);
            });
        }
    },
    created() {
        this.getResponse();
    },
    components: { PageTitle },
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#RockSession {
  width: 100%;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
  background-color: var(--dark-grey);
  border: solid var(--ice) 2px;
  border-radius: 15px;
  width: 90vw;
  height: 100vh;
  margin: auto;
}

#display-info {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--dark-grey);
  width: 70vw;
  height: 100%;
  padding: 10px;
}

#display-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: fit-content;
  padding: 10px;
}

.button-div {
  width: 30vh;
  height: 30vh;
  padding: 2.5px;
}

.rs-button {
  border: solid var(--dark) 2px;
  border-radius: 15px;
  width: 100%;
  height: 100%;
}

.button-div:hover {
  padding: 1.25px;
}

.button-div:active {
  padding: 5px;
}

.button-div:hover > .rs-button {
  border: solid var(--ice) 2px;
}

.info-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid var(--ice) 2px;
  border-radius: 15px;
  margin: 20px 0px;
  padding: 20px;
}

#guests, #description {
  width: 45%;
}

.info-box h3 {
  color: var(--light);
}

.info-box p {
  color: var(--ice);
}

#description {
  height: fit-content;
}

#guests {
  height: fit-content;
}

@media (max-width: 1100px) {
  .content-wrapper {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        padding: 10px;
        height: fit-content;
    }

    #description, #guests {
      width: 100%;
    }

    .info-box {
      margin-top: 0%;
    }

    #description {
      margin-top: 10px;
    }

    .calendar {
        height: auto;
        margin: 20px auto;
    }

    #display-info {
      flex-direction: column;
      width: 100%;
      height: fit-content;
      padding: 2.5px;
    }

    #display-buttons {
      flex-direction: row;
      width: 100%;
      height: fit-content;
      padding: 0px;
    }

    .button-div {
      width: 33%;
      height: auto;
    }
    .rs-button {
      width: 100%;
    }
}
</style>
