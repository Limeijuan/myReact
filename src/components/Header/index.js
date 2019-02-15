import React from 'react'
import {Row, Col} from 'antd'
import Util from '../../utils/utils'
import './index.less'

export default class Header extends React.Component{
    componentWillMount() {
        let sysTime = Util.formateDate(new Date().getTime())
        this.setState({
            userName: "一叶知秋",
            sysTime
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="/">退出</a>
                    </Col>
                </Row>
                <Row className="breadCrumb">
                    <Col span={3} className="breadCrumb-title">
                        首页
                    </Col>
                    <Col span={21} className="weather">
                        <span className="current-date">{this.state.sysTime}</span>
                        <span className="weather-detail">小雪转晴</span>
                    </Col>
                </Row>
            </div>
        )
    }
}