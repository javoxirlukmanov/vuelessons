<!-- <script>
export default {
  name: "HomePage",
  data() {
    return {
      form: {
        name: "",
        email: "",
      },
      fullname: {},
    };
  },
  methods: {
    Getinfo() {
      const result = this.$refs.inputValue.value;
      this.form = `${result}`;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row" flex-wrap>
      <form action="">
        <input
          v-model="form.name"
          type="text"
          placeholder="name"
          ref="inputValue"
        />
        <input
          v-model="form.email"
          type="text"
          placeholder="email"
          ref="inputValue"
        />
        <button @click="Getinfo()">submit</button>
        <h1>your name is {{ form }}</h1>
      </form>
    </div>
  </div>
</template>

<style></style> -->
<template>
  <div id="app">
    <!-- Create new ref by setting "ref" prop -->
    <input type="text" placeholder="Text" ref="inputValue" />
    <button @click="handleSubmit">submit</button>
    <br />
    <b>{{ form }}</b>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: "",
    };
  },
  methods: {
    handleSubmit() {
      // Access ref with "$refs" property
      const message = this.$refs.inputValue.value;
      this.form = `${message}`;
    },
  },
};
</script>
