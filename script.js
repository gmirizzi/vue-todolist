const app = new Vue(
    {
        el: '#root',
        data: {
            newToDo: "",
            todos: [
                {
                    text: 'Lavarsi la faccia',
                    done: false
                },
                {
                    text: 'Fare colazione',
                    done: false
                },
                {
                    text: 'Fare la cacca',
                    done: false
                }
            ]
        },
        methods: {
            deleteToDo(index) {
                this.todos.splice(index, 1)
            },
            addToDo() {
                if (this.newToDo != "") {
                    const newElement={
                        text: this.newToDo,
                        done:false
                    }
                    this.todos.push(newElement)
                }
                this.newToDo=""
            }
        }
    }
)