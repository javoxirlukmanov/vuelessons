<script>
export default {
  name: "TodosPage",
  data() {
    return {
      form: {
        Task: "",
      },
      update: false,
      currentindex: null,
      fullname: JSON.parse(localStorage.getItem("userInfo")) || [],
    };
  },

  methods: {
    SubmitTask() {
      if (this.form.Task === null || this.form.Task === "") {
        alert("task kiriting");
      } else {
        if (this.update) {
          this.update = false;
          this.fullname[this.currentindex] = this.form;
          this.form = { Task: "" };
        } else {
          this.fullname.push(this.form), (this.form = { Task: "" });
        }
        localStorage.setItem("userInfo", JSON.stringify(this.fullname));
      }
    },
    DeleteTask() {
      this.fullname.forEach((item, index) => {
        if (item) {
          this.fullname.splice(index, 1);
          localStorage.removeItem("userInfo");
        }
      });
    },
    UpdateTask(item) {
      this.currentindex = this.fullname.findIndex((x) => x.Task === item.Task);
      console.log(item.Task);
      this.update = true;
      this.form.Task = item.Task;
    },
  },
};
</script>

<template>
  <div class="pinkdiv">
    <div class="maininput">
      <h2 class="h2indiv">New todo :</h2>
      <input class="inputindiv" v-model="form.Task" type="text" />
      <button @click="SubmitTask" class="buttonindiv">Add</button>
    </div>
  </div>
  <div class="container">
    <table class="table table-bordered mt-10">
      <thead>
        <tr>
          <th>Task</th>
          <th style="width: 20%">clear</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span
              v-for="item in fullname"
              :key="item"
              class="d-flex justify-content-between"
            >
              <p>{{ item.Task }}</p>
              <b @click="DeleteTask(item)">trash</b>
              <p @click="UpdateTask(item)">edit</p>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.pinkdiv {
  width: 100%;
  height: 200px;
  background-color: rgb(249, 6, 131);
}
.maininput {
  position: relative;
  top: 120px;
  width: 60%;
  height: 150px;
  z-index: 1;
  margin-left: 20%;
  border-radius: 10px;
  box-shadow: 10px 10px 8px 1px rgb(112, 111, 111);
  background-color: rgb(255, 255, 255);
}
.first-th {
  width: 70%;
}
.buttonindiv {
  position: absolute;
  top: 36%;
  left: 75%;
  width: 20%;
  height: 50px;
  margin-left: 2%;
  margin-top: 10px;
  background-color: rgb(249, 6, 131);
  border: 0px;
  border-radius: 5px;
  font-size: 25px;
  color: #fff;
  transition: all 600ms;
}
.buttonindiv:hover {
  background-color: rgb(252, 251, 252);
  color: rgb(249, 6, 131);
  border: 2px solid rgb(249, 6, 131);
}
.h2indiv {
  font-size: 30px;
  padding: 5px 10px;
}
.inputindiv {
  width: 70%;
  height: 50px;
  margin-left: 2%;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  outline: none;
}
thead {
  width: 800px;
}
.mt-10 {
  margin-top: 10rem;
}
</style>
