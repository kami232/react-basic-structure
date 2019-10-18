import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from "../layouts/Frame";

const routes = (
    <BrowserRouter>
        <Route path="/" render={() =>
            <Frame>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/detail/:id" component={Detail}/>
                </Switch>
            </Frame>
        }>
        </Route>
    </BrowserRouter>
);

export default routes;