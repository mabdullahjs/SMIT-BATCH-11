import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    title: string;
    id: string;
}

interface TodoState {
    todo: Todo[];
}

const initialState: TodoState = {
    todo: [
        {
            title: 'abdullah',
            id: nanoid()
        },
        {
            title: 'usman',
            id: nanoid()
        },
    ]
};

// Define the slice with types
export const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ title: string }>) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            });
        },
        removeTodo: (state, action: PayloadAction<{ index: number }>) => {
            state.todo.splice(action.payload.index, 1);
        }
    }
});

// Export actions and reducer
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
