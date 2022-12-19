<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 col-lg-10 offset-lg-1">
        <img alt="Vue logo" src="../assets/logo.png" />
        <div class="row">
          <input
            class="my-5"
            type="text"
            v-model="search"
            placeholder="search concert ..."
          />
          <router-link
            :to="{ name: 'HomeView', query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
            >Vorige</router-link
          >
          <router-link
            :to="{ name: 'HomeView', query: { page: page + 1 } }"
            rel="next"
            >Volgende</router-link
          >
          <TicketItem
            v-for="event in filteredItems"
            :key="event.id"
            :event="event"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TicketItem from "@/components/TicketItem";
import TicketService from "@/services/TicketService";
import { watchEffect } from "vue";

export default {
  name: "HomeView",
  props: ["page"],
  data() {
    return {
      search: "",
      events: null,
    };
  },
  computed: {
    filteredItems() {
      return this.events.filter((event) => {
        return (
          event.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
  components: {
    TicketItem,
  },
  created() {
    watchEffect(() => {
      TicketService.getEvents(2, this.page)
        .then((response) => {
          console.log(response.data);
          this.events = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
</script>
