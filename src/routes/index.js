// 路由配置
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../page/home'

const routes = (
    <BrowserRouter>
        <Route path='/' component={Home}/>
    </BrowserRouter>
)

export default routes