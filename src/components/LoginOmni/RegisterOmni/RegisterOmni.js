import React from 'react';
import TextInputOmni from "../../TextInputOmni";
import ButtonOmni from "../../ButtonOmni";
import { useRegisterOmni } from "../../../talons/LoginOnmi/RegisterOmni/useRegisterOmni";

const RegisterOmni = props => {
    const {
        handleSuccessChange
    } = props;

    const {
        handleSubmit
    } = useRegisterOmni({handleSuccessChange})

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
            <ButtonOmni
                text={'Registro'}
                onClick={handleSubmit}
            />

        </div>
    )
}

export default RegisterOmni;
