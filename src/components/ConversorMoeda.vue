<template>
    <div class="conversorMoeda">
        <h2>{{moedaA}} Para {{moedaB}}</h2>
        <input type="text" v-model="moedaA_value" v-bind:placeholder="moedaA">
        <input type="button" value="Converter" v-on:click="converter">
        <h2>{{ moedaB_value }}</h2>
    </div>
</template>

<script>
export default {
    name: "ConversorMoeda",
    props: ["moedaA", "moedaB"],
    data(){
        return {
            moedaA_value: "",
            moedaB_value: 0
        }
    },
    methods: {
        converter(){
            
            let de = this.moedaA;
            let para = this.moedaB;

            var url = "https://api.exchangerate.host/convert?from=" + de + "&to=" + para

        fetch(url).then(res=>{
            return res.json()
        })        
            .then(json =>{
                console.log(json)
                    let cotacao = json.result;
                    this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2)
        })
        }
    },
}
</script>

<style scoped>
.conversorMoeda {
    padding: 20px;
    max-height: 180px;
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    background-color: white;
    border-radius: 5px;
}

.conversorMoeda h2 {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
}

.conversorMoeda input[type="text"] {
    width: 250px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.conversorMoeda input[type="button"] {
    width: 273px;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.conversorMoeda h2:last-child {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
}
</style>