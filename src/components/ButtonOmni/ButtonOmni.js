import React from 'react';
import { DivContainer, Button } from './styled';

const ButtonOmni = props => {
    const {
        text,
        ...res
    } = props;

    return (
        <DivContainer>
            <Button {...res} >{text}</Button>
        </DivContainer>
    )
}

export default ButtonOmni;
