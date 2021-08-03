import styled from "styled-components";
import { Animated } from "react-animated-css";

export const ContainerButton = styled.div`
    top: 24px;
    right: 16px;
    z-index: 1100;
    position: absolute;
`

export const ContainerMenu = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    position: absolute;
    background: #3940d0;
`

export const Ul = styled.ul`
    top: 36%;
    left: 0;
    right: 0;
    position: absolute;
    background: #3940d0;
`

export const Li = styled.li`
    display: flex;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 700;
    align-items: center;
    margin-bottom: 39px;
    font-family: 'Dosis', sans-serif;
    color: ${ props => props.isColor ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
`

export const Span = styled.div`
    height: 2px;
    width: 28px;
    margin-right: 24px;
    background: ${ props => props.isColor ? '#2FCDC4' : 'transparent'};
`

export const ImgBackground = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`

export const ImgLogo = styled.img`
    top: 12%;
    left: 59%;
    height: 120px;
    position: absolute;
    transform: translateX(-50%);
`

export const Menu = styled(Animated)`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    position: absolute;
`
