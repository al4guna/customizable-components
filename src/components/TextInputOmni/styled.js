import styled from 'styled-components'

export const DivContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

export const Input = styled.input(props => ({
    padding: '0px',
    border: 'none',
    outline: 'none',
    height: '42px',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20px',
    background: 'transparent',
    fontFamily: 'Dosis, sans-serif',
    borderBottom: props.require ? '2px solid #2FCCC3' : '1px solid #F5F5F550'
}));

export const Label = styled.label`
    color: #ffff;
    font-size: 14px;
    font-family: 'Dosis', sans-serif;
`

export const DivMessage = styled.div(props => ({
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    visibility: props.require ? 'visible' : 'hidden'
}));


export const Span = styled.span`
    color: #2FCCC3;
    margin-top: 0;
    font-size: 12px;
    font-weight: 600;
    text-align: right;
    line-height: 15px;
    margin-left: 5px;
    font-family: 'Dosis', sans-serif;
`
