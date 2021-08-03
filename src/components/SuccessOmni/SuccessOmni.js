import React from 'react';
import { Success, Text } from "./styled";

import success from '../../assets/success.svg';

const SuccessOmni = () => {
    return (
        <Success>
            <Text>SUCCESS</Text>
            <img src={success} alt={'success'}/>
        </Success>
    )
}

export default SuccessOmni;
