export const useRegisterOmni = props => {
    const {
        handleSuccessChange
    } = props;

    const handleSubmit = e => {
        e.preventDefault();
        handleSuccessChange();
    }

    return {
        handleSubmit
    }
}
