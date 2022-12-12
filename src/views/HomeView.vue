<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TicketItem v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src

import TicketItem from "@/components/TicketItem";

export default {
  name: "HomeView",
  data() {
    return {
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
  components: {
    TicketItem,
  },
};
</script>
