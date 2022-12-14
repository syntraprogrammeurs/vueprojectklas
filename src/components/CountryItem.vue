<template>
  <div class="col-12 col-lg-3 mb-3">
    <div class="card h-100">
      <img
        v-if="country.flags"
        :src="country.flags.png"
        class="card-img-top"
        alt=""
      />
      <img
        v-else
        src="https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg"
        class="card-img-top"
        alt=""
      />
      <div class="mt-auto border-top border-black border-2">
        <div class="card-body">
          <h5 v-if="country.name" class="card-title">
            {{ country.name }}
          </h5>
          <h5 v-else class="card-title">Oh no 😢</h5>
          <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {{ country.capital }}
          </li>
          <li class="list-group-item">
            {{ country.population }}
          </li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryItem",
  props: {
    country: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
