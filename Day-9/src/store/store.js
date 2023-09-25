import { configureStore } from '@reduxjs/toolkit'
import customReducer from './reducer'

export default configureStore(
    {
        reducer: {
            store: customReducer
        }
    }
)