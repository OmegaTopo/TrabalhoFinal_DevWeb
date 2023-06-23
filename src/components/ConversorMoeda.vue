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
.conversorMoeda{
    padding: 20px;
    max-width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>