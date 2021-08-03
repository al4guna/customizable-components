import {useState} from "react";

export const useProductDetailPage = () => {
    const [counter, setCounter] = useState(0);

    const handleSubtract = () => {
        if(counter < 1) return;
        setCounter(counter - 1);
    }

    const handleAdd = () => {
        setCounter( counter + 1);
    }

    return {
        counter,
        handleAdd,
        handleSubtract
    }
}
