<template>
  <div class="main-view" id="RockSession">
    <PageTitle struct="Conheça o" distinguished="ROCK SESSION!" description="Descubra o que é o nosso evento e como foram as edições anteriores!"></PageTitle>
    <div class="content-wrapper">
      <div id="display-info" class="main-card">
        <div id="description" class="info-box main-card">
          <h3 class="topics">SOBRE</h3>
          <p id="event-description">O Rock Session é um evento organizado pela Freak! e é imperdível para a galera do rock em Belo Horizonte! O objetivo é nos unir e abrir espaço para outras bandas e músicos, proporcionando uma noite de muita música de qualidade pra todo mundo!</p>
          <img src="../assets/freak_white.png" id="rs-logo">
        </div>
        <div id="guests">
          <div class="info-box main-card">
            <div class="split">
              <h3 class="topics">BANDA CONVIDADA</h3>
              <a id="band-insta" target="_blank"><img :src="require('../assets/Instagram.png')"></a>
            </div>
            <div class="split">
              <p id="band-description">A cada edição, convidamos uma banda incrível para participar do evento, trazendo diferentes lados do Rock N' Roll pra galera!</p>
              <img id="band-logo" src="../assets/RS/BandSilhouette.png">
            </div>
          </div>
          <div class="info-box main-card">
            <div class="split">
              <h3 class="topics">PARTICIPAÇÃO ESPECIAL</h3>
              <a id="guest-insta" target="_blank"><img :src="require('../assets/Instagram.png')"></a>
            </div>
            <div class="split">
              <p id="guest-description">Sempre reservamos espaço para participações especiais surpreendentes, trazendo artistas talentosos para dividir o palco com a gente!</p>
              <img id="guest-logo" src="../assets/RS/GuestSilhouette.png">
            </div>
          </div>
        </div>
      </div>
      <div class="scrollable" id="display-buttons">
        <div class='button-div' v-for="index in 4" :key="index" v-bind:id="'RS'+index">
          <img class='rs-button' @click="change_event" :src="require('../assets/RS/RS'+index+'.png')">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PageTitle from '../components/PageTitle.vue';

const styles = getComputedStyle(document.documentElement);
var data;
var chosen_rs = "";
const rs_colors = {"RS1": ['#F9E4BD', '#AB160B'], "RS2": ['#613285', '#25E781'], "RS3": ['#3C0A0A', '#FF1616'], "RS4": ['#050A30', '#CAE8FF']}

  export default {
    name: 'RockSessionPage',
    methods: {
      getResponse() {
            const path = 'https://freakapi.azurewebsites.net/rocksession';
            axios.get(path)
                .then((res) => {
                data = res.data;
            })
                .catch((err) => {
                console.error(err);
            });
        },
      change_event(event) {
        if (chosen_rs != ""){
          document.getElementById(chosen_rs).firstChild.style.border = `solid 2px ${ styles.getPropertyValue('--dark-grey') }`;
          document.getElementById(chosen_rs).firstChild.style.boxShadow = ""
        }
        var rs_number = event.target.parentNode.id;
        chosen_rs = rs_number;
        document.getElementById(chosen_rs).firstChild.style.border = `solid 2px ${ rs_colors[rs_number][1] }`;
        document.getElementById(chosen_rs).firstChild.style.boxShadow = `0 0 10px 0 ${ rs_colors[rs_number][1] }`;
        document.getElementById("rs-logo").src = require("@/assets/RS/" + rs_number + ".svg");
        document.getElementById("display-info").style.backgroundColor = rs_colors[rs_number][0];
        document.getElementById("display-info").style.borderColor = rs_colors[rs_number][1];
        document.getElementById("display-info").style.boxShadow = `0 0 10px 0 ${ rs_colors[rs_number][1] }`;
        var class_elements = document.getElementsByClassName("topics");
        for (var class_ind = 0; class_ind < class_elements.length; class_ind++) {
          class_elements[class_ind].style.color = rs_colors[rs_number][1];
        }
        class_elements = document.getElementsByClassName("info-box");
        for (class_ind = 0; class_ind < class_elements.length; class_ind++) {
          class_elements[class_ind].style.borderColor = rs_colors[rs_number][1];
          class_elements[class_ind].style.boxShadow = `0 0 10px 0 ${ rs_colors[rs_number][1] }`;
        }
        rs_number = Number(rs_number.replace("RS", "")) - 1;
        document.getElementById("event-description").innerHTML = data[rs_number][1];
        document.getElementById("band-logo").src = require("@/assets/RS/" + data[rs_number][2] + ".png");
        document.getElementById("band-description").innerHTML = data[rs_number][3];
        document.getElementById("band-insta").style.display = 'flex';
        document.getElementById("band-insta").href = `https://www.instagram.com/${data[rs_number][4]}`;
        document.getElementById("guest-logo").src = require("@/assets/RS/" + data[rs_number][5] + ".png");
        document.getElementById("guest-description").innerHTML = data[rs_number][6];
        document.getElementById("guest-insta").style.display = 'flex';
        document.getElementById("guest-insta").href = `https://www.instagram.com/${data[rs_number][7]}`;
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
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90vw;
  margin: auto;
  margin-bottom: 0%;
  padding-top: 0px;
}

#display-info {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 80vh;
  width: 75vw;
  padding: 10px;
  transition: 0.5s;
}

#display-buttons {
  box-sizing: border-box;
  align-items: center;
  height: 80vh;
  padding: 10px;
}

