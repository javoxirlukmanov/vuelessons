<template>
  <div>
    {{ getMenubar }}
  </div>
  <nav v-if="getMenubar">
    <ul>
      <li>
        <a href="#"><button>Click me too</button></a>
      </li>
    </ul>
  </nav>
  <h1>Lorem ipsum dolor sit amet.</h1>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SidebarComponent",
  methods: {},
  computed: {
    ...mapGetters(["getMenubar"]),
  },
};
</script>
