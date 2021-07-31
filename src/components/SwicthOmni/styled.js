import styled from 'styled-components'

export const DivSwicth = styled.div`
    position: relative;
    display: inline-block;
    width: 34px;
    height: 14px;
`;

export const LabelSwicth = styled.label`
    outline: none;

    position: relative;
    display: inline-block;
    width: 34px;
    height: 14px;
`;

export const SpanRound = styled.span`
    outline: none;

    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0 ;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`

export const InputSwicth = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    outline: none;

    &:checked {
        + ${SpanRound} {
            background: #2FC0BA;
            &::before {
                -webkit-transform: translateX(20px, -50%);
                -ms-transform: translateX(20px, -50%);
                transform: translate(20px, -50%);
            }
        }
    }
`;
