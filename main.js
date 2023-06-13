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

        getDati(){
            axios.get(this.apiUrl).then((risposta) => {
                console.log(risposta.data);
                this.arrayDati = risposta.data;
                console.log(this.arrayDati)
            });
        },
        
        addNewTask() {
            console.log("aggiungi nuova task", this.newTask);
        }


    },
    mounted() {

        this.getDati();


    }
}).mount("#app")
