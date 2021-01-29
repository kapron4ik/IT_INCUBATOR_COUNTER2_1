import {combineReducers, createStore} from "redux";
import {countListReducer} from "./count-reducer";

const rootReducer = combineReducers({
    countList: countListReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>