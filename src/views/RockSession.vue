<template>
  <div id="RockSession">
    <PageTitle struct="Conheça o" distinguished="ROCK SESSION!" description="Descubra o que é o nosso evento e como foram as edições anteriores!"></PageTitle>
    <div id="content-wrapper">
      <div id="display-info">
        <div id="description" class="info-box">
          <h3 class="topics">SOBRE</h3>
          <p id="event-description">O Rock Session é um evento organizado pela Freak! e é imperdível para a galera do rock em Belo Horizonte! O objetivo é nos unir e abrir espaço para outras bandas e músicos, proporcionando uma noite de muita música de qualidade pra todo mundo!</p>
          <img src="../assets/freak_white.png" id="rs-logo">
        </div>
        <div id="guests">
          <div class="info-box">
            <div class="split">
              <h3 class="topics">BANDA CONVIDADA</h3>
              <a id="band-insta" target="_blank"><img :src="require('../assets/RS/Instagram.png')"></a>
            </div>
            <div class="split">
              <p id="band-description">A cada edição, convidamos uma banda incrível para participar do evento, trazendo diferentes lados do Rock N' Roll pra galera!</p>
              <img id="band-logo" src="../assets/RS/BandSilhouette.png">
            </div>
          </div>
          <div class="info-box">
            <div class="split">
              <h3 class="topics">PARTICIPAÇÃO ESPECIAL</h3>
              <a id="guest-insta" target="_blank"><img :src="require('../assets/RS/Instagram.png')"></a>
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
        }
        var rs_number = event.target.parentNode.id;
        chosen_rs = rs_number;
        document.getElementById(chosen_rs).firstChild.style.border = `solid 2px ${ styles.getPropertyValue('--ice') }`;
        document.getElementById("rs-logo").src = require("@/assets/RS/" + rs_number + ".svg");
        document.getElementById("display-info").style.backgroundColor = rs_colors[rs_number][0];
        document.getElementById("display-info").style.borderColor = rs_colors[rs_number][1];
        var class_elements = document.getElementsByClassName("topics");
        for (var class_ind = 0; class_ind < class_elements.length; class_ind++) {
          class_elements[class_ind].style.color = rs_colors[rs_number][1];
        }
        class_elements = document.getElementsByClassName("info-box");
        for (class_ind = 0; class_ind < class_elements.length; class_ind++) {
          class_elements[class_ind].style.borderColor = rs_colors[rs_number][1];
        }
        rs_number = Number(rs_number.replace("RS", "")) - 1;
        console.log(data[rs_number]);
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

#content-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-grey);
  border: solid var(--ice) 2px;
  border-radius: 15px;
  width: 90vw;
  min-height: 95vh;
  margin: auto;
  margin-bottom: 0%;
  padding: 2.5vh;
}

#display-info {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--dark-grey);
  border: solid var(--ice) 2px;
  border-radius: 15px;
  width: 70vw;
  min-height: 95vh;
  padding: 10px;
  transition: 0.5s;
}

#display-buttons {
  box-sizing: border-box;
  align-items: center;
  height: 95vh;
  padding: 10px;
}

.button-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vh;
  height: 30vh;
  padding: 2.5px;
}

.rs-button {
  border: solid var(--dark-grey) 2px;
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
  border: solid var(--ice) 2px !important;
}

.info-box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--dark-grey);
  border: solid var(--ice) 2px;
  border-radius: 15px;
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

#band-insta:hover, #guest-insta:hover {
  border: solid var(--light) 2px;
  background-color: var(--dark);
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

@media (max-width: 1100px) {
  #content-wrapper {
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
      min-height: 0;
      height: fit-content;
      padding: 10px;
    }

    #display-buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: fit-content;
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
      margin-top: 10px;
      margin-bottom: 10px;
    }

    ::-webkit-scrollbar {
      height: 15px;
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
