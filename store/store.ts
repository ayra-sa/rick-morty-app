import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slice/filter-slice'

const store = configureStore({
    reducer: {
        filter: filterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store