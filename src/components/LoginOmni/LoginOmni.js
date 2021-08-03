import React from 'react';
import {
    Form,
    Button,
    DivLogin,
    DivContainerButton,
} from "./styled";
import SignInOmni from "./SignInOmni";
import RegisterOmni from "./RegisterOmni/RegisterOmni";
import SuccessOmni from "../SuccessOmni";
import { useLoginOmni } from "../../talons/LoginOnmi/useLoginOmni";

const LoginOmni = () => {
    const {
        login,
        LOGIN_STATUS,
        handleLoginChange,
        handleSuccessChange
    } = useLoginOmni({});

    if(login === LOGIN_STATUS["SUCCESS"]) {
        return <SuccessOmni />
    }

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
                { login === LOGIN_STATUS["SIGN_IN"] &&
                    <SignInOmni
                        handleSuccessChange={handleSuccessChange}
                    />
                }
                { login === LOGIN_STATUS["REGISTER"] &&
                    <RegisterOmni
                        handleSuccessChange={handleSuccessChange}
                    />
                }
            </Form>
        </DivLogin>
    )
}

export default LoginOmni;
