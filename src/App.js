import GlobalStyled from './components/StyledGlobal';
import SwichtOmni from "./components/SwicthOmni";

function App() {
    return (
        <div className="App">
            <GlobalStyled />
            <h1 className={''}>Omni.pro</h1>

            <SwichtOmni />
        </div>
    );
}

export default App;
