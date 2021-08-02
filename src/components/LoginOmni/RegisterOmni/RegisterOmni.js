import React from 'react';
import TextInputOmni from "../../TextInputOmni";
import SwichtOmni from "../../SwicthOmni";
import ButtonOmni from "../../ButtonOmni";

const RegisterOmni = props => {
    return (
        <div>
            <TextInputOmni
                text={'NOMBRE'}
                placeholder={'Angel'}
            />
            <TextInputOmni
                text={'APELLIDO'}
                placeholder={'Pérez'}
            />
            <TextInputOmni
                text={'EMAIL'}
                placeholder={'ejemplo@email.com'}
            />
            <TextInputOmni
                type={'password'}
                text={'CONTRASEÑA'}
                placeholder={'********'}
            />
            <ButtonOmni text={'Registro'}/>

        </div>
    )
}

export default RegisterOmni;
