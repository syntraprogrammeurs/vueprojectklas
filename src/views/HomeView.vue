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
          <div class="d-flex justify-content-center gap-3">
            <router-link
              :to="{ name: 'HomeView', query: { page: page - 1 } }"
              rel="prev"
              v-if="page != 1"
              class="btn btn-primary"
              >Vorige</router-link
            >
            <router-link
              :to="{ name: 'HomeView', query: { page: page + 1 } }"
              rel="next"
              class="btn btn-primary"
              v-if="hasNextPage"
              >Volgende</router-link
            >
          </div>

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
      totalEvents: 0,
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
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
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
          this.totalEvents = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
</script>
