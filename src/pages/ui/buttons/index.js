import React from 'react'
import {Button, Card, Icon, Radio} from 'antd'
import './buttons.less'

export default class IButton extends React.Component{
    state = {
        loading: true,
        size: 'default'
    };
    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    };
    handleChangeSize = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        let size = this.state.size;
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button disabled>Default_disabled</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus" type="primary">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete" type="danger">删除</Button>
                    <Button icon="search">搜索</Button>
                    <Button shape="circle" type="primary" icon="search"></Button>
                    <Button icon="download" type="primary">下载</Button>
                    <Button type="primary" icon="cloud" />
                    <Button type="primary" icon="cloud-download" />
                </Card>
                <Card title="loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon="left">Go back</Button>
                        <Button type="primary">
                            Go forward<Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={size}  onChange={this.handleChangeSize}>
                        <Radio.Button value="large">large</Radio.Button>
                        <Radio.Button value="default">default</Radio.Button>
                        <Radio.Button value="small">small</Radio.Button>
                    </Radio.Group>
                    <Button type="primary" size={size}>long喵</Button>
                    <Button size={size}>long喵</Button>
                    <Button type="dashed" size={size}>long喵</Button>
                    <Button type="danger" size={size}>long喵</Button>
                    <Button disabled size={size}>long喵</Button>
                </Card>
            </div> 
        )
    }
}