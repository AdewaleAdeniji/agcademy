// External Packages
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';
import { routes } from '../configs/NavigationConfig';
// #toDo: create 404 error page displayed when user can't login.

export default ({childProps}) =>
    <BrowserRouter>
        <Switch>
            {
                routes.map((route)=> {
                    return (
                        <UnauthenticatedRoute path={route.path} exact component={route.component} props={childProps} key={route.key}/> 
                    )
                })
            }
            

        </Switch>
    </BrowserRouter>
