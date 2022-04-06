<template>
<div class="wrapper">
  <div class="reviews">
    <div class="review" v-for="review in items" :key="review.id">
        <!-- <img :src="review.userimage" /> -->
        <h1>{{review.title}}</h1>
        <p>{{review.color}} {{review.year}} {{review.make}} {{review.model}}</p>
        <div class="image">
            <img :src="review.path" />
        </div>
      <div class="info">
        <h2>{{review.tagline}}</h2>
      </div>
      <div class="price">
          <p>{{review.description}}</p>
        <!-- <h2>{{review.tagline}}</h2> -->
        <!-- <button class="auto" @click="add(review)">Add to Cart</button> -->
      </div>
      <div class="info2"><p></p></div>
    </div>
    <hr>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ReviewView',
  // props: {
  //   reviews: Array // must match where we link data with component
  // },
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.getItems();
  },
  // data() {
  //     return {
  //       favorites: [],
  //     }
  // },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    // add(review) {
    //     this.$root.$data.add(review);
    // },
    // parseURL(review) {
    //     window.location.href = review.userimage;
    // }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reviews {
  /* margin-top: 20px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.review {
  margin: 10px;
  /* margin-top: 15px; */
  width: 300px;
}

.review img {
  border: 2px solid #333;
  height: 250px;
  width: 300px;
  object-fit: cover;
}

.review .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: black;
  color: white;
  padding: 10px 30px;
  /* height: 80px; */
  text-align: center;
}

.info2 {
  background: black;
  color: white;
  padding: 10px 30px;
  /* height: 80px; */
  text-align: center;
  margin-bottom: 50px;
  position:relative;
  top: -10px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
  /* margin-bottom: 20px; */
}

/* button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
} */

.auto {
  margin-left: auto;
}
</style>