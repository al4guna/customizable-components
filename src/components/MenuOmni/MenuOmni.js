import React from 'react';
import {IconBack, IconBurger} from '../../icons/icons';
import { ContainerButton, ContainerMenu, Ul, Li, Span } from './styled';
import { useMenuOmni } from "../../talons/MenuOmni/useMenuOmni";

const MenuOmni = () => {

    const {
        visible,
        handleChangeVisible
    } = useMenuOmni({});

    return (
        <>
            <ContainerButton>
                {!visible && <IconBurger fontSize={'16px'}  onClick={handleChangeVisible}/> }
                {visible && <IconBack fontSize={'24px'} onClick={handleChangeVisible}/> }
            </ContainerButton>
            <ContainerMenu>
                <Ul>
                    <Li color={true}><Span color={true}/> INICIO</Li>
                    <Li><Span/> SERVICIOS</Li>
                    <Li><Span/> NUESTRO EQUIPO</Li>
                    <Li><Span/> PORTAFOLIO</Li>
                    <Li><Span/> CONTÁCTO</Li>
                    <Li><Span/> TÉRMINOS Y CONDICIONES</Li>
                </Ul>
            </ContainerMenu>
        </>
    )
}

export default MenuOmni;
