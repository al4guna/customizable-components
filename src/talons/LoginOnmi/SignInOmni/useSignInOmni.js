import { useState } from "react";

export const useSignInOmni = props => {
    const [newsletter, setNewsletter] = useState(false);

    const {
        handleSuccessChange
    } = props;

    const handleNewsletter = (e) => {
        setNewsletter(e.target.checked);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newsletter)
        handleSuccessChange();
    }

    return {
        handleSubmit,
        handleNewsletter
    }
}
