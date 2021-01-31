import {
    incValueAC,
    onChangeMaxValueHandlerAC,
    onChangeMinValueHandlerAC, onChangeStatusErrorAC,
    resetValueAC,
    setValueInputAC
} from "../state/count-reducer";

export type DispathActionType = ReturnType<typeof incValueAC> |
    ReturnType<typeof resetValueAC> |
    ReturnType<typeof setValueInputAC> |
    ReturnType<typeof onChangeMinValueHandlerAC> |
    ReturnType<typeof onChangeMaxValueHandlerAC>|
    ReturnType<typeof onChangeStatusErrorAC>