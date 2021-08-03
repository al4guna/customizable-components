import styled from "styled-components";

export const ContainerButton = styled.div`
    top: 24px;
    right: 16px;
    position: absolute;
`

export const ContainerMenu = styled.div`
    position: absolute;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 36%;
    bottom: 0;
    background: #3940d0;
`

export const Ul = styled.ul`
`

export const Li = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 39px;
    font-family: 'Dosis', sans-serif;
    color: ${ props => props.color ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
`

export const Span = styled.div`
    height: 2px;
    width: 28px;
    background: ${ props => props.color ? '#2FCDC4' : 'transparent'};
    margin-right: 24px;
`
