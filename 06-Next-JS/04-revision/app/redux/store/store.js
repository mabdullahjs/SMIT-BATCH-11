"use client"

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice"



export const store = configureStore({
    reducer: {}
})