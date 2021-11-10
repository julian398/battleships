import React from 'react'
import Button from '@material-ui/core/Button';
import s from '../Styles/cell.module.css'

export default function Cell({details}){
    return <Button className={s.button} injectFirst>{details.value}</Button> 
}