import React from 'react'
import {HashRouter, Link} from 'react-router-dom'


export default class Home extends React.Component{
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/main">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                        <li>
                            <Link to="/muma">muma</Link>
                        </li>
                        <li>
                            <Link to="/muma2">muma2</Link>
                        </li>
                    </ul>
                    <hr/>
                    {this.props.children}
                </div>
            </HashRouter> 
        )
    }
}