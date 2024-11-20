import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'Todos',
    initialState: {
        todos: [
            {
                title: 'lorem ipsum',
                id: nanoid()
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        removeTodo: (state , action)=>{
            state.todos.splice(action.payload.index , 1)
        },
        editTodo: (state , action)=>{
            const {title , index} = action.payload
            state.todos[index].title = title
        }
    }
})


export const { addTodo , removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer