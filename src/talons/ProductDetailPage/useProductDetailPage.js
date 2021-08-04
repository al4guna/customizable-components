import {useState} from "react";

const SIZES = [
    {
        id: "001",
        value : "S",
        selected: false,
        available: false
    },
    {
        id: "002",
        value : "M",
        selected: false,
        available: true
    },
    {
        id: "003",
        value : "L",
        selected: true,
        available: true
    },
    {
        id: "004",
        value : "XL",
        selected: false,
        available: false
    },
    {
        id: "005",
        value : "XXL",
        selected: false,
        available: false
    },
    {
        id: "006",
        value : "XXL",
        selected: false,
        available: false
    },
    {
        id: "007",
        value : "XXL",
        selected: false,
        available: false
    }
];

const TYPES = [
    {
        id: '001',
        value : "HOME",
        selected: true,
        available: true
    },
    {
        id: '002',
        value : "AWAY",
        selected: false,
        available: true
    },
    {
        id: '003',
        value : "THIRD",
        selected: false,
        available: true
    }
];

export const useProductDetailPage = () => {
    const [counter, setCounter] = useState(0);
    const [types, setTypes] = useState(TYPES);
    const [sizes, setSizes] = useState(SIZES);

    const handleSubtract = () => {
        if(counter < 1) return;
        setCounter(counter - 1);
    }

    const handleAdd = () => {
        setCounter( counter + 1);
    }

    const handleChangeSize = e => {
        const id = e.target.getAttribute('name');
        const newSizes = sizes.slice();
        newSizes.forEach((elem) => {
            if(elem.id === id) {
                elem.selected = true;
            } else {
                elem.selected = false;
            }
        })
        setSizes(newSizes);
    }

    const handleChangeTypes = e => {
        const id = e.target.getAttribute('name');
        const newTypes = types.slice();
        newTypes.forEach((elem) => {
            if(elem.id === id) {
                elem.selected = true;
            } else {
                elem.selected = false;
            }
        })
        setTypes(newTypes);
    }

    return {
        sizes,
        types,
        counter,
        handleAdd,
        handleSubtract,
        handleChangeSize,
        handleChangeTypes
    }
}
