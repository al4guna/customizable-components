import React from 'react';
import TextInputOmni from "../../TextInputOmni";
import SwichtOmni from "../../SwicthOmni";
import ButtonOmni from "../../ButtonOmni";
import {
    DivNewsletter,
    TextNewsletter,
    LinkForgotPassword
} from './styled';
import { useSignInOmni } from "../../../talons/LoginOnmi/SignInOmni/useSignInOmni";

const SignInOmni = props => {
    const {
        handleSuccessChange
    } = props;

    const {
        handleSubmit,
        handleNewsletter
    } = useSignInOmni({ handleSuccessChange });

    return (
        <div>
            <TextInputOmni
                text={'EMAIL'}
                placeholder={'ejemplo@email.com'}
            />
            <TextInputOmni
                type={'password'}
                text={'CONTRASEÑA'}
                placeholder={'******'}
            />
            <DivNewsletter>
                <SwichtOmni onClick={handleNewsletter} />
                <TextNewsletter>Suscribirse al Newsletter</TextNewsletter>
            </DivNewsletter>
            <ButtonOmni
                text={'Ingreso'}
                onClick={handleSubmit}
            />
            <LinkForgotPassword>Olvide Contraseña</LinkForgotPassword>
        </div>
    )
}

export default SignInOmni;
