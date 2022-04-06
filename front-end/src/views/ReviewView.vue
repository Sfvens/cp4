<template>
<div>
  <div class=wrapper>
    <div class="info">
      <router-link to=/add-review class=no>
      <div class=info>
        <br>
        <h5>Add a Review</h5>
      </div>
      </router-link>
    </div>
  </div>
  <ReviewComp :reviews="reviews" />
  <!-- displays the product component we defined in ProductList -->
</div>
</template>

<script>
import ReviewComp from "../components/ReviewComp.vue"
export default {
  name: 'ReviewView',
  components: {
    ReviewComp
  },
  data() {
    return {
      searchText: '', // allows transfer of text info to other components
    }
  },
  computed: {
    reviews() {
    //   return this.$root.$data.reviews.filter(review => review.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    return this.$root.$data.reviews;
    }
  },
}
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50px;
  text-decoration: none;
}

.info {
  background: black;
  color: white;
  /* padding: 10px 30px; */
  height: 70px;
  text-align: center;
  width: 200px;
  align-items: center;
}

/* .info h1 {
  font-size: 16px;
} */

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.info div {
  color: white;
  text-decoration: none;
}
.info:hover {
  /* color: rgb(227, 10, 10); */
  color:red;
  text-decoration: none;
  transition: 0.5s;
}

.no {
  text-decoration: none;
}

</style>