<template>
    <div class="country-show">
      <div class="country-container">
        <img :src="country.flags.svg" class="flag-img">
        <div class="country-details">
          <h2>{{ country.name.common }}</h2>
          <div class="wrapper">
            <div class="data-wrapper">
              <h4>Capital: </h4>
              <span>{{ country.capital[0] }}</span>
            </div>
          </div>
          <div class="wrapper">
            <div class="data-wrapper">
              <h4>Continent: </h4>
              <span>{{ country.continents[0] }}</span>
            </div>
          </div>
          <div class="wrapper">
            <div class="data-wrapper">
              <h4>Population: </h4>
              <span>{{ formatPopulation(country.population) }}</span>
            </div>
          </div>
          <div class="wrapper">
            <div class="data-wrapper">
              <h4>Currency: </h4>
              <span>
                {{ country.currencies[Object.keys(country.currencies)].name }} -
                {{ Object.keys(country.currencies)[0] }}
              </span>
            </div>
          </div>
          <div class="wrapper">
            <div class="data-wrapper">
              <h4>Common Languages: </h4>
              <span>
                {{ Object.values(country.languages)
                  .toString()
                  .split(",")
                  .join(", ") }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CountryShow",
    props: {
      country: {
        type: Object,
        required: true,
      },
    },
    methods: {
    formatPopulation(population) {
      if (population >= 1000000000) {
        return (population / 1000000000).toLocaleString() + " billion";
      } else if (population >= 1000000) {
        return (population / 1000000).toLocaleString() + " millions";
      } else {
        return population.toLocaleString();
      }
    },
  },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

  .country-show {
    margin-top: 3em;
  }

  .country-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 450px;
  background-color: #ffffff;
  margin-top: 30px;
  padding: 4em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}  
  .flag-img {
    display: block;
    width: 70%;
    min-width: 7.5em;
    margin-bottom: 1.2em;
  }
  
  h2 {
    font-weight: 600;
    color: #222a43;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1.8em;
  }  
  .data-wrapper {
    margin-bottom: 1em;
    letter-spacing: 0.3px;
  }
  
  h4 {
    display: inline;
    font-weight: 500;
    color: #222a43;
  }
  
  span {
    color: #5d6274;
  }
  
h3 {
    text-align: center;
    font-size: 1.2em;
    font-weight: 400;
    color: #ff465a;
}
</style>
  