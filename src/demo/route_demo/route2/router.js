import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Main from './main'
import About from './../route1/about'
import Topic from './../route1/topic'
import Home from './home'

export default class Irouter extends React.Component{
    render() {
        return(
            <Router>
                <Home>
                    <Route path="/main" render={() => 
                        <Main>
                            <div>
                                this is children
                                <Route path="/main/a" component={About}></Route>
                            </div> 
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        )
    }
} 