<template>
  <div class="portfolio">
    <PortfolioItem v-for="werk in werken" :key="werk.id" :werk="werk" />
  </div>
</template>

<script>
// @ is an alias to /src

import PortfolioItem from "@/components/PortfolioItem";

export default {
  name: "PortfolioView",
  data() {
    return {
      werken: [
        {
          id: 1,
          category: "webdesign",
          title: "Proxpace webdesign",
          description: "Proxpace webdesign in photoshop/illustrator",
        },
        {
          id: 2,
          category: "vue",
          title: "Kassasysteem",
          description:
            "Een kassasysteem opgebouwd met vue component zonder @vue/cli. De bedoeling is om hier een notie te krijgen van de standaard onderdelen van het basis vue component. Onderdelen zoals: data, methods, computed, ...",
        },
        {
          id: 3,
          category: "bootstrap",
          title: "eindwerk responsive webshop",
          description:
            "De bedoeling hier is om alle pagina's af te werken voor een STATISCHE RESPONSIVE webshop tegen begin januari 2023",
        },
      ],
    };
  },
  components: {
    PortfolioItem,
  },
};
</script>
