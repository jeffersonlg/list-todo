const initTodo =  [
        {
            "id": 44866,
            "name":"Write my todo list",
            "todo": false
        },
        {
            "id": 45269,
            "name":"learn react",
            "todo": false
        },
        {
            "id": 34740,
            "name":"learn Webpack",
            "todo": false
        },
        {
            "id": 47160,
            "name":"learn ES6",
            "todo": false
        },
        {
            "id": 19691,
            "name":"learn Routing",
            "todo": false
        },
        {
            "id": 20842,
            "name":"learn Redux",
            "todo": false
        }
    ]

const privateTodo = {

    genereteObj(todo){
        const myArray = todoServece.getTodo()
        const idReal = Math.floor(Math.random() * 65536)
    
        const newObj = {
            id: idReal,
            name: todo,
            todo: false
        }
        myArray.push(newObj)
        localStorage.setItem('todo', JSON.stringify(myArray))

        return myArray
    }
}

const todoServece = {
    
    getTodo() {
        return JSON.parse(localStorage.getItem('todo')) || null
    },
    setTodo(content) {
        return localStorage.setItem('todo', JSON.stringify(content))
    },
    postTodo(inputTodo){

        if(inputTodo.length === 0 || !inputTodo.trim()){
            return this.getTodo()
        }
        else{
            return privateTodo.genereteObj(inputTodo)
        }
    },
    atrTodo(todoId) {
        const data = this.getTodo()

        const newArray = data.map(item => {
            return item.id === todoId ? { ...item, todo: !item.todo } : item
        })
        
        data.push(newArray)
        localStorage.setItem('todo', JSON.stringify(newArray))

        return data
    },
    deleteTodo(val) {
        const data = this.getTodo()
        const idItem = val

        data.forEach((el, i) => {
            if(el.id === idItem)
                data.splice(i,1)
        })

        localStorage.setItem('todo', JSON.stringify(data))

        return data
    },

    localStorange() {
        if(!this.getTodo())
            this.setTodo(initTodo)

        return this.getTodo()
    }
}

export default todoServece 