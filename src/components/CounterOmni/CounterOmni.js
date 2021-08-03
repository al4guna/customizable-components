import React from 'react';
import { Counter, ContainerCounter, Text, Button, Input } from './styled';

const CounterOmni = props => {
    const {
        text,
        disabled = true,
        input,
        btnAdd,
        btnSubtract,
    } = props;

    return (
        <Counter>
            <Text>{text}</Text>
            <ContainerCounter>
                <Button {...btnSubtract}>-</Button>
                <Input
                    {...input}
                    type={'number'}
                    disabled={disabled}
                />
                <Button {...btnAdd}>+</Button>
            </ContainerCounter>
        </Counter>
    );
}

export default CounterOmni;
