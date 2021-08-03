import GlobalStyled from './components/StyledGlobal';
import LoginPage from "./components/LoginPage";
// import LoginOmni from "./components/LoginOmni";

function App() {
    return (
        <div className="App">
            <GlobalStyled />
            <LoginPage />
            {/*<LoginOmni />*/}
        </div>
    );
}

export default App;
