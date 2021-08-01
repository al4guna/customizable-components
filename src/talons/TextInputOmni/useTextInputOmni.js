import { useState } from 'react';

export const useTextInputOmni = props => {

    const [require, setRequire] = useState(false);

    const handleOnFocus = e => {
        setRequire(true);
    }

    const handleOnBlur = e => {
        setRequire(false);
    }

    return {
        require,
        handleOnBlur,
        handleOnFocus
    }
}
