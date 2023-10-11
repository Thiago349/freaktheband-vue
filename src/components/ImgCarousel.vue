<template>
  <div id="ImgCarousel">
    <div id="carousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/main_img.jpeg" class="d-block">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImgCarousel'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  #ImgCarousel, .carousel-inner {
    width: 90dvh;
    height: 67.5dvh;
    border-radius: 15px;
  }

  .carousel-item img {
    width: 90dvh;
    height: 67.5dvh;
  }

  @media (max-width: 1100px) {
      #ImgCarousel, .carousel-inner {
      width: 100%;
      height: fit-content;
      border-radius: 15px;
    }

    .carousel-item img {
      width: 100%;
      height: auto;
    }
  }
</style>
