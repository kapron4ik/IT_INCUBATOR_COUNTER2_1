import {DispathActionType} from "../types/entities"

export type CountListType = {
    minValue: number,
    maxValue: number,
    value: number,
    editMode: boolean,
    error: boolean,
    disableReset: boolean,
    disableInc: boolean,
    disableSet: boolean
}

export const keyMaxValue: string = "MaxValue"
export const keyMinValue: string = "MinValue"

function getLocalStorageObjectItem(key: string, defaultValue: number) {
    const json = localStorage.getItem(key)
    if (json) {
        let inputValue = JSON.parse(json)
        return inputValue.value
    } else {
        return defaultValue
    }
}

let initialState = {
    minValue: getLocalStorageObjectItem(keyMinValue, 0),
    maxValue: getLocalStorageObjectItem(keyMaxValue, 10),
    value: getLocalStorageObjectItem(keyMinValue, 0),
    editMode: false,
    error: false,
    disableReset: true,
    disableInc: false,
    disableSet: false
}

export const countListReducer = (state: CountListType = initialState, action: DispathActionType) => {
    switch (action.type) {
        case 'INC_VALUE':
            if (state.value < state.maxValue) {
                debugger
                return {...state,
                    value: state.value + 1,
                    disableReset:state.value+1 === state.minValue,
                    disableInc:state.value+1 === state.maxValue}
            } else {
                return state
            }
        case 'RESET_VALUE':
            return {...state,
                value: state.minValue,
                disableReset:true,
                disableInc:false
            }
        case 'SET_VALUE_INPUT': {
            localStorage.setItem(action.keyMinValue, JSON.stringify({value: state.minValue}))
            localStorage.setItem(action.keyMaxValue, JSON.stringify({value: state.maxValue}))
            if(state.editMode){
                return {...state,
                    value: state.minValue,
                    editMode: false,
                    disableInc: false,
                    disableReset: true
                }
            } else {
                return {...state,
                    editMode: true,
                    disableInc: true,
                    disableReset: true
                }

            }
        }
        case 'CHANGE_MIN_VALUE_HANDLER':
            return {...state, minValue: action.newValue}
        case 'CHANGE_MAX_VALUE_HANDLER':
            return {...state, maxValue: action.newValue}
        case 'CHANGE_STATUS_ERROR':{
            if (action.error){
                return {...state,
                    error: true,
                    // disableReset: true,
                    // disableInc: true,
                    disableSet: true
                }
            } else {
                return {...state,
                    error: false,
                    // disableReset: state.value === state.minValue,
                    // disableInc: state.value === state.maxValue,
                    disableSet: false
                }
            }
        }
        default:
            return state
    }
}

export const getMinValueAC = (keyMinValue: string) => {
    return {
        type: "GET_MIN_VALUE",
        keyMinValue
    } as const
}
export const getMaxValueAC = (keyMaxValue: string) => {
    return {
        type: "GET_MAX_VALUE",
        keyMaxValue
    } as const
}
export const incValueAC = () => {
    return {
        type: "INC_VALUE",
    } as const
}
export const resetValueAC = () => {
    return {
        type: "RESET_VALUE",
    } as const
}
export const setValueInputAC = (keyMinValue: string, keyMaxValue: string) => {
    return {
        type: "SET_VALUE_INPUT",
        keyMinValue,
        keyMaxValue
    } as const
}
export const onChangeMinValueHandlerAC = (newValue: number) => {
    return {
        type: "CHANGE_MIN_VALUE_HANDLER",
        newValue
    } as const
}
export const onChangeMaxValueHandlerAC = (newValue: number) => {
    return {
        type: "CHANGE_MAX_VALUE_HANDLER",
        newValue
    } as const
}
export const onChangeStatusErrorAC = (error: boolean) => {
    return {
        type: "CHANGE_STATUS_ERROR",
        error
    } as const
}


