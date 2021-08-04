import React from "react";
import {
    Route,
    Switch,
    BrowserRouter,
} from "react-router-dom";
import LoginPage from '../LoginPage';
import ProductDetailPage from '../ProductDetailPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route exact path="/producto">
                    <ProductDetailPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
