<template>
  <div class="container-fluid">
    <div class="col-12 col-lg-6 offset-lg-3">
      <ul class="list-group mb-3">
        <li
          class="list-group-item"
          :class="[werk.id % 2 ? 'bg-danger text-white' : 'bg-dark text-white']"
        >
          {{ werk.id }} - {{ werk.title }}
        </li>
        <li class="list-group-item">Category:{{ werk.category }}</li>
        <li class="list-group-item">{{ werk.description }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    werk: Object,
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
