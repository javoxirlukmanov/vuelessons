<script>
import axios from "axios";

export default {
  name: "MainPage",
  data() {
    return {
      items: {},
    };
  },
  methods: {
    GetData() {
      axios
        .get("https://api.nuxtjs.dev/mountains")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.GetData();
  },
};
</script>

<template>
  <div v-for="item in items" :key="item">
    <div class="container">
      <div class="row mt-5 justify-content-between">
        <div class="col-lg-6">
          <img class="image" :src="item.image" :alt="item.title" />
        </div>
        <div class="col-lg-6 d-flex justify-content-between flex-column">
          <div class="row">
            <div class="col-lg-12">
              <h1>{{ item.title }}</h1>
            </div>
            <div class="col-lg-12">
              <h2>{{ item.description }}</h2>
            </div>
            <div class="col-lg-12">
              <h2>{{ item.height }}</h2>
            </div>
            <div class="col-lg-12">
              <h2>{{ item.countries[0] }} in {{ item.continent }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image {
  width: 100%;
  height: 700px;
}
</style>
