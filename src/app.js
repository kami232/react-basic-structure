import React, {PureComponent} from 'react';
import routes from './routes';
import {Provider} from 'react-redux';
import CSSModules from 'react-css-modules';
import store from './store';

import app from './app.css';

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                {routes}
            </Provider>
        )
    }
}

export default CSSModules(App, app);