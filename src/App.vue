<template>
    <div id="app">
      <TopBar></TopBar>
      <div id="main-div">
        <router-view/>
      </div>
      <SocialBar></SocialBar>
    </div>
</template>

<script>
  import TopBar from './components/TopBar.vue';
  import SocialBar from './components/SocialBar.vue';

  export default {
    name: "MainPage",
    components: { TopBar, SocialBar }
}
</script>

<style>
:root {
  --light: #CAE8FF;
  --dark: #050a30;
  --ice: #e2e8f0;
  --dark-grey: #010101;
}

body {
  background: radial-gradient(circle, var(--dark-grey) 100%, var(--dark-grey) 100%);
  height: 100dvh;
  overflow-y: hidden;
}

h1 {
  font-size: 34px !important;
}

h2 {
  font-size: 28px !important;
}

h3, label {
  font-size: 22px !important; 
}

p, input {
  font-size: 16px !important;
}

#main-div {
  display: flex;
  justify-content: center;
  width: 100%;
}

.main-view {
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: radial-gradient(circle, rgb(0, 0, 40) 30%, rgb(0, 0, 30) 60%);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-sizing: border-box;
  border: 2px solid var(--ice);
  border-top: none;
  width: 95vw;
  height: 85vh;
  margin: 0 2.5vw;
}

.content-wrapper {
  box-sizing: border-box;
  display: flex;
  padding-bottom: calc(2.5vh - 2px);
}

::-webkit-scrollbar {
  width: 15px;
  background-color: transparent;
  border-radius: 5px;
}

/* Make scrollbar visible when needed */
::-webkit-scrollbar-thumb {
  background-color: var(--dark-grey);
  border: solid var(--ice) 2px;
  border-radius: 5px;
}
@media (max-width: 1100px) {
  .content-wrapper {
    padding: 2.5vw;
    padding-top: 0;
  }

  .main-view {
    height: 80vh;
  }
}
</style>
