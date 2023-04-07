<template>
  <div>
    <div>
      <header>
        <div id="header">
          <div>
            <img src="./asu logo.webp" alt="" id="logo" style="height: 72px" />
            <h1 id="career">CareerCatalyst</h1>
          </div>

          <div id="routes">
            <router-link to="/" id="link">Home </router-link> &nbsp;

            <router-link to="/contactus" id="link"> Contact Us </router-link>
            &nbsp;

            <router-link to="/courses" id="link"> Courses</router-link> &nbsp;
          </div>
          <!-- <div>
         
        </div> -->

          <div
            v-if="userLoggedIn === 'false'"
            style="margin-left: 1250px"
            id="buttons"
          >
            <!-- {{ login }} -->
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

          <div id="bcart" v-if="userLoggedIn === 'true'">
            <!-- {{ login }} -->
            <b-button v-b-modal.modal-center>
              <img
                src="./cartlogo.jpg"
                alt=""
                class=""
                style="width: 40px" /></b-button
            >&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              class="btn btn-outline-info"
              @click="logOut()"
            >
              LogOut
            </button>

            <b-modal id="modal-center" centered title="Cart">
              <!-- <div v-if="cart.length == 0">
              <p class="my-4">Cart is empty</p>
            </div> -->
              <div>
                <table>
                  <div v-for="i in cartItems" :key="i._id">
                    <tr>
                      <td>{{ i.title }}</td>

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <td>${{ i.price }}</td>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        class="btn btn-sm btn-danger delete_cart_btn"
                        @click="del(i._id)"
                      >
                        X
                      </button>
                    </tr>
                  </div>
                </table>
              </div>
            </b-modal>
          </div>
        </div>
      </header>
      <div>
        <h1 class="p-5" id="all" style="margin-right: 270px">
          <strong style="font-size: 56px; color: black"
            >All programs, courses and certificates</strong
          >
        </h1>
        <p style="margin-right: 235px; color: black">
          Your career advancement starts here. ASU CareerCatalyst offers more
          than 250 courses and programs to empower everyone to reach their goals
          and
        </p>

        <p style="margin-right: 555px; margin-top: -15px; color: black">
          explore their passions. Use the filters below to browse our offerings
          and find the right opportunity for you.
        </p>
      </div>
      <br /><br />
      <h4 style="color: goldenrod">Search for any course</h4>

      <div class="row" style="margin: 10px; grid-auto-rows: 1fr">
        <!-- list all cards -->
        <input
          type="text"
          v-model="search"
          placeholder="Search"
          style="padding: 10px"
        /><br /><br />
        <div
          class="col-6 col-lg-3"
          v-for="i in filteredPosts"
          :key="i.document.id"
        >
          <router-link to="/Icourses" style="text-decoration: none">
            <a href="/Icourses" style="color: black; text-decoration: none">
              <b-card
                :title="i.document.title"
                :img-src="i.document.imgName"
                img-height="200"
                img-width="200"
                img-alt="Image"
                img-top
                tag="article"
                class="custom"
                style="
                  height: 430px;
                  margin-top: 20px;
                  margin-left: 20px;
                  margin-right: 20px;
                  padding: 10px;
                "
              >
                <b-card-text style="height: 30px; overflow-y: auto">
                  {{ i.document.department }}
                </b-card-text>

                <div class="card-footer bg-transparent border-success">
                  <div class="d-flex">
                    <p>Price:${{ i.document.price }}</p>

                    <b-button
                      href="#"
                      variant="primary"
                      style="margin-left: 80px"
                      @click="
                        toCart({
                          itemName: i.document.title,
                          price: i.document.price,
                        })
                      "
                    >
                      Add to cart
                    </b-button>
                  </div>
                </div>
              </b-card>
            </a></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login2 from "./Login2";
import axios from "axios";

export default {
  data() {
    return {
      userLoggedIn: "false",
      search: "",
      count: null,
      cartItems: "",
      posts: [],
      cart: [],

      // filteredPosts: null,
    };
  },
  components: {
    Login2,
  },

  methods: {
    toCart({ itemName, price }) {
      var x = localStorage.getItem("LoggedIn");
      console.log(x);
      if (x === "true") {
        this.cart.push({ itemName: itemName, price: price });
        alert("Added to cart");
        var userId = sessionStorage.getItem("id");
        console.log(userId);
        axios
          .post(`http://localhost:1500/cart/${userId}`, {
            id: userId,
            title: itemName,
            price: price,
          })
          .then((response) => {
            console.log(response);
          });
        window.location.reload();
      } else {
        alert("Please Log In");
      }
    },
    del(deleteElement) {
      axios
        .delete(`http://localhost:1500/cart/${deleteElement}`)
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      alert("Deleted from cart");
      window.location.reload();
      // this.cart.pop(title, price);
    },
    logOut() {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.setItem("LoggedIn", "false");
      localStorage.removeItem("id");
      this.$router.push({ path: "/login" });
      alert("Logged Out");
    },
  },

  created() {
    // return login;
  },

  // computed: {
  //   // filteredPosts: function () {
  //   //   return this.posts.filter((i) => {
  //   //     return i.title.match(this.search);
  //   //   });
  //   // },
  //   filteredPosts() {
  //     return this.posts.filter((i) => {
  //       return i.title.toLowerCase().includes(this.search.toLowerCase());
  //     });
  //   },
  // },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => {
        return post.document.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    var id = localStorage.getItem("id");
    console.log(id);

    // this.getItems();
    axios
      .get("http://localhost:1500/courses")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`http://localhost:1500/users/${id}`)

      .then((response) => {
        let userId;
        userId = response.data;
        //console.log(response.data);
        sessionStorage.setItem("id", userId);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(`http://localhost:1500/cart/${id}`).then((response) => {
      let cartItems;
      this.cartItems = response.data;
    });

    axios
      .get("http://localhost:1500/courses")
      .then((response) => {
        this.posts = response.data;
        //console.log(this.posts);
      })
      .catch((error) => {
        console.log(error);
      });

    this.userLoggedIn = localStorage.getItem("LoggedIn");

    // this.login = x;
    console.log(this.userLoggedIn);
  },
};
</script>

<style scoped>
.custom .card-title {
  height: 80px;
}
#bcart {
  margin-top: -65px;
  margin-left: 1350px;
  margin-top: -80px;
}
#cart {
  width: 60px;
  margin-left: 1300px;
  margin-top: -10px;
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

#logo {
  margin-left: -1200px;
}

#career {
  margin-top: -78px;
  margin-right: 840px;
  font-size: 36px;
  font-weight: 700;
}
#routes {
  margin-right: 900px;
  margin-top: 45px;
}

#link {
  color: black;
  text-decoration: none;
}

#link:hover {
  text-decoration: 3px underline darkgoldenrod;
}

#career:hover {
  text-decoration: underline;
  cursor: pointer;
}

#id {
  font-size: 56px;
}
#buttons {
  margin-top: -50px;
}
</style>
