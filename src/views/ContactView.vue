<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <TicketItem></TicketItem>
  </div>
</template>
<script>
// @ is an alias to /src

import TicketItem from "@/components/TicketItem";

export default {
  name: "ContactView",
  components: {
    TicketItem,
  },
};
</script>
