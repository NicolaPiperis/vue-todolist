// Ogni elemento della todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del task
// - done, un booleano (true/false) che indica se il task è stato fatto oppure no
const {createApp} = Vue;
createApp({
    data(){
        return{
            newTask : "",
            items : [
                {
                    text : "Fare il letto",
                    done : false
                },
                {
                    text : "Lavare il Bagno",
                    done : false
                },
                {
                    text : "Andare in palestra",
                    done : false
                },
                {
                    text : "Ritirare le analisi del sangue dall clinica",
                    done : false
                },
                {
                    text : "Studiare",
                    done : false
                }
            ]
        }
    },
    methods: {
        addTask() {
           if(this.newTask !== "") {
                this.items.unshift({
                    text : this.newTask,
                    done : false
                });
                this.newTask = "";
           }
        },
        doneButton(idx) {
            if(this.items[idx].done === false){
                this.items[idx].done = true;
            }else{
                this.items[idx].done = false;
            }

        },
        removeTask(idx) {
            this.items.splice(idx,1);
        }
    }

}).mount("#app");

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni task.


// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.


// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista



// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
// Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.