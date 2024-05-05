<template>
    <div id="app">
      <div id="main-div">
        <router-view/>
      </div>
    </div>
</template>

<script>
  export default {
    name: "MainPage",
    components: {}
}
</script>

<style>
:root {
  --light: #ffcaca;
  --dark: #300505;
  --ice: #e2e8f0;
  --dark-grey: #010101;
  --blue: #940000;
}

body {
  background: radial-gradient(circle, var(--dark-grey) 100%, var(--dark-grey) 100%);
  height: 100dvh;
  overflow-y: hidden;
  overflow-x: hidden;
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
  background: radial-gradient(circle, rgb(40, 0, 0) 30%, rgb(30, 0, 0) 60%);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-sizing: border-box;
  border: 2px solid var(--ice);
  border-top: none;
  width: 95vw;
  height: 85dvh;
  margin: 0 2.5vw;
}

.main-card {
  background-color: var(--dark-grey);
  border: 2px solid var(--ice);
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.75);
}

.content-wrapper {
  box-sizing: border-box;
  display: flex;
  padding-bottom: calc(2.5dvh - 2px);
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
    height: 87.5dvh;
  }
}
</style>
