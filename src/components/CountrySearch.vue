<template>
    <header class="country-search-header">
      <div class="search-wrapper">
        <input type="text" id="country-inp" placeholder="Entre com um nome de país em inglês..."
        v-model="countryName" @click="hideErrorMessage"/>
        <button id="search-btn" @click="searchCountry">Search</button>
      </div>
      <div v-if="showErrorMessage" class="error-message">{{ errorMessage }}</div>
    </header>
  </template>
  
  <script>
  export default {
    name: "CountrySearch",
    data() {
      return {
        countryName: "",
        showErrorMessage: false,
        errorMessage: "",
      };
    },
    methods: {
        // Método para pesquisar na API e gerenciar os diversos erros
        searchCountry() {

            this.showErrorMessage = false; // Resetar a exibição do erro
            this.errorMessage = ""; // Limpar a mensagem de erro

            if (this.countryName.length === 0) {
                this.showErrorMessage = true;
                this.errorMessage = "O campo não pode estar vazio.";
                return;
            }

            const finalURL = `https://restcountries.com/v3.1/name/${this.countryName}?fullText=true`;
            console.log(finalURL);

            fetch(finalURL)
                .then((response) => {
                if (!response.ok) {
                    throw new Error("Não foi possível encontrar o país.");
                }
                return response.json();
                })
                .then((data) => {
                if (data.length === 0) {
                    throw new Error("Nenhum país encontrado.");
                }
                    this.showErrorMessage = false;
                    this.$emit("country-found", data[0]);
                })
                .catch((error) => {
                    this.showErrorMessage = true;
                    this.errorMessage = error.message;
                    this.$emit("country-error", error.message);
                });
        },

        // Método que esconde os erros quando clicam novamente 
        hideErrorMessage() {
            this.showErrorMessage = false;
            this.errorMessage = "";
        },
    },
};
</script>

  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}
.country-search-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 999;
  padding: 1em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.search-wrapper {
  display: grid;
  grid-template-columns: 9fr 3fr;
  gap: 1.25em;
}
.search-wrapper button {
  font-size: 1em;
  background-color: #e04646;
  color: #ffffff;
  padding: 0.8em 0;
  border: none;
  border-radius: 1.5em;
  cursor: pointer;
}
.search-wrapper button:hover {
  background-color: #b50404;
}
.search-wrapper input {
  font-size: 1em;
  padding: 0 0.62em;
  border: none;
  border-bottom: 2px solid #e04646;
  outline: none;
  color: #222a43;
}
.error-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e04646;
  color: #ffffff;
  padding: 1em;
  border-radius: 8px;
  font-size: 1.2em;
}
</style>
  