import { userReducer } from './userReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: userReducer
})

export type RootState = ReturnType<typeof rootReducer>