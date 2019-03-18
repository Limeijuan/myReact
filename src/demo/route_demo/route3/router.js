import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './main'
import Info from './info'
import About from './../route1/about'
import Topic from './../route1/topic'
import NoMatch from './noMatch'
import Home from './home'

export default class Irouter extends React.Component{
    render() {
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <div>
                                    this is children
                                    <Route path="/main/:mainId" component={Info}></Route>
                                </div> 
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
} 