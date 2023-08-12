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
  background: radial-gradient(circle, rgba(5,10,48,1) 25%, rgba(1,1,1,1) 100%);
}

h1 {
  font-size: 40px !important;
}

h2 {
  font-size: 32px !important;
}

h3 {
  font-size: 24px !important; 
}

p {
  font-size: 16px !important;
}

#main-div {
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (max-width: 1100px) {
  h1 {
    font-size: 44px !important;
  }

  h2 {
    font-size: 36px !important;
  }

  h3 {
    font-size: 28px !important; 
  }

  p {
    font-size: 20px !important;
  }
}
</style>
