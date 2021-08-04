import styled from "styled-components";

export const Text = styled.h6`
    font-size: 1.4em;
    font-weight: 500;
`

export const List = styled.ul`
    max-width: 100vw;
    overflow-x: scroll;
    display: flex;
    gap: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Item = styled.li`
    width: 35%;
    min-width: 35%;
    cursor: pointer;
`

export const ContainerInfo = styled.div`
    padding-left: 12px;
    margin-top: 30px;
`

export const Name = styled.p`
    color: #263238;
    font-size: 16px;
    font-weight: 700;
`

export const Price = styled.p`
    color: #9D9D9D;
    font-size: 16px;
    font-weight: 700;
`

export const Image = styled.img`
    width: 100%;
`
