<template>
  <div id="SocialBar">
    <img id="logo-img" src="../assets/arrowdark.svg">
    <div class="contact-medias">
      <div class="media-block">
        <a href="https://www.instagram.com/freaktheband/" target="_blank"><img class="social-img" src="../assets/Instagram.png"></a>
      </div>
      <div class="media-block">
        <a href="https://www.tiktok.com/@freaktheband" target="_blank"><img class="social-img" src="../assets/TikTok.png"></a>
      </div>
    </div>
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
<style>
  #SocialBar {
    position: absolute;
    bottom: -5vh;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--dark-grey);
    width: 100dvw;
    height: 10dvh;
    transition: 0.5s;
  }

  #logo-img {
    height: 5dvh;
    padding: 5px;
    margin: 0px 20px;
  }

  #SocialBar:hover {
    bottom: 0;
    border-top: 2px solid var(--ice);
  }

  .contact-medias {
    display: flex;
    justify-content: center;
    height: 5dvh;
  }

  .media-block {
    display: flex;
    flex-direction: row;
    margin: 0 20px;
  }

  .media-block a {
    height: 90%;
    width: fit-content;
  }

  .social-name {
    display: flex;
    align-items: center;
    color: var(--ice);
    height: 90%;
    margin-left: 10px;
    padding-bottom: 4px;
  }

  .social-img {
    box-sizing: border-box;
    border-radius: 25%;
    height: 100%;
    padding: 2px;
    transition: 0.2s;
  }

  .social-img:hover {
    background-color: var(--dark);
    padding: 0px;
  }

  @media (max-width: 1100px) {
    #SocialBar {
      height: 0;
      display: none;
    }
  }
</style>
