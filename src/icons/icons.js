import styled from 'styled-components'
import './icons.css';

const Container = styled.div(props => ({
    margin:  props.margin ||'0px',
    padding: props.padding || '0px',
    display: props.display || 'inline-block',
    background: props.background || 'transparent'
}));

const Icon = styled.div(props => ({
    color: props.color || '#ffffff',
    fontSize: props.fontSize || '20px',
}));

export const IconRequire = props => {
    const {
        ...res
    } = props;

    return (
        <Container
            {...res}
        >
            <Icon
                {...res}
                className={'icon icon-require'}
            />
        </Container>
    )
}

// .icon-search::before  content: "\ea03";
export const IconSearch = props => {
    const {
        ...res
    } = props;

    return (
        <Container >
            <Icon
                {...res}
                className={'icon icon-search'}
            />
        </Container>
    )
}

//icon-shape::before  content: "\ea04"
export const IconShape = props => {
    const {
        ...res
    } = props;

    return (
        <Container >
            <Icon
                {...res}
                className={'icon icon-shape'}
            />
        </Container>
    )
}

//icon-star::before content: "\ea05";
export const IconStar = props => {
    const {
        ...res
    } = props;

    return (
        <Container >
            <Icon
                {...res}
                className={'icon icon-star'}
            />
        </Container>
    )
}

export const IconBurger = props => {
    const {
        ...res
    } = props;

    return (
        <Container >
            <Icon
                {...res}
                className={'icon icon-hamburger1'}
            />
        </Container>
    )
}

// .icon-hamburger::before content: "\ea07";
export const IconMenu = props => {
    const {
        ...res
    } = props;

    return (
        <Container >
            <Icon
                {...res}
                className={'icon icon-hamburger'}
            />
        </Container>
    )
}

// icon-bag::before  content: "\ea08"
export const IconBag = props => {
    const {
        ...res
    } = props;

    return (
        <Container >
            <Icon
                {...res}
                className={'icon icon-bag'}
            />
        </Container>
    )
}

// icon-back::before content: "\ea09";
export const IconBack = props => {
    const {
        ...res
    } = props;

    return (
        <Container >
            <Icon
                {...res}
                className={'icon icon-back'}
            />
        </Container>
    )
}
