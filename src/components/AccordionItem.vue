<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="'heading' + werk.id">
      <button
        class="accordion-button"
        :class="[werk.id % 2 ? 'bg-danger text-white' : 'bg-dark text-white']"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapse' + werk.id"
        aria-expanded="true"
        :aria-controls="'collapse' + werk.id"
      >
        {{ werk.id }} - {{ werk.title }}
      </button>
    </h2>
    <div
      :id="'collapse' + werk.id"
      class="accordion-collapse collapse collapsed"
      :aria-labelledby="'heading' + werk.id"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <h4>{{ werk.category }}</h4>
        {{ werk.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
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
