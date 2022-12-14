<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-10 offset-lg-1">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>COUNTRIES</h1>
        <div class="row">
          <div class="col-12 col-lg-3 my-auto d-flex align-items-center">
            <label class="form-label m-0 pe-2">Filter</label>
            <select v-model="selected" class="form-select" required>
              <option selected disabled value="">Choose...</option>
              <option value="1">Country</option>
              <option value="2">Capital</option>
              <option value="3">Population</option>
            </select>
          </div>
          <div class="col-12 col-lg-9">
            <input
              class="my-5 form-control"
              type="text"
              v-model="search"
              placeholder="search ..."
            />
          </div>

          <CountryItem
            v-for="country in filteredItems"
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
  name: "CountryView",
  data() {
    return {
      search: "",
      selected: "",
      countries: null,
    };
  },
  computed: {
    filteredItems() {
      return this.countries.filter((country) => {
        if (this.selected == 1) {
          if (country.name) {
            return (
              country.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            );
          } else {
            return (country.name = "not known");
          }
        } else if (this.selected == 2) {
          if (country.capital) {
            return (
              country.capital.toLowerCase().indexOf(this.search.toLowerCase()) >
              -1
            );
          } else {
            return (country.capital = "not known");
          }
        } else if (this.selected == 3) {
          if (country.population) {
            return Number(country.population) > Number(this.search);
          } else {
            return (country.population = 0);
          }
        }
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
