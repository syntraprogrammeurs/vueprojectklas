<template>
  <h1>Dit is de register pagina</h1>
  <button class="btn btn-success" @click="register">Register</button>
</template>

<script>
export default {
  props: ["event"],
  methods: {
    register() {
      //na registratie redirecten naar je ticket details
      this.$router.push({
        name: "TicketDetailsView",
        params: { id: this.event.id },
      });
    },
  },
};
</script>
