import React from 'react'
import {Card, Spin, Icon, Alert} from 'antd'
import './ui.less'

export default class Loading extends React.Component{
    render() {
        const icon = <Icon type="loading" style={{fontSize: 28}}/>
        return(
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin className='spin-i' size="small" />
                    <Spin className='spin-i'/>
                    <Spin className='spin-i' size="large" />
                    <Icon type="sync" spin />
                    <Spin className='spin-i' indicator={icon} />
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="react"
                        description="long喵，丫丫呀呀呀晕啊呀呀"
                        type="warning"
                        />
                    <Spin>
                        <Alert
                            message="react"
                            description="long喵，丫丫呀呀呀晕啊呀呀"
                            type="warning"
                            />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="react"
                            description="long喵，丫丫呀呀呀晕啊呀呀"
                            type="info"
                            />
                    </Spin>
                    <Spin tip="出问题了！" indicator={icon} >
                        <Alert
                            message="react"
                            description="long喵，丫丫呀呀呀晕啊呀呀"
                            type="error"
                            />
                    </Spin>
                </Card>
            </div>
        )
    }
}
