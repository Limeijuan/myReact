import React from 'react'
import {Row, Col} from 'antd'
import {HashRouter} from 'react-router-dom' 
import Header from './components/Header'
import Footer from './components/Footer'
import MenuBar from './components/MenuBar'
import './style/common.less'
import './style/reset.less'

export default class Admin extends React.Component{
    render() {
        return (
            <Row className="container" >
                <Col span={3} className="menu-bar" >
                    <HashRouter>
                        <MenuBar/>
                    </HashRouter>  
                </Col>
                <Col span={21} className="main" >
                    <Header/>
                    <Row className="content" >
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}