.button-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vh;
  height: 25vh;
  padding: 2.5px;
  margin: 2.5px;
}

.rs-button {
  border: solid var(--dark-grey) 2px;
  border-radius: 15px;
  width: 100%;
  height: 100%;
}

.info-box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  margin: 20px 0px;
  padding: 20px;
}

#guests, #description {
  width: 45%;
}

#band-insta, #guest-insta {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid transparent 2px;
  border-radius: 7.5px;
  width: 30px;
  height: auto;
  margin-bottom: 7px;
  margin-left: 10px;
  transition: 0.5s;
}

#band-insta img, #guest-insta img{
  width: 100%;
  height: 100%;
}

.info-box h3 {
  color: var(--light);
  height: fit-content;
  transition: 0.5s;
  margin-bottom: 10px;
}

.info-box p {
  color: var(--ice);
}

#description {
  height: fit-content;
  align-self: center;
}

#guests {
  height: fit-content;
}

#rs-logo, #band-logo, #guest-logo {
  width: auto;
  height: 25vh;
  border-radius: 15px;
}

#band-logo, #guest-logo {
  margin-left: 10px;
}

img {
  filter: none;
}

.split {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.scrollable {
  overflow-x: hidden;
  overflow-y: auto;
  margin-left: 15px;
}

@media (min-width:1100px) {
  #band-insta:hover, #guest-insta:hover {
    border: solid var(--light) 2px;
    background-color: var(--dark);
  }

  .button-div:hover {
    padding: 0px;
  }

  .button-div:active {
    padding: 5px;
  }
}

@media (max-width: 1100px) {
  .content-wrapper {
      flex-direction: column-reverse;
      justify-content: space-between;
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
      min-height: 0;
      height: fit-content;
      padding: 10px;
    }

    #display-buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: fit-content;
      margin: 10px;
      margin-top: 0px;
      padding: 0px;
    }

    .button-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25vw;
      height: fit-content;  
      padding: 2.5px;
    }

    .button-div:active {
      padding: 2.5px;
    }
    .rs-button {
      width: 25vw;
      height: 25vw;
    }

    #rs-logo, #guest-logo, #band-logo {
      display: none;
    }

    #band-logo, #guest-logo {
      height: 30vw;
      width: auto;
    }

    .split {
      height: fit-content;
    }

    .scrollable {
      overflow-x: auto;
      overflow-y: hidden;
    }

    ::-webkit-scrollbar {
      width: 15px;
      border-radius: 0.5px;
    }

    /* Make scrollbar visible when needed */
    ::-webkit-scrollbar-thumb {
      background-color: var(--dark-grey);
      border: solid 2px var(--ice);
    }
}
</style>
