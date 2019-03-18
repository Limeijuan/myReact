import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Layout from './layout'
import Login from './pages/login'
import Admin from './admin'
import Button from './pages/ui/button/index'
import Home from './pages/ui/home/index'
import NoMatch from './pages/nomatch/index'

export default class IRouter extends React.Component{
    render() {
        return(
            <HashRouter>
                <Layout>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={() => 
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/ui/buttons" component={Button}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </Layout>
            </HashRouter>
        );
    }
}