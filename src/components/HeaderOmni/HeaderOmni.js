import React from "react";
import IMG_LOGO from '../../assets/Logo.svg'
import {
    IconBag,
    IconMenu,
    IconShape,
    IconSearch
} from '../../icons/icons';
import { Header, Ul, LiBag } from './styled'


const HeaderOmni = () => {

    const quantity = 1;

    return (
        <Header>
            <div>
                <img src={IMG_LOGO} alt={'Logo'}/>
            </div>
            <Ul>
                <li>
                    <IconSearch color={'#000'} fontSize={"1.2em"}/>
                </li>
                <li>
                    <IconShape color={'#000'} fontSize={"1.2em"}/>
                </li>
                <LiBag quantity={quantity}>
                    <IconBag color={'#000'} fontSize={"1.2em"}/>
                </LiBag>
                <li>
                    <IconMenu color={'#000'} fontSize={"1em"}/>
                </li>
            </Ul>
        </Header>
    );
}

export default HeaderOmni;
