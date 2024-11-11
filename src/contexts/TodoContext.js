import { createContext, useContext } from "react";


export const TodoContext = createContext({
    /* todos ke andr componets ki functioanlity 
    nhi likhte bs define krte h ki aap ek 
    array ho, object ko, variable ho */

    todos: [ // array mil rha todos se
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        },{},{}
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
}) 

// useTodo ek hook h jo export kr rhe h
export const useTodo = () => {
    return useContext(TodoContext)
}

// provider bhi export kr dete h 

export const TodoProvider = TodoContext.Provider











