import React from 'react';
import './MyButton.css';

const MyButton = ({children}) => (
    <button className='btn'>
        <span className='btn-text'>{children}</span>
    </button>
);

export default MyButton;