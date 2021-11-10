import React from 'react'
import Button from '@material-ui/core/Button';
import s from '../Styles/cell.module.css'

//Functions
const clickHandler = (e) => {
    return []
}

export default function Cell({details}){
    return <Button className={s.button} onClick={clickHandler} injectFirst>{details.value}</Button> 
}