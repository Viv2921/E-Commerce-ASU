<template>
  <div class="about">
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
      <h1>This is a contact page</h1>
    </header>
  </div>
</template>

<style scoped>
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
</style>
