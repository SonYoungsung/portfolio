import * as React from 'react';
import Main from "./Main"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
   return (<BrowserRouter>
    <Switch>
        <Route path="/" component={Main}/>
    </Switch>
    </BrowserRouter>)
} 

export default AppRouter