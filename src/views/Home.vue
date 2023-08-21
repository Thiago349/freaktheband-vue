<template>
  <div class="main-view" id="Home">
    <PageTitle struct="Bem-vindo ao site da" distinguished="FREAK!" description="Saiba mais sobre o quarteto de Rock N' Roll belo-horizontino!"></PageTitle>
    <div class="content-wrapper">  
        <img id="main-img" src="../assets/main_img.jpeg">
        <div id="news">
            <h2 id="news-title">Novidades</h2>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import PageTitle from '../components/PageTitle.vue'
  export default {
    name: 'HomePage',
    methods: {
        getResponse() {
            const path = 'https://freakapi.azurewebsites.net/news';
            axios.get(path)
                .then((res) => {
                var data = res.data;
                data.map((row) => {
                    document.getElementById('news').innerHTML += `<div class='db-row' id='${row[0]}'></div>`;
                    document.getElementById(row[0]).innerHTML += `<h3>${row[1]}</h3>`;
                    document.getElementById(row[0]).innerHTML += `<p>${row[2]}</p>`;
                });
            })
                .catch((err) => {
                console.error(err);
            });
        },
    },
    created() {
        this.getResponse(); 
    },
    components: { PageTitle }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-wrapper {
    flex-direction: row;
    justify-content: center;
}

#main-img {
    border: solid var(--ice) 2px;
    border-radius: 15px;
    width: auto;
    height: 70vh;
    margin: 0 2.5vh;
}

#news {
    display: flex;
    flex-direction: column;
    background-color: var(--dark-grey);
    border: solid var(--ice) 2px;
    border-radius: 15px;
    height: 70vh;
    margin: 0 2.5vh;
    padding: 10px;
}

#news-title {
    text-align: center;
    background-color: var(--light);
    border-radius: 10px;
    color: var(--dark-grey);
    width: 100%;
}

@media (max-width: 1100px) {
    .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95vw;
        margin: auto;
    }

    #main-img, #news {
        width: 100%;
        height: auto;
    }

    #main-img {
        margin-bottom: 20px;
    }
}
</style>

<style>
.db-row {
    margin: 10px 0px;
}

.db-row h3 {
    color: var(--light);
}

.db-row p {
    color: var(--ice);
}
</style>