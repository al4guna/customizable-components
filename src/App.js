import GlobalStyled from './components/StyledGlobal';
import LoginPage from "./components/LoginPage";
import ProductDetailPage from "./components/ProductDetailPage";

function App() {
    return (
        <div className="App">
            <GlobalStyled />
            {/*<LoginPage />*/}
            <ProductDetailPage />
        </div>
    );
}

export default App;
