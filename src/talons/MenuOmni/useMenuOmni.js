import { useState } from "react";

export const useMenuOmni = () => {
    const [visible, setVisible] = useState(false);

    const handleChangeVisible = () => {
        setVisible(!visible);
    }

    return {
        visible,
        handleChangeVisible
    }
}
