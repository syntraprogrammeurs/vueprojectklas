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

export default {
  name: "HomeView",
  data() {
    return {
      search: "",
      events: [
        {
          id: 1,
          category: "concert",
          title: "Tomorrow Land",
          description: "Festival op De Schorre",
          location: "Boom",
          date: "July 16 & 17, 2021",
          time: "09:00",
          imagePath: "tomorrowland.png",
        },
        {
          id: 2,
          category: "concert",
          title: "Rock Werchter",
          description: "Rock Festival",
          location: "Werchter",
          date: "July 4, 2021",
          time: "09:00",
          imagePath: "rockwerchter.png",
        },
      ],
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
};
</script>
