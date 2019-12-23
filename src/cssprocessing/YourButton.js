import React from 'react';
// 改成模組化開發
import style from './YourButton.module.css';
const YourButton = ({children}) => (
    <button className={style.btn}>
        <span className={style['btn-text']}>{children}</span>
        {/* 要有駝峰命名 */}
        <span className={style.btnText}>{children}</span>
    </button>
);

export default YourButton;