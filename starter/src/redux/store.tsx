import { configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import { Action } from 'redux';
import todoSlice from './todo/todoSlice';

// const rootReducer = combineReducers({})
// export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    }
});

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<AppState, any, Action<string>>;

export default store


/**
 * store: [key]: value
 * {
 * todo: [{ id: 0, title: "todo1", completed: false },
    { id: 1, title: "todo2", completed: false },
    { id: 2, title: "todo3", completed: true }],
 * reminders: {}
 * }
 * 
 */