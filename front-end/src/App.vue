<template>
  <div id="app">
       <!--Bootstrap-->
   <!-- <nav class="navbar navbar-expand-lg navbar-dark  nav-height sticky-top" style='background-color: black;'>
        <router-link class="navbar-brand" to="/">CAAR</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav-position" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cars">Our Cars</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/team">Our Team</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/review">Reviews</router-link>
            </li>
          </ul>
        </div>
      </nav>  -->
  <div>
  <b-navbar toggleable="lg" type="dark" variant="black">
    <b-navbar-brand href="#">CARR</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/cars">Our Cars</b-nav-item>
        <b-nav-item href="/team">Our Team</b-nav-item>
        <b-nav-item href="/about">About Us</b-nav-item>
        <b-nav-item href="/review">Reviews</b-nav-item>
      </b-navbar-nav>
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
      <!--Bootstrap.-->
    <router-view/>
    <!--Bootstrap--> 
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> -->
    <!--Bootstrap.-->
    <section class='footer'>
        <!-- <a href='https://github.com/Sfvens/cp1-CARR'><font-awesome-icons icon="Eye"/></a> -->
        <!-- <h1><font-awesome-icon icon="eye" /></h1> -->
        <a href='https://github.com/Sfvens/cp4'>Github</a>
        <p>&copy; 2042 CARR, Inc.</p>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
})
</script>


<style>
* {
    margin: 0;
    padding: 0;
}
/*-----navbar-----*/
.navbar-brand { /*don't change this title*/
    font-family: 'Teko', sans-serif;
    font-size: 100px !important;
    margin-top: 1%;
}
.nav-position {
    display: flex;
    justify-content: flex-end;
}
.nav-link {
    font-family: 'Teko', sans-serif;
    font-size: 40px !important;
}
/*-----header-----*/

.header {
    min-height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 2, 0.7),rgba(4,9,30,.7)), url(/src/assets/car-pics/orange-big.jpg);
    background-position: center;
    background-size: cover;
    color: white;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: top;
    flex-wrap: wrap;
    flex-direction: column;
    border-width: 10px;
}
.header div {
    position: relative;
    bottom: 22vh;
}

.header h1 {
    font-size: 75px;
}
.header h2 {
    font-size: 50px;
}
.header h3 {
    font-size: 35px;
} 

/*-----Button-----*/

.button:link,
.button:visited {
    display: block;            
    text-decoration: none;

    position: relative;
    top: 10vh;
    color: rgb(228, 127, 13);
    background-color: transparent;

    font-size: 9vh;
    padding: 20px;
    text-align: center;
    justify-content: center;
    /* border: 2px solid #5D6063;  */
    border-radius: 5px;
    /* opacity: .5; */
  
    width: 100%;
    margin: 20px auto;
  }
.button:hover {
  color: #FFF;
  background-color: #9b5f10;
  /* opacity: 0.75; */
  transition: 0.5s;
}

/*-----footer-----*/
.footer,
.footer a {
    background-color: black;
    color: white;
    padding-top: 15px;
    padding-left: 15px;
    padding-bottom: 1px;
}
.fa-github {
    color: white;
}
.fa-github:hover {
    opacity: 0.7;
}

/*-----Cars/Team Page-----*/

.masonry {
    margin-top: 1em;
    column-count: 3;
    column-gap: 1em;
  }
  .masonry img{
      width: 100%;
      height: 100%;
  }
  
  .item {
    background-color: #eee;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
  }

  /*-----About Us-----*/
  .text {
      background-color: black;
      padding: 1em;
      color:#FFF;
      margin: 0 0 1em;
  }

  .headers {
    background-color: black;
    padding: 1em;
    margin: 0 1em 0 1em;
    color:#FFF;
    text-align: center;
    }

/*-----responsive design-----*/

/* Mobile Styles */
@media only screen and (max-width: 400px) {
    .masonry {
        column-count: 1;
    }
}
    
  /* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 990px) {
    .masonry {
        column-count: 2;
    }
}
/* Desktop Styles */
@media only screen and (min-width: 991px) {

    .nav-height {
        height: 100px;
    }
}
</style>

