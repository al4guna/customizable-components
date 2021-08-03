import { useState} from "react";

const LOGIN_STATUS = {
    SIGN_IN : 'SIGN_IN',
    REGISTER: 'REGISTER',
    SUCCESS: 'SUCCESS'
}

export const useLoginOmni = () => {
    const [login, setLogin] = useState('SIGN_IN');

    const handleLoginChange = e => {
        const name = e.target.getAttribute('name');
        setLogin(LOGIN_STATUS[name]);
    }

    const handleSuccessChange = () => {
        setLogin(LOGIN_STATUS["SUCCESS"]);
    }

    return {
        login,
        LOGIN_STATUS,
        handleLoginChange,
        handleSuccessChange
    }
}
