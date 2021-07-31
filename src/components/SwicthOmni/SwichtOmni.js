import React from 'react';
import { DivSwicth, LabelSwicth, InputSwicth, SpanRound } from './styled';

const SwicthOmni = props => {
    const {
        ...res
    } = props;

    return (
        <DivSwicth>
            <LabelSwicth className="switch">
                <InputSwicth {...res} type="checkbox" />
                <SpanRound className="slider round" />
            </LabelSwicth>
        </DivSwicth>
    );
}

export default SwicthOmni;
