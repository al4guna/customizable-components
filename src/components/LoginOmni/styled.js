import styled from 'styled-components'

export const DivLogin = styled.div`
    display: grid;
    width: 95vw;
    margin: 0 auto;
    border-radius: 6px;
    background: transparent;
`

export const DivContainerButton = styled.div`
    display: flex;
`

export const Button = styled.button`
    width: 50%;
    color: #fff;
    height: 60px;
    display: flex;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-family: 'Dosis', sans-serif;
    background: rgba(58, 48, 97, 0.35);
    position: relative;

    &:nth-child(1) {
        border-radius: 6px 0 0 0;
        background: ${props => props.background ? '#3A3061' : 'rgba(58, 48, 97, 0.35)'};
    }

    &:nth-child(2) {
        border-radius: 0 6px 0 0;
        background: ${props => props.background ? '#3A3061' : 'rgba(58, 48, 97, 0.35)'};
    }
`

export const Form = styled.form`
    padding: 27px 24px;
    background: #3A3061;
`
