<template>
  <div class="col-12 col-lg-6">
    <router-link :to="{ name: 'TicketDetailsView', params: { id: event.id } }">
      <div class="card h-100">
        <img
          :src="require('@/assets/images/' + event.imagePath)"
          class="card-img-top"
          alt="{{ event.title }}"
        />
        <div class="mt-auto">
          <div class="card-body">
            <h5 class="card-title">{{ event.title }}</h5>
            <p class="card-text">
              {{ event.description }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ event.category }}</li>
            <li class="list-group-item">{{ event.location }}</li>
            <li class="list-group-item">{{ event.date }}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TicketItem",
  props: {
    event: Object,
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
