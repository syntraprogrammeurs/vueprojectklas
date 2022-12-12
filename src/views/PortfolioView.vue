<template>
  <div class="container-fluid">
    <div class="col-12 col-lg-6 offset-lg-3">
      <h2>List group Example</h2>
      <PortfolioItem v-for="werk in werken" :key="werk.id" :werk="werk" />
      <h2>Accordion Example</h2>
      <AccordionItem
        v-for="werk in werken"
        :key="werk.id"
        :werk="werk"
      ></AccordionItem>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PortfolioItem from "@/components/PortfolioItem";
import AccordionItem from "@/components/AccordionItem";

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
    AccordionItem,
  },
};
</script>
