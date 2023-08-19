<template>
  <div id="TopBar">
    <ul>
      <img id="menu-img" src="../assets/menudark.svg">
      <li><router-link id='home' to='/home' class="btn btn-top-bar">Home</router-link></li>
      <li><router-link id='agenda' to='/agenda' class="btn btn-top-bar">Agenda</router-link></li>
      <li><router-link id='rocksession' to='/rocksession' class="btn btn-top-bar">Rock Session</router-link></li>
      <li><router-link id='musicas' to='/musicas' class="btn btn-top-bar">Músicas</router-link></li>
      <li><router-link ide='contato' to='/contato' class="btn btn-top-bar">Contato</router-link></li>
      <img id="logo-img" src="../assets/logo.svg">
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TopBar',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #TopBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--dark-grey);
    border-bottom: solid var(--light) 2px;
    width: 100%;
    height: 10vh;
  }

  #TopBar img {
    height: 100%;
    padding: 5px;
    margin: 0px 20px;
    transition: 0.1s;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15vw;
    height: 100%;
  }

  .btn-top-bar {
    display: none;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: solid 1px transparent;
    border-radius: 0px;
    color: var(--light);
    font-size: 24px;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    transition: 0.2s;
  }

  

  @media (min-width:1100px) {
    .btn-top-bar:hover {
      background-color: var(--light);
      color: var(--dark);
      border-color: var(--light);
      font-size: 28px;
    }
    div ul:hover >  li  > .btn-top-bar{
      display: flex;
    }

    div ul:hover >  #menu-img {
      padding: 2px;
    }

    div ul:hover > #logo-img {
      padding: 2px;
    }

    #menu-img:hover {
      background-color: var(--dark);
    }
  }

  @media (max-width: 1100px) {
    #TopBar {
      height: fit-content;
    }

    #TopBar img {
      height: 10vh;
    }

    ul {
      flex-direction: column;
    }
    
    div ul:hover >  #menu-img {
      padding: 5px;
    }

    div ul:hover > li {
      height: 10vh;
    }

    li {
      height: 0;
      width: 100%;
    }

    #logo-img {
      display: none;
    }
  }
</style>
