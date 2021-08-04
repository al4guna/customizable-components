import React from 'react';
import HeaderOmni from "../HeaderOmni";
import { IconStar } from '../../icons/icons';
import CounterOmni from '../CounterOmni';
import OptionListOmni from '../OptionListOmni'
import FooterOmni from "../FooterOmni";
import ProductsOmni from "../ProductsOmni";
import {
    Page,
    Price,
    ReadMore,
    ButtonAdd,
    ContainerImg,
    ContainerOption,
    ContainerCounter,
    ContainerInfo,
    ContainerRanking,
    ContainerBtn,
    ContainerDescription,
    TextDescription,
    SubtitleDescription,
    ContainerProducts
} from './styled';

import { useProductDetailPage } from "../../talons/ProductDetailPage/useProductDetailPage";

const ProductDetailPage = () => {
    const rank = 3;
    const rankTotal = 5;
    const price = "$139.99"
    const IMG_PRODUCT = "https://www.apple.com/v/iphone/home/ay/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg";

    const {
        types,
        sizes,
        counter,
        handleAdd,
        handleSubtract,
        handleChangeSize,
        handleChangeTypes
    } = useProductDetailPage({});

    const Stars = props => {
        let items = [];
        for (let i = 0; i < props.rankTotal; i++) {
            items.push(props.children(i));
        }
        return <div>{items}</div>;
    }

    return (
        <Page>
            <HeaderOmni/>
            <ContainerImg>
                <img src={IMG_PRODUCT} alt={'producto'}/>
            </ContainerImg>
            <ContainerInfo>
                <h3>{'Pantalones para Dama'} <br />
                    {'“The Sideswept Dhoti”'}
                </h3>
                <ContainerRanking>
                    <Stars rankTotal={rankTotal}>
                        {(index) => <IconStar color={index < rank ? "#D61043": "#ECEFF1"} key={index} />}
                    </Stars>
                    <span>{`${rank} de ${rankTotal}`}</span>
                </ContainerRanking>
                <div>
                    <Price>{price}</Price>
                </div>
            </ContainerInfo>

            <ContainerOption>
                <OptionListOmni onClick={handleChangeSize} text={'TAMAÑO'} data={sizes}/>
            </ContainerOption>
            <ContainerOption>
                <OptionListOmni onClick={handleChangeTypes} text={'KIT'} data={types}/>
            </ContainerOption>
            <ContainerCounter>
                <CounterOmni
                    text={'CANTIDAD'}
                    input={{ value: counter }}
                    btnAdd={{ onClick: handleAdd }}
                    btnSubtract={{ onClick: handleSubtract }}
                />
            </ContainerCounter>
            <ContainerBtn>
                <ButtonAdd>AÑADIR AL CARRITO</ButtonAdd>
            </ContainerBtn>
            <ContainerDescription>
                <SubtitleDescription>Descripción</SubtitleDescription>
                <TextDescription>
                    In eu blandit metus. Phasellus vitae consequat augue. Cras auctor lacus a purus convallis...
                </TextDescription>
                <ReadMore>LEER MÁS</ReadMore>
            </ContainerDescription>
            <ContainerProducts>
                <ProductsOmni />
            </ContainerProducts>
            <FooterOmni />
        </Page>
    );
}

export default ProductDetailPage;
