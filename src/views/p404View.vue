<template>
  <h1>404! Nice try, wrong page! This {{ resource }} does not exist!</h1>
  <router-link class="btn btn-primary" :to="{ name: 'HomeView' }"
    >Home</router-link
  >
</template>
<script>
export default {
  name: "p404View",
  props: {
    resource: {
      type: String,
      required: true,
      default: "pagina",
    },
  },
};
</script>
