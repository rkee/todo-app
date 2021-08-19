import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'; //immerjs
import { AppState, Item, TodoPayloadTitle, TodoPayloadId } from "./types"

const initialState: AppState = {
    todoItems: []
}

const addTodo: CaseReducer<AppState, PayloadAction<TodoPayloadTitle>> = (state, action) => {
    const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
    };
    state.todoItems.push(newTodo);
};

const toggleComplete: CaseReducer<AppState, PayloadAction<Item>> = (state, action) => {
    const targetTodo = state.todoItems.find(todo => todo.id === action.payload.id);
    if (targetTodo !== undefined) targetTodo.completed = action.payload.completed;
}

const removeTodo: CaseReducer<AppState, PayloadAction<TodoPayloadId>> = (state, action) => {
    const targetIndex = state.todoItems.findIndex(todo => todo.id === action.payload.id);
    state.todoItems.splice(targetIndex, 1);
}

const editTitle: CaseReducer<AppState, PayloadAction<Item>> = (state, action) => {
    const targetTodo = state.todoItems.find(todo => todo.id === action.payload.id);
    if (targetTodo !== undefined) targetTodo.title = action.payload.title;
}

export const foo = (fn) => async (dispatch, getState) => {
    setTimeout(() => {
        // do nothing
    }, 5000);
    await dispatch(fn());
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo,
        toggleComplete,
        removeTodo,
        editTitle
    }
});

export default todoSlice;