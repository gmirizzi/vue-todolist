const app = new Vue (
    {
        el:'#root',
        data: {
            todos: [
                {
                    text:'Lavarsi la faccia',
                    done:false
                },
                {
                    text:'Fare colazione',
                    done:false
                },
                {
                    text:'Lavarsi i denti',
                    done:false
                }
            ]
        }
    }
)