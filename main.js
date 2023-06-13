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
            const data = {
                newTask : this.newTask
            };

            axios.post(this.apiUrl, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((risposta) => {
                this.arrayDati = risposta.data;
            });
        }


    },
    mounted() {

        this.getDati();


    }
}).mount("#app")
