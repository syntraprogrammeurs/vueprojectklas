<template>
  <button type="button" class="btn btn-danger">{{ werk.category }}</button>
</template>

<script>
export default {
  name: "ButtongroupItem",
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
