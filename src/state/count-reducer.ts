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

let initialState = {
    minValue: 0,
    maxValue: 10,
    value: 0,
    editMode: true,
    error: false,
    disableReset: true,
    disableInc: true,
    disableSet: false
}


export const countListReducer = (state: CountListType = initialState, action: DispathActionType) => {
    switch (action.type) {
        case 'GET_MIN_VALUE': {
            const json = localStorage.getItem(action.keyMinValue)
            if (json) {
                let inputValue = JSON.parse(json)
                return {...state, minValue: inputValue.value}
            } else {
                return state
            }
        }
        case 'GET_MAX_VALUE': {
            const json = localStorage.getItem(action.keyMaxValue)
            if (json) {
                let inputValue = JSON.parse(json)
                return {...state, minValue: inputValue.value}
            } else {
                return state
            }
        }
        case 'INC_VALUE':
            if (state.value < state.maxValue) {
                return {...state, value: state.value + 1}
            } else {
                return state
            }
        case 'RESET_VALUE':
            return {...state, value: state.minValue}
        case 'SET_VALUE_INPUT':
            debugger
            localStorage.setItem(action.keyMinValue, JSON.stringify({value: state.minValue}))
            localStorage.setItem(action.keyMaxValue, JSON.stringify({value: state.maxValue}))
            return {...state, value: state.minValue, editMode: !state.editMode}
        case 'CHANGE_BTN_RESET_ACTIVITY':
            if (state.error) {
                return {...state, disableReset: true}
            }
            if (!state.editMode) {
                return {...state, disableReset: true}
            } else {
                return {
                    ...state, disableReset: state.value === state.minValue
                }
            }
        case 'CHANGE_BTN_INC_ACTIVITY':
            if (state.error) {
                return {...state, disableInc: true}
            }
            if (!state.editMode) {
                return {...state, disableInc: true}
            } else {
                return {
                    ...state, disableInc: state.value === state.maxValue
                }
            }
        case 'CHANGE_BTN_SET_ACTIVITY':
            if (state.error) {
                return {...state, disableSet: true}
            }
            if (!state.editMode) {
                return {...state, disableSet: false}
            } else {
                return {
                    ...state, disableSet: false
                }
            }
        case 'CHANGE_MIN_VALUE_HANDLER':
            return {...state, minValue: action.newValue}
        case 'CHANGE_MAX_VALUE_HANDLER':
            return {...state, maxValue: action.newValue}
        case 'CHANGE_STATUS_ERROR':
            return {...state, error: action.newValue}

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

export const changeBtnResetActivityAC = () => {
    return {
        type: "CHANGE_BTN_RESET_ACTIVITY",
    } as const
}

export const changeBtnIncActivityAC = () => {
    return {
        type: "CHANGE_BTN_INC_ACTIVITY",
    } as const
}

export const changeBtnSetActivityAC = () => {
    return {
        type: "CHANGE_BTN_SET_ACTIVITY",
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

export const onChangeStatusErrorAC = (newValue: boolean) => {
    return {
        type: "CHANGE_STATUS_ERROR",
        newValue
    } as const
}


