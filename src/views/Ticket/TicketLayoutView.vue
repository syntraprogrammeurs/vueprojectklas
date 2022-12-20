<template>
  <div class="col-12 col-lg-6">
    <div class="card h-100">
      <div id="nav">
        <router-link :to="{ name: 'TicketDetailsView', params: { id } }"
          >Details</router-link
        >
        <router-link :to="{ name: 'TicketEditView', params: { id } }"
          >Edit</router-link
        >
        <router-view :event="event"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TicketService from "@/services/TicketService";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    TicketService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
