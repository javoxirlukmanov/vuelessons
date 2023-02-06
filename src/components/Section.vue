<template>
  <nav>
    <button @click="ToggleMenu">Click me</button>
  </nav>
</template>

<script>
export default {
  name: "SectionComponent",
  methods: {
    ToggleMenu() {
      this.$store.commit("setMenubar");
    },
  },
};
</script>

<style></style>
