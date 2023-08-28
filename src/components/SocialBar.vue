<template>
  <div id="SocialBar">
    <img id="logo-img" src="../assets/arrowdark.svg">
  </div>
</template>

<script>
//const styles = getComputedStyle(document.documentElement);
var activated = 0;


  export default {
    name: 'SocialBar',
    methods: {
      expand_bar(){
        if (activated==0){
          activated=1;
        }
        else {
          activated=0;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #SocialBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--dark-grey);
    width: 100%;
    height: 5dvh;
  }

  #SocialBar img {
    height: 100%;
    padding: 5px;
    margin: 0px 20px;
    transition: 0.1s;
  }

  @media (max-width: 1100px) {
    #SocialBar {
      height: 0;
      display: none;
    }
  }
</style>
