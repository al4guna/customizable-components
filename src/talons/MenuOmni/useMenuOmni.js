import { useState, useEffect } from "react";

export const useMenuOmni = () => {
    const [visible, setVisible] = useState(false);
    const [display, setDisplay] = useState(false);

    const handleChangeVisible = () => {
        if(!visible) {
            setDisplay(true)
        }
        setVisible(!visible);
    }

    useEffect(() => {
        if (!visible) {
            const timer = setTimeout(() => {
                setDisplay(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return {
        display,
        visible,
        handleChangeVisible
    }
}
