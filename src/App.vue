<script>
// import Todos from "./components/Todos.vue";
// import HomePage from "./components/HomePage.vue";
// import RiversJson from "./components/RiversJson.vue";
// import Main from "./components/Main.vue";
import Section from "./components/Section.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Section,
    Sidebar,
    // Todos,
    // HomePage,
    // Main,
    // RiversJson,
  },
};
</script>

<template>
  <Section />
  <Sidebar />
  <!-- <HomePage /> -->
  <!-- <Main /> -->
  <!-- <RiversJson /> -->
</template>

<style></style>
