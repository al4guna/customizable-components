import React from 'react'
import { ContainerOption, Text, Ul, Button, Item } from './styled';

const OptionListOmni = props => {

    const { data, text, ...res } = props;

    return (
        <div>
            <ContainerOption>
                <Text>{text}</Text>
                <Ul>
                    {
                        data.map((e, key) => {
                            return (
                                <li key={key}>
                                    <Button
                                        {...res}
                                        name={e.id}
                                        selected={e.selected}
                                        available={e.available}
                                        disabled={!e.available}
                                    >
                                        {e.value}
                                    </Button>
                                </li>
                            )
                        })
                    }
                </Ul>
            </ContainerOption>
        </div>
    );
}

export default OptionListOmni;
