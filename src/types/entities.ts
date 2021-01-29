import {
    changeBtnIncActivityAC,
    changeBtnResetActivityAC,
    changeBtnSetActivityAC,
    getMaxValueAC,
    getMinValueAC,
    incValueAC,
    onChangeMaxValueHandlerAC,
    onChangeMinValueHandlerAC, onChangeStatusErrorAC,
    resetValueAC,
    setValueInputAC
} from "../state/count-reducer";

export type DispathActionType = ReturnType<typeof getMinValueAC> |
    ReturnType<typeof getMaxValueAC> |
    ReturnType<typeof incValueAC> |
    ReturnType<typeof resetValueAC> |
    ReturnType<typeof setValueInputAC> |
    ReturnType<typeof changeBtnResetActivityAC>|
    ReturnType<typeof changeBtnIncActivityAC>|
    ReturnType<typeof changeBtnSetActivityAC> |
    ReturnType<typeof onChangeMinValueHandlerAC> |
    ReturnType<typeof onChangeMaxValueHandlerAC>|
    ReturnType<typeof onChangeStatusErrorAC>