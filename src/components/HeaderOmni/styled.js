import styled from "styled-components";

export const Header = styled.header`
    height: 80px;
    display: flex;
    background: #fff;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
`

export const Ul = styled.ul`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const LiBag = styled.li`
    position: relative;
    cursor: pointer;

    &:before {
        top: -6px;
        right: -6px;
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        background: #D61043;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7em;
        content: "${props => props.quantity}";
    }
`
