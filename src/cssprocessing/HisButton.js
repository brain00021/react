import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
padding: 20px;
background: blue;
color: #fff;
`

const HisButton = ({children}) => (
    <Button>
        test
    </Button>
);

export default HisButton;