import React from 'react'

export default class Info extends React.Component{
    render() {
        return (
            <div>
                测试动态路由功能
                动态路由值：{this.props.match.params.mainId}
            </div> 
        )
    }
}