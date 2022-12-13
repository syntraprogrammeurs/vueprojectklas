<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-10 offset-lg-1">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>COUNTRIES</h1>
        <div class="row">
          <input
            class="my-5"
            type="text"
            v-model="search"
            placeholder="search concert ..."
          />
          <CountryItem
            v-for="country in countries"
            :key="country.name"
            :country="country"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CountryItem from "@/components/CountryItem";
import CountryService from "@/services/CountryService";

export default {
  name: "AboutView",
  data() {
    return {
      search: "",
      countries: null,
    };
  },
  computed: {
    filteredItems() {
      return this.countries.filter((country) => {
        return (
          country.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
  components: {
    CountryItem,
  },
  created() {
    CountryService.getCountries()
      .then((response) => {
        console.log(response.data);
        this.countries = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
