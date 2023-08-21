<template>
    <div id="app">
      <TopBar></TopBar>
      <div id="main-div">
        <router-view/>
      </div>
    </div>
</template>

<script>
  import TopBar from './components/TopBar.vue';

  export default {
    name: "MainPage",
    components: { TopBar }
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
  min-height: 87.5vh;
  margin: 0 2.5vw;
  margin-bottom: 2.5vh;
}

.content-wrapper {
  display: flex;
  min-height: 72.5vh;
  padding-bottom: 2.5vh;
}

@media (max-width: 1100px) {
  .content-wrapper {
    padding: 2.5vw;
    padding-top: 0;
  }
}
</style>
