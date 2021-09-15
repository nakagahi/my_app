
import React, {useState} from 'react';

import Spiner from './Spiner'
import { useHistory } from "react-router-dom";
const Form = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/')
    }

    return(
        <>
            <h1>ユーザのほ-む画面だよ!今日はここまで！！！！！！！</h1>
            <button onClick={handleClick}>ホームへ</button>
        </>
    )
}

export default Form;