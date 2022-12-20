<template>
  <div class="col-12 col-lg-6">
    <div class="card h-100">
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
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>
