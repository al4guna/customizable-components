import React from 'react';
import {IconBack, IconBurger} from '../../icons/icons';
import {
    Li,
    Ul,
    Span,
    Menu,
    ImgLogo,
    ImgBackground,
    ContainerMenu,
    ContainerButton
} from './styled';
import { useMenuOmni } from "../../talons/MenuOmni/useMenuOmni";
import IMG_TOP from '../../assets/BG.png';
import IMG_LOGO from '../../assets/Logo.png';

const MenuOmni = () => {

    const {
        display,
        visible,
        handleChangeVisible
    } = useMenuOmni({});

    return (
        <>
            <ContainerButton>
                {visible && <IconBack fontSize={'24px'} onClick={handleChangeVisible}/> }
                {!visible && <IconBurger fontSize={'16px'}  onClick={handleChangeVisible}/> }
            </ContainerButton>
            { display &&
                <Menu
                    isVisible={visible}
                    animationInDuration={500}
                    animationOutDuration={500}
                    animationIn={visible ? "slideInLeft" : "bounce"}
                    animationOut={visible ? "bounce" : "slideOutLeft"}
                >
                    <ContainerMenu
                        visible={visible}
                    >
                        <ImgBackground src={IMG_TOP} alt={'Fondo'}/>
                        <ImgLogo src={IMG_LOGO} alt={'Logo'}/>
                        <Ul>
                            <Li isColor={true}><Span isColor={true}/> INICIO</Li>
                            <Li><Span/> SERVICIOS</Li>
                            <Li><Span/> NUESTRO EQUIPO</Li>
                            <Li><Span/> PORTAFOLIO</Li>
                            <Li><Span/> CONTÁCTO</Li>
                            <Li><Span/> TÉRMINOS Y CONDICIONES</Li>
                        </Ul>
                    </ContainerMenu>
                </Menu>
            }
        </>
    )
}

export default MenuOmni;
