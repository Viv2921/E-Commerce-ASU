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
    <div id="buttons">
      <router-link to="/registration"
        ><button type="button" class="btn btn-success">
          Registration
        </button></router-link
      >
      &nbsp; &nbsp;
      <router-link to="/login"
        ><button type="button" class="btn btn-danger">
          Log In
        </button></router-link
      >
    </div>
    <h1 style="margin-top: 30px">Welcome to ASU CareerCatalyst</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
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

#buttons {
  margin-top: -50px;
  margin-left: 1200px;
}
</style>
