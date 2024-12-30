export let todos = [
    { id: 1, title: "Learn Next.js" },
    { id: 2, title: "Build a project"},
];


export const updateTodos = (newTodos) => {
    todos = newTodos;
};