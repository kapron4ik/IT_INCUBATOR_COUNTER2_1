import React, {ChangeEvent, useState} from "react";
import s from "./InputNumber.module.css";
import styleScreen from "./ScreenIter.module.css";

type PropsType = {
    minValue: number
    maxValue: number
    onChangeMinValueHandler: (newValue: number) => void
    onChangeMaxValueHandler: (newValue: number) => void
    setError: (props: boolean) => void
}

function ScreenInput(props: PropsType) {
    const [errorInput, setErrorInput] = useState({min: false, max: false})

    let newMinValue = props.minValue
    let newMaxValue = props.maxValue

    const errorHandlerValue = () => {
        if (newMaxValue <= 0 || newMaxValue === newMinValue || newMaxValue < newMinValue) {
            setErrorInput({min: true, max: true})
            props.setError(true)
        } else if (newMinValue < 0) {
            setErrorInput({min: true, max: false})
            props.setError(true)
        } else {
            setErrorInput({min: false, max: false})
            props.setError(false)
        }
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        newMinValue = +e.currentTarget.value
        props.onChangeMinValueHandler(newMinValue)
        errorHandlerValue()
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        newMaxValue = +e.currentTarget.value
        props.onChangeMaxValueHandler(newMaxValue)
        errorHandlerValue()
    }

    return (
        <div className={styleScreen.screen}>
            <div>
                <label htmlFor="minValue">max value:</label>
                <input type="number"
                       value={props.maxValue}
                       name="minValue"
                       onChange={onChangeMaxValue}
                       className={errorInput.max ? `${s.error}` : ""}
                />
            </div>
            <div>
                <label htmlFor="maxValue">start value:</label>
                <input type="number"
                       value={props.minValue}
                       name="maxValue"
                       onChange={onChangeMinValue}
                       className={errorInput.min ? `${s.error}` : ""}
                />
            </div>
        </div>
    )
}

export default ScreenInput;