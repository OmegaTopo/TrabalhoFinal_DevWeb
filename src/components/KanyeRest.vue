<template>
    <div class="KanyeRest">
      <input class="GOAT" type="button" v-on:click="emitir" value="ouvir" />
      <br />
      <div v-if="response">
        <p class="Resposta">{{response.quote}}</p>
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
  @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');

    .KanyeRest{
    padding: 20px;
    width: 100%;
    text-align: center;
    }
    .GOAT {
      width: 100px;
      padding: 10px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;    
    }
    .Resposta{
      color: white;
      font-style: italic;
      font-size: 30px;
      font-family: 'Cedarville Cursive', cursive;
    }
</style>
  
  