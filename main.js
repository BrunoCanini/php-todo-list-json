const { createApp } = Vue;

createApp({

    data() {
        return {
            apiUrl : "api.php" ,
            arrayDati : [],
        }
    },
    methods: {


    },
    mounted() {

        axios.get(this.apiUrl).then((response) => {
            console.log(response.data);
            this.arrayDati = response.data;
            console.log(this.arrayDati)
        });

    }
}).mount("#app")
