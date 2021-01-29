import React from 'react';
import './App.css';
import Button from "./Component/Button/Button";
import ScreenInput from "./Component/Screen/ScreenInput";
import ScreenIter from "./Component/Screen/ScreenIter";
import {
    changeBtnIncActivityAC,
    changeBtnResetActivityAC,
    changeBtnSetActivityAC,
    CountListType, getMaxValueAC, getMinValueAC,
    incValueAC,
    onChangeMaxValueHandlerAC,
    onChangeMinValueHandlerAC, onChangeStatusErrorAC,
    resetValueAC,
    setValueInputAC
} from "./state/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

type PropsType = {
    countList: CountListType
}

function AppWhitRedux(props:PropsType) {
    const keyMaxValue: string = "MaxValue"
    const keyMinValue: string = "MinValue"

    // function getLocalStorageObjectItem(key: string, defaultValue: number) {
    //     const json = localStorage.getItem(key)
    //     if (json) {
    //         let inputValue = JSON.parse(json)
    //         return inputValue.value
    //     } else {
    //         return defaultValue
    //     }
    // }
    //
    // const [minValue, setMinValue] = useState<number>(getLocalStorageObjectItem(keyMinValue, 0))
    // const [maxValue, setMaxValue] = useState<number>(getLocalStorageObjectItem(keyMaxValue, 10))
    // const [value, setValue] = useState<number>(minValue)
    // const [editMode, setEditMode] = useState<boolean>(false)
    // const [error, setError] = useState<boolean>(false)

    const countList = useSelector<AppRootStateType, CountListType>(state => state.countList)
    const dispatch = useDispatch()

    function getMinValue() {
        const action = getMinValueAC(keyMinValue)
        dispatch(action)
    }

    function getMaxValue() {
        const action = getMaxValueAC(keyMaxValue)
        dispatch(action)
    }

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

    function changeBtnResetActivity() {
        const action = changeBtnResetActivityAC()
        dispatch(action)
        return props.countList.disableReset
    }

    function changeBtnIncActivity() {
        const action = changeBtnIncActivityAC()
        dispatch(action)
        return props.countList.disableInc
    }

    function changeBtnSetActivity() {
        const action = changeBtnSetActivityAC()
        dispatch(action)
        return props.countList.disableSet
    }

    // let disableReset = () => value === minValue
    // let disableInc = () => value === maxValue
    // let disableSet = () => false
    //
    // if (!editMode) {
    //     disableReset = () => true
    //     disableInc = () => true
    //     disableSet = () => false
    // }
    //
    // if (error) {
    //     disableReset = () => true
    //     disableInc = () => true
    //     disableSet = () => true
    // }

    function onChangeMinValueHandler(newValue: number) {
        const action = onChangeMinValueHandlerAC(newValue)
        dispatch(action)
    }

    function onChangeMaxValueHandler(newValue: number) {
        const action = onChangeMaxValueHandlerAC(newValue)
        dispatch(action)
    }

    function onChangeStatusError(newValue: boolean) {
        const action = onChangeStatusErrorAC(newValue)
        dispatch(action)
    }



    return (
        <div className="App">

            <div className="item">
                {props.countList.editMode
                ?< ScreenIter
                    value={props.countList.value}
                    editMode={props.countList.editMode}
                    error={props.countList.error}
                    maxValue={props.countList.maxValue}/>
                :< ScreenInput
                        minValue={props.countList.minValue}
                        maxValue={props.countList.maxValue}
                        onChangeMinValueHandler={onChangeMinValueHandler}
                        onChangeMaxValueHandler={onChangeMaxValueHandler}
                        // setEditMode={setEditMode}
                        setError={onChangeStatusError}/>}
                <div className="panel">
                    < Button
                        title={"inc"}
                        isActive={changeBtnIncActivity}
                        onClick={incValue}
                    />
                    < Button
                        title={"reset"}
                        isActive={changeBtnResetActivity}
                        onClick={resetValue}
                    />
                    < Button
                        title={"set"}
                        isActive={changeBtnSetActivity}
                        onClick={setValueInput}

                    />
                </div>
            </div>
        </div>
    );
}

export default AppWhitRedux;
