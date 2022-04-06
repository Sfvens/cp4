<template>
<div class=wrapper>
<div class="admin">
  <h1 class=info>Add a Review</h1>
  <div class="heading">
    <!-- <div class="circle">1</div> -->
    <!-- <h2>Add Review</h2> -->
  </div>
  <div class="add">
    <div class="form">
        <h3>Username</h3>
      <input v-model="title" placeholder="Username">
      <p></p>
      <h3>Car</h3>
      <input v-model="color" placeholder="color"> <input v-model="year" placeholder="year"> <input v-model="make" placeholder="make"> <input v-model="model" placeholder="model">
      <p></p>
      <h3>Image</h3>
      <input type="file" name="photo" @change="fileChanged">
      <p></p>
      <h3>Tag-line</h3>
      <input v-model="tagline" placeholder="i.e. Sexy Souped-up Coup">
      <p></p>
      <h3>Review</h3>
      <!-- me -->
      <input type="textarea" v-model="description" placeholder="How does she ride?">
      <p></p>
      <!-- me! -->
      <button @click="upload">Submit</button>
    </div>
    <div class="upload" v-if="addItem">
      <!-- <h2>{{addItem.title}}</h2>
      <p>{{addItem.color}}</p>
      <p>{{addItem.year}}</p>
      <p>{{addItem.make}}</p>
      <p>{{addItem.model}}</p>
      <img :src="addItem.path" />
      <h3>{{addItem.tagline}}</h3>
      <p>{{addItem.description}}</p> -->

      <h1>{{addItem.title}}</h1>
        <p>{{addItem.color}} {{addItem.year}} {{addItem.make}} {{addItem.model}}</p>
        <div class="image">
            <img :src="addItem.path" />
        </div>
      <div class="info1">
        <h2>{{addItem.tagline}}</h2>
      </div>
      <div class="price">
          <p>{{addItem.description}}</p>
      </div>
      <div class="info2"><p></p></div>

    </div>
  </div>
    <div class="heading info">
      <!-- <div class="circle">2</div> -->
      <h2>Edit Review</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <p>Username</p>
        <input v-model="findItem.title">
        <p>Color/Year/Make/Model</p>
        <input v-model="findItem.color"><input v-model="findItem.year"><input v-model="findItem.make"><input v-model="findItem.model">
        <p>Image</p>
        <img :src="findItem.path" />
        <p>Tag-line</p>
        <input v-model="findItem.tagline">
        <p>Review</p>
        <input type="textarea" v-model="findItem.description">
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Update</button>
      </div>
    </div>
</div>
<!-- <div class=info>
  <h4>Edit Reviews (admin only)</h4>
</div> -->
</div>
</template>

<script>
import axios from 'axios';
export default {//check
  name: 'ReviewEdit',
    data() {
      return {
        title: "", //username
        username: "",
        color: "",
        year: "",
        make: "",
        model: "",
        file: null, //image
        tagline: "",
        description: "", //review
        items: [], //reviews

        addItem: null, //functions
        findItem: null,
        findTitle: "",
      }
    },
  computed: { //check
    suggestions() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  created() { //check
    this.getItems();
  },
  methods: { //check
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title, //username
          color: this.color,
          year: this.year,
          make: this.make,
          model: this.model,
          path: r1.data.path, //image path
          tagline: this.tagline,
          description: this.description //review
        });

        this.addItem = r2.data;
      } catch (error) {
        // console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          color: this.findItem.color,
          year: this.findItem.year,
          make: this.findItem.make,
          model: this.findItem.model,
          //can you update path for photos???
          tagline: this.findItem.tagline,
          description: this.findItem.description,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
  }
}
</script>

<style scoped>

.info {
  background: black;
  color: white;
  padding: 10px 30px;
  /* height: 80px; */
  text-align: center;
  justify-content: center;
  margin-top: 50px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
  text-decoration: none;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.upload input,
textarea {
  margin-bottom: 20px;
}

.form {
  margin-right: 50px; 
  /* //????? */
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* formatting side */

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

.info1 {
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

.info1 h1 {
  font-size: 16px;
}

.info1 h2 {
  font-size: 14px;
}

.info1 p {
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