import React from 'react';
import { useLoginOmni } from "../../talons/LoginOnmi/useLoginOmni";
import {
    Form,
    Button,
    DivLogin,
    DivContainerButton,
} from "./styled";
import SignInOmni from "./SignInOmni";
import RegisterOmni from "./RegisterOmni/RegisterOmni";

const LoginOmni = props => {
    const {
        login,
        LOGIN_STATUS,
        handleLoginChange
    } = useLoginOmni();

    return (
        <DivLogin>
            <DivContainerButton>
                <Button
                    name={"SIGN_IN"}
                    onClick={handleLoginChange}
                    background={login === LOGIN_STATUS["SIGN_IN"]}
                >
                    INGRESO
                </Button>
                <Button
                    onClick={handleLoginChange}
                    name={LOGIN_STATUS["REGISTER"]}
                    background={login === LOGIN_STATUS["REGISTER"]}
                >
                    REGISTRO
                </Button>
            </DivContainerButton>
            <Form>
                { login === LOGIN_STATUS["SIGN_IN"] && <SignInOmni /> }
                { login === LOGIN_STATUS["REGISTER"] && <RegisterOmni /> }
            </Form>
        </DivLogin>
    )
}

export default LoginOmni;
