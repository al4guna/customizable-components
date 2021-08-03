import React from 'react';
import HeaderOmni from "../HeaderOmni";
import { ContainerImg } from './styled';
import { IconStar } from '../../icons/icons';
import CounterOmni from '../CounterOmni';
import { useProductDetailPage } from "../../talons/ProductDetailPage/useProductDetailPage";

const IMG_PRODUCT = "https://www.apple.com/v/iphone/home/ay/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg";

const ProductDetailPage = () => {
    const rank = 3;
    const rankTotal = 5;
    const price = "$139.99"

    const {
        counter,
        handleAdd,
        handleSubtract
    } = useProductDetailPage({});

    const Stars = props => {
        let items = [];
        for (let i = 0; i < props.rankTotal; i++) {
            items.push(props.children(i));
        }
        return <div>{items}</div>;
    }

    return (
        <div>
            <HeaderOmni/>
            <ContainerImg>
                <img src={IMG_PRODUCT} alt={'producto'}/>
            </ContainerImg>
            <div>
                <h3>{'Pantalones para Dama'} <br />
                    {'“The Sideswept Dhoti”'}
                </h3>
                <div>
                    <Stars rankTotal={rankTotal}>
                        {(index) => <IconStar color={index < rank ? "#D61043": "#ECEFF1"} key={index} />}
                    </Stars>
                    <span>{`${rank} de ${rankTotal}`}</span>
                </div>
                <div>
                    <span>{price}</span>
                </div>
            </div>
            <div>
                <CounterOmni
                    input={{
                        value: counter
                    }}
                    btnSubtract={{
                        onClick: handleSubtract
                    }}
                    btnAdd={{
                        onClick: handleAdd
                    }}
                    text={'CANTIDAD'}
                />
            </div>
        </div>
    );
}

export default ProductDetailPage;
