import React from 'react'
import {Row, Col} from 'antd'
import Util from '../../utils/utils'
import './index.less'
import Axios from '../../axios/index'
export default class Header extends React.Component{
    componentWillMount() {
        let sysTime = Util.formateDate(new Date().getTime())
        this.setState({
            userName: "一叶知秋",
            sysTime
        })
        this.getWeatherAPIData()
    }
    getWeatherAPIData() {
        let city = '济南'
        Axios.jsonp({url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'})
            .then((res) => {
                if(res.status === 'success') {
                    let data = res.results[0].weather_data[0];
                    this.setState({
                        weatherPicture: data.dayPictureUrl,
                        weatherName: data.weather
                    })                
                }
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
                        <span className="weather-Picture">
                            <img src={this.state.weatherPicture} alt={this.state.weatherName}/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weatherName}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}