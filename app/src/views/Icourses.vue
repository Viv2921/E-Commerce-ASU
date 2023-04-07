<template>
  <div>
    <header>
      <div id="header">
        <div>
          <img src="./asu logo.webp" alt="" id="logo" style="height: 72px" />
          <h1 id="career">CareerCatalyst</h1>
        </div>

        <div id="routes">
          <router-link
            to="/"
            id="link"
            style="text-decoration: none; color: black"
            >Home
          </router-link>
          &nbsp;

          <router-link
            to="/contactus"
            id="link"
            style="text-decoration: none; color: black"
          >
            Contact Us
          </router-link>
          &nbsp;

          <router-link
            to="/courses"
            id="link"
            style="text-decoration: none; color: black"
          >
            Courses</router-link
          >
          &nbsp;
        </div>
        <div id="bcart">
          <b-button v-b-modal.modal-center>
            <img src="./cartlogo.jpg" alt="" class="" style="width: 40px"
          /></b-button>

          <b-modal id="modal-center" centered title="Cart">
            <p class="my-4">Cart is empty</p>
          </b-modal>
        </div>
      </div>
    </header>
    <div id="bimage">
      <img
        src="https://assets.ea.asu.edu/CC-Course-Images/7-ps-marketing.jpeg"
        alt=""
        width="120%"
        height="600px"
      />
    </div>
    <hr />
    <div class="d-flex p-5" id="header2">
      <a href="" style="text-decoration: none"
        ><strong><div style="color: black">Introduction</div></strong></a
      >
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" style="text-decoration: none"
        ><strong><div style="color: black">Course</div></strong></a
      >
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" style="text-decoration: none"
        ><strong><div style="color: black">Details</div></strong></a
      >
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" style="text-decoration: none"
        ><strong><div style="color: black">Experience</div></strong></a
      >
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" style="text-decoration: none"
        ><strong><div style="color: black">Instructors</div></strong></a
      >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div id="btn">
        <button class="btn btn-primary">Request Info</button
        >&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" @onclick="addtocart">
          Add to cart
        </button>
      </div>
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem
    laudantium dicta minima accusantium quibusdam placeat, alias esse excepturi
    iste dolorem veniam tenetur at rem. Cumque, dolor veritatis quidem eos id ad
    nemo assumenda doloremque magni quo maxime ut. Consectetur rerum perferendis
    commodi ab tenetur placeat nihil saepe distinctio? Rerum debitis enim
    corrupti blanditiis maxime aperiam sed. Totam assumenda quos est sequi quia
    possimus ad omnis dolorem modi temporibus saepe voluptas veniam molestias
    explicabo molestiae expedita esse, quas incidunt fugit adipisci. Ab debitis,
    necessitatibus consequuntur labore quisquam totam praesentium rerum eaque
    explicabo perferendis ut hic laborum omnis deleniti nesciunt ex aliquam
    corrupti numquam eius. Quo obcaecati provident nisi nam voluptatem rem iure,
    quam similique mollitia cupiditate dolorem harum quasi delectus repellat
    voluptatum totam quidem consequuntur sed in adipisci ipsam ipsum? Similique
    iusto asperiores quod sequi. Dolorum quibusdam fugiat necessitatibus a,
    cupiditate, accusantium veritatis alias vel earum rem ut numquam, culpa
    autem laudantium aperiam obcaecati id. Tempore reiciendis corrupti error
    laudantium architecto minima repudiandae velit soluta veniam officia fugit
    odit, recusandae esse molestiae est sit obcaecati possimus necessitatibus
    neque repellendus vero, alias ab hic! Dolores excepturi ullam quis, magnam
    veniam aliquam sapiente aut veritatis debitis doloremque provident
    asperiores accusamus nesciunt quasi ad illum fugiat vitae totam nisi iusto
    esse vero ipsa? Tempore at, assumenda veritatis consequuntur dolor ratione,
    velit eaque iste molestiae vero ex deleniti beatae! Laborum aliquam sit
    harum repudiandae laboriosam perspiciatis a? Eligendi vitae labore autem vel
    deserunt et voluptas iste accusantium vero aspernatur commodi, harum dolor
    blanditiis id animi? Accusamus ea, voluptatem eum quisquam rem obcaecati ut
    quas sit dignissimos necessitatibus sequi dolor modi eos sapiente ipsam.
    Aperiam magni nemo fugit eius, est cupiditate rem expedita laborum quam
    obcaecati, suscipit dolorem doloremque, sunt provident non temporibus
    aliquam corrupti odio minus dolore illo. Dolore dolorum id facilis,
    assumenda necessitatibus quia consectetur cum temporibus harum amet repellat
    nisi fugiat, nam laudantium dolorem delectus quos exercitationem quidem
    molestiae. Explicabo, sequi eveniet eaque veniam laudantium, quod temporibus
    aliquid modi porro perspiciatis inventore dolorum ab culpa ipsa maiores in
    blanditiis commodi quidem harum excepturi quos impedit totam consectetur ea?
    Id dolore placeat accusamus impedit eaque! Assumenda iusto vitae soluta
    doloribus aut a voluptas minima doloremque, eaque debitis odio ullam impedit
    consectetur ipsam, labore quia minus officia est provident hic facere at
    accusamus esse. Esse corporis est nihil vel numquam enim voluptatum nam et a
    laboriosam, doloremque id fuga dignissimos nulla iste aliquid cupiditate
    eius voluptates obcaecati, cumque fugiat! Commodi corrupti accusamus sunt
    fugiat pariatur at error. Ea sit rem obcaecati? Sequi pariatur saepe
    numquam, mollitia officia ipsa quo sunt. Recusandae, quisquam natus et
    impedit reprehenderit aliquid voluptatum ullam rerum soluta rem at vel.
    Reprehenderit quisquam enim tempora quia fuga neque itaque vero ducimus. Ea
    facere fuga alias unde, ex doloribus accusamus enim corporis, commodi
    eveniet, ratione temporibus facilis magni expedita quisquam? Soluta quos ab
    animi ipsa! Illo beatae alias tenetur exercitationem nulla expedita
    reiciendis modi ex ipsum? Perspiciatis, illo a beatae, sequi velit, nam
    provident ullam consequuntur veritatis labore sint doloribus consequatur eos
    voluptatum! Dolorem officia culpa quidem temporibus in unde provident
    consequatur, omnis quam, ipsum eius reiciendis reprehenderit ea perspiciatis
    iusto, similique at sapiente placeat minima. Recusandae sapiente odio
    corporis quos, provident possimus aperiam eos dolore porro, praesentium eius
    quas accusamus voluptatibus cupiditate facere suscipit iure quae fugiat et
    consequuntur fuga nostrum quibusdam sunt! Dolor non temporibus quam possimus
    officiis quidem reprehenderit quisquam, maxime voluptatibus excepturi est,
    assumenda optio, natus obcaecati eius omnis eos facilis inventore iure
    officia. Sit commodi, iusto sint illo expedita aliquid tenetur aut
    exercitationem doloremque non inventore unde nesciunt fugiat asperiores
    placeat eum quis cupiditate eligendi cumque quasi distinctio autem quos
    incidunt. Earum aperiam quaerat perspiciatis ipsa cumque veniam voluptatum
    mollitia illo repudiandae quas nobis quia facilis, corrupti consectetur,
    doloremque, a ad? Neque libero et, velit sed consequatur eligendi distinctio
    porro eius. Dolores rerum incidunt accusantium molestiae quia exercitationem
    delectus dolor sequi modi, perspiciatis nostrum voluptate dolore nam
    necessitatibus! Fuga sint sit earum nisi ab neque culpa at quam
    reprehenderit veniam? Vitae voluptatibus eaque quasi amet neque fuga odio
    rem voluptate, provident vero dolore possimus aspernatur quisquam odit
    doloribus quibusdam. Id, voluptas consectetur, molestiae rem cum quidem ex
    ipsum cumque possimus, at incidunt doloremque sit? Porro dicta architecto
    excepturi omnis officia. Illo quod tempore rerum nemo dicta quis, dolores ea
    repudiandae sunt eius! Enim officia quo ipsum quos? Reiciendis mollitia
    debitis eum, pariatur voluptatem provident magni recusandae, beatae in ad ab
    officiis, officia esse. Id, quisquam amet consequuntur odio quam tempora
    numquam quia ea. Quos magnam vel rerum unde, repellendus id quam! Beatae
    ullam necessitatibus eveniet molestias corporis quos! Corrupti porro qui ea
    atque odit sequi quis nobis, cumque, veritatis ipsum dolor! Pariatur
    mollitia voluptatum maxime in asperiores voluptatem voluptatibus consectetur
    perferendis aliquid veritatis quisquam inventore atque doloremque dolorem,
    quas tempora quis ex amet nulla. Nam cumque dolor itaque nulla facilis sed
    modi, aliquid fuga dolorem consequuntur quia fugiat. Accusamus consectetur
    recusandae suscipit ut. Ipsum doloremque, labore non perspiciatis ipsam
    consequatur a quas pariatur maiores vero iure fugiat, veritatis magnam sit.
    Pariatur, eius dicta natus tempora sequi maxime corporis debitis minus
    asperiores. Quibusdam, sit dolorum? Id possimus, libero unde praesentium
    incidunt molestiae laudantium consequuntur eos sed amet aliquid sapiente rem
    perspiciatis, cumque ut repellat mollitia labore eligendi! Magnam
    dignissimos natus expedita quam, officiis esse! Corporis qui fuga rem
    expedita esse repellat tempora culpa nisi magni tenetur, architecto
    necessitatibus quo voluptate possimus dolores minus voluptatibus sed eum
    laudantium ut quam similique suscipit animi. Tenetur, nostrum. Natus
    adipisci tempora vel harum reiciendis quidem? Id aut dignissimos pariatur.
    Ab ducimus necessitatibus tempore laboriosam omnis fuga! Temporibus aliquam
    atque perferendis iste, quae sed quis quasi iusto molestias ut dicta
    consequatur modi iure, qui odit deserunt fuga fugiat suscipit. Dolor alias,
    dolorum laudantium labore veritatis sunt error quae, porro eos incidunt
    quibusdam placeat voluptas, culpa rerum ut iusto impedit dignissimos eaque
    modi aut quisquam exercitationem? Distinctio magni enim error suscipit omnis
    minima unde animi saepe optio, sint, cumque quia. Quasi dolore repellat
    tenetur, recusandae hic quis eum ipsum excepturi expedita deserunt
    consequuntur in.
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    addtocart() {},
  },
  mounted() {
    // this.getItems();
    axios
      .get("http://localhost:1500/courses")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#link:hover {
  text-decoration: 3px underline darkgoldenrod;
}
#id {
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  color: black;
  font-weight: 700;
  font-weight: bold;
}
#btn {
  margin-left: 800px;
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
#career:hover {
  text-decoration: underline;
  cursor: pointer;
}

#bimage {
  width: 100%;
  height: 100%;
  background-image: url("https://assets.ea.asu.edu/CC-Course-Images/7-ps-marketing.jpeg");
}
#bcart {
  margin-top: -65px;
  margin-left: 1350px;
  margin-top: -80px;
}
</style>
