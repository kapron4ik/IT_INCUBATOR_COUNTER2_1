import React from 'react';
import './App.css';
import Button from "./Component/Button/Button";
import ScreenInput from "./Component/Screen/ScreenInput";
import ScreenIter from "./Component/Screen/ScreenIter";
import {
    CountListType,
    incValueAC, keyMaxValue,
    keyMinValue,
    onChangeMaxValueHandlerAC,
    onChangeMinValueHandlerAC, onChangeStatusErrorAC,
    resetValueAC,
    setValueInputAC
} from "./state/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";


function AppWhitRedux() {

    const countList = useSelector<AppRootStateType, CountListType>(state => state.countList)
    const dispatch = useDispatch()

    function incValue() {
        const action = incValueAC()
        dispatch(action)
    }

    function resetValue() {
        const action = resetValueAC()
        dispatch(action)
    }

    function setValueInput() {
        const action = setValueInputAC(keyMinValue, keyMaxValue)
        dispatch(action)
    }

    function onChangeMinValueHandler(newValue: number) {
        const action = onChangeMinValueHandlerAC(newValue)
        dispatch(action)
    }

    function onChangeMaxValueHandler(newValue: number) {
        const action = onChangeMaxValueHandlerAC(newValue)
        dispatch(action)
    }

    function onChangeStatusError(error: boolean) {
        const action = onChangeStatusErrorAC(error)
        dispatch(action)
    }


    return (
        <div className="App">

            <div className="item">
                {countList.editMode
                    ? < ScreenInput
                        minValue={countList.minValue}
                        maxValue={countList.maxValue}
                        onChangeMinValueHandler={onChangeMinValueHandler}
                        onChangeMaxValueHandler={onChangeMaxValueHandler}
                        setError={onChangeStatusError}/>
                    : < ScreenIter
                        value={countList.value}
                        editMode={countList.editMode}
                        error={countList.error}
                        maxValue={countList.maxValue}/>
                }
                <div className="panel">
                    < Button
                        title={"inc"}
                        isActive={countList.disableInc}
                        onClick={incValue}
                    />
                    < Button
                        title={"reset"}
                        isActive={countList.disableReset}
                        onClick={resetValue}
                    />
                    < Button
                        title={"set"}
                        isActive={countList.disableSet}
                        onClick={setValueInput}

                    />
                </div>
            </div>
        </div>
    );
}

export default AppWhitRedux;
