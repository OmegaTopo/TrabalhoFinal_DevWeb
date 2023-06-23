<template>
    <div class="KanyeRest">
      <h1>Ouça a palavra de Kanye West</h1>
      <input type="button" v-on:click="emitir" value="ouvir" />
      <br />
      <div v-if="response">
        <p>{{response.quote}}</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "KanyeRest",
    data() {
      return {
        west: "",
        response: null,
      };
    },
    methods: {
      emitir() {
        fetch(`https://api.kanye.rest/`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const kanye = data.quote;
            console.log(kanye);
            this.response = data;
          });
      },
    },
  };
</script>
  
<style scoped>
    .kanye{
    padding: 20px;
    max-width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    text-align: center;
    margin: auto;
    }
</style>
  
  