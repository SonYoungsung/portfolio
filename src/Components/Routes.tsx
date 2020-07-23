import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from "./Main"

const AppRouter: React.FC = () => {
   return (
       <BrowserRouter>
    <Switch>
        <Route path="/" component={Main}/>
        <Redirect path="*" to="/"></Redirect>
    </Switch>
    </BrowserRouter>
    )
} 

export default AppRouter