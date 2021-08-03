import React from 'react';
import { Main, ContainerLogo, Logo } from './styled';
import LOGO from '../../assets/Logo.png';
import LoginOmni from "../LoginOmni";
import MenuOmni from "../MenuOmni/MenuOmni";

const LoginPage = () => {

    return (
        <Main>
            <MenuOmni />
            <ContainerLogo>
                <Logo src={LOGO} alt={''}/>
            </ContainerLogo>
            <LoginOmni />
        </Main>
    );
}

export default LoginPage;
