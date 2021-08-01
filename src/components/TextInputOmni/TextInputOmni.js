import React from 'react';
import { Label, Span, Input, DivMessage, DivContainer } from './styled';
import { useTextInputOmni } from '../../talons/TextInputOmni/useTextInputOmni';
import { IconRequire } from '../../icons/icons';

const TextInputOmni = props => {
    const {
        text,
        type,
        ...res
    } = props

    const {
        require,
        handleOnBlur,
        handleOnFocus
    } = useTextInputOmni({});

    return (
        <div>
            <DivContainer>
                <Label>{text}</Label>
                <Input
                    require={require}
                    type={type || "text"}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                    {...res}
                />
                <DivMessage
                    require={require}
                >
                    <IconRequire
                        fontSize={'1em'}
                        color={'#2FCCC3'}
                    />
                    <Span>{'REQUERIDO'}</Span>
                </DivMessage>
            </DivContainer>
        </div>
    );
}

export default TextInputOmni;
