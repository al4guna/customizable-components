import styled from 'styled-components'


export const DivContainer = styled.div(props => ({
    margin: props.margin || '0px',
    padding: props.padding || '0px'
}));

export const Button = styled.button`
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 600;
    border-radius: 24px;
    font-family: 'Dosis', sans-serif;
    background: linear-gradient(90deg, #8DE7ED 2.31%, #2FCEC5 100%);
`
