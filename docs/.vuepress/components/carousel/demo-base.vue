<template>
  <demo-block>
    <v-carousel height="300px" class="demo-carousel">
      <v-carousel-item v-for="item in 4" :key="item">
        <div class="carousel-content">{{ item }}</div>
      </v-carousel-item>
    </v-carousel>
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      value: "panel1"
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-carousel {
  .v-carousel-item {
    &:nth-child(2n) {
      background-color: #99a9bf;
    }
    &:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .carousel-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
