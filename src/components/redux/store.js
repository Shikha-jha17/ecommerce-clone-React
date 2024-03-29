import { configureStore } from "@reduxjs/toolkit"

import EshopReducer from "./EshopSlice";


export const store = configureStore({
  reducer: {EshopReducer},
})

