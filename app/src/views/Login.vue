<template>
  <div>
    <header>
      <div id="header">
        <img src="./asu logo.webp" alt="" id="logo" style="height: 72px" />
        <h1 id="career">CareerCatalyst</h1>
      </div>
      <div id="routes">
        <router-link to="/" id="link">Home </router-link> &nbsp;

        <router-link to="/contactus" id="link"> Contact Us </router-link>
        &nbsp;

        <router-link to="/courses" id="link"> Courses</router-link> &nbsp;
      </div>
    </header>
    <form>
      <div class="formContainer">
        <h1>Log In Form</h1>
        <hr />
        <label for="username"><b>Username</b></label>
        <input
          v-model="username"
          type="text"
          placeholder="Enter username"
          name="username"
          required
          autocomplete="off"
          id="username"
        />
        <label for="password"><b>Password</b></label>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          name="loginpassword"
          required
          autocomplete="off"
          id="password"
        />
        <label>
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style="margin-bottom: 15px"
          />
          Remember me
        </label>
        <p>
          By creating an account you agree to our
          <a href="#" style="color: dodgerblue">Terms & Privacy</a>
        </p>
        <p></p>
        <div>
          <button type="button" class="cancel">Cancel</button>

          <button
            type="submit"
            @click="saveData()"
            class="btn btn-outline-info"
            id="save_btn"
          >
            Log In
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async saveData() {
      try {
        const result = await axios.post("http://localhost:1500/login", {
          username: this.username,
          password: this.password,
        });
        let id = result.data.user._id;
        console.log(id);
        localStorage.setItem("id", id);
        localStorage.setItem("LoggedIn", "true");
        this.$router.push({ path: "/courses" });
      } catch (error) {
        console.log(error);
      }

      // let username, password;
      // username = document.getElementById("username").value;
      // password = document.getElementById("password").value;
      // const data1 = {
      //   username: username,
      //   password: password,
      // };
      // var xhr = new XMLHttpRequest();
      // xhr.open("POST", "http://localhost:1500/login");
      // xhr.setRequestHeader("Accept", "application/json");
      // xhr.setRequestHeader("Content-Type", "application/json");
      // console.log(data1);
      // xhr.onreadystatechange = function () {
      //   console.log("sss");
      //   if (xhr.readyState == 4 && xhr.status == 200) {
      //     console.log(data1.username);
      //     localStorage.setItem("LoggedIn", "true");
      //     localStorage.setItem("username", data1.username);

      //     //console.log(data1._id);
      //     //localStorage.setItem("id", data1._id);
      //     this.$router.push({ path: "/courses" });
      //     //window.location.href = "./views/CoursesView.vue";
      //   }
      //   //var a = xhr.response;
      //   console.log(xhr.response);
      // };

      // xhr.send(JSON.stringify(data1));
    },
  },
};
</script>

<style>
#routes {
  margin-right: 900px;
  margin-top: -23px;
}
#link {
  color: black;
  text-decoration: none;
}

#link:hover {
  text-decoration: 3px underline darkgoldenrod;
}
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

* {
  box-sizing: border-box;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  font-size: 28px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  font-size: 28px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

label {
  font-size: 15px;
}

input[type="text"]:focus,
input[type="email"]:focus {
  background-color: #ddd;
  outline: none;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

button {
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(10, 119, 13);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

.cancel {
  padding: 14px 20px;
  background-color: #ff3d2f;
}

.formContainer {
  padding: 16px;
}

.formContainer p {
  font-size: 28px;
}
#header {
  padding: 20px;
  width: 100%;
  border: 1px solid grey;
  border-left: none;
  border-right: none;
  border-top: none;
  height: 125px;
}
#career {
  margin-top: -78px;
  margin-right: 840px;
  font-size: 36px;
  font-weight: 700;
}
#logo {
  margin-left: -1200px;
}
</style>
