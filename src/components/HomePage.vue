<script>
export default {
  name: "HomePage",
  data() {
    return {
      form: {
        name: "",
        email: "",
      },
      fullname: JSON.parse(localStorage.getItem("userInfo")) || [],
    };
  },
  methods: {
    Getinfo() {
      if ((this.form.name === null, this.form.email == "")) {
        alert("biror nima kiriting");
      } else {
        this.fullname.push(this.form), (this.form = { name: "", email: "" });
        localStorage.setItem("userInfo", JSON.stringify(this.fullname));
      }
    },
    Removeinfo() {
      localStorage.removeItem("userInfo");
      this.fullname = [];
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row" flex-wrap>
      <form action="#">
        <input
          v-model="form.name"
          type="text"
          placeholder="name"
          ref="inputValue"
          required
        />
        <input
          v-model="form.email"
          type="text"
          placeholder="email"
          ref="inputValue"
          required
        />
        <button @click="Getinfo">submit</button>
        <button @click="Removeinfo">clear</button>
      </form>
      <li v-for="name in fullname" :key="name">
        <p>{{ (name.name, name.email) }}</p>
      </li>
    </div>
  </div>
</template>

<style></style>
<!-- <template>
  <div id="app">
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
      const message = this.$refs.inputValue.value;
      this.form = `${message}`;
    },
  },
};
</script> -->
