import styled from "styled-components";

export const ContainerOption = styled.div`
    display: flex;
    align-items: center;
    max-width: 100vw;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

`

export const Ul = styled.ul`
    display: flex;
`

export const Text = styled.p`
    font-size: 14px;
    margin-right: 30px;
`

export const Button = styled.button`
    margin: 0 3px;
    display: flex;
    cursor: pointer;
    font-size: 14px;
    min-width: 44px;
    padding: 16px 22px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: ${props => !props.available ? "#455A6432" : props.selected ?  "#fff" : "#455A64"};
    background: ${props => !props.available ? "rgba(236, 239, 241, 0.4)" : props.selected ?  "#33333A" : "#fff"};
    border: 1px solid ${props => !props.available ? "rgba(236, 239, 241, 0.4)" : props.selected ?  "#33333A" : "#DEDEDE"};
`
