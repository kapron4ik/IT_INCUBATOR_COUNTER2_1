import React from "react";
import s from "./ScreenIter.module.css";


type PropsType = {
    value: number
    editMode: boolean
    error: boolean
    maxValue:number
}

function ScreenIter(props:PropsType){

    return (
        <div className={ props.value === props.maxValue ? `${s.screen} ${s.error}` : `${s.screen}`}>
            <div>{props.value}</div>
        </div>
    )
}

export default ScreenIter;