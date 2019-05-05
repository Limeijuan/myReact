import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Layout from './layout'
import Login from './pages/login'
import Admin from './admin'
import IButton from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Home from './pages/ui/home/index'
import NoMatch from './pages/nomatch/index'
import Loadings from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'

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
                                <Route path="/admin/ui/buttons" component={IButton}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Messages}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </Layout>
            </HashRouter>
        );
    }
}