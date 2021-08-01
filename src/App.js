import GlobalStyled from './components/StyledGlobal';
import SwichtOmni from "./components/SwicthOmni";
import ButtonOmni from "./components/ButtonOmni";

function App() {
    return (
        <div className="App">
            <GlobalStyled />
            <h1 className={''}>Omni.pro</h1>

            <SwichtOmni />
            <ButtonOmni text={'Ingreso'}/>
        </div>
    );
}

export default App;
