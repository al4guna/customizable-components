import React from 'react';
import TextInputOmni from "../../TextInputOmni";
import SwichtOmni from "../../SwicthOmni";
import ButtonOmni from "../../ButtonOmni";
import {
    DivNewsletter,
    TextNewsletter,
    LinkForgotPassword
} from './styled';

const SignInOmni = props => {
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
                <SwichtOmni />
                <TextNewsletter>Suscribirse al Newsletter</TextNewsletter>
            </DivNewsletter>
            <ButtonOmni text={'Ingreso'}/>
            <LinkForgotPassword>Olvide Contraseña</LinkForgotPassword>
        </div>
    )
}

export default SignInOmni;
