import React from 'react';
import { Text, ContainerInfo, List, Item, Name, Price, Image } from './styled';

const data = [
    {
        price: "$130",
        name: "AirPods Pro",
        src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQJ3LL?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1619647493000"
    },
    {
        price: "$130",
        name: "AirPods Pro",
        src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591634795000"
    },
    {
        price: "$130",
        name: "AirPods Pro",
        src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-spacegray-202010?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1600973861000"
    }
]


const ProductsOmni = props => {
    const { title } = props
    return (
        <div>
            <Text>{title || 'También te podría gustar'}</Text>
            <List>
                {
                    data.map((e, key) => {
                        return (
                            <Item key={key}>
                                <div>
                                    <Image src={e.src} alt={e.name}/>
                                </div>
                                <ContainerInfo>
                                    <Name>{e.name}</Name>
                                    <Price>{e.price}</Price>
                                </ContainerInfo>
                            </Item>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default ProductsOmni;
