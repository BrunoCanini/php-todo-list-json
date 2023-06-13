const { createApp } = Vue;

createApp({

    data() {
        return {
            apiUrl : "api.php" ,
            arrayDati : [],
            newTask : "",
        }
    },
    methods: {
        
        addNewTask() {
            console.log("aggiungi nuova task", this.newTask);
        }


    },
    mounted() {

        axios.get(this.apiUrl).then((risposta) => {
            console.log(risposta.data);
            this.arrayDati = risposta.data;
            console.log(this.arrayDati)
        });

    }
}).mount("#app")
