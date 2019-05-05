import React from 'react'
import { Modal, Card, Button } from 'antd'
import './ui.less'

export default class Modals extends React.Component{
    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false
    }
    handleOpenModal = (type) => {
        this.setState({
            [type]: true
        })
    };
    handleOpenConfirm = () => {
        Modal.confirm({
            title: '确认',
            okText: 'yes',
            cancelText: 'no',
            content: 'Confirm----long喵天地？'
        })
    };
    handleOpenTip = (type) => {
        Modal[type]({
            title: type,
            okText: '确定',
            cancelText: '取消',
            content: '111' + type +'----long喵天地'
        })
    };
    render() {
        return(
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpenModal('modal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpenModal('modal2')}>自定义页脚按钮</Button>
                    <Button type="primary" onClick={()=>this.handleOpenModal('modal3')}>20px to Top</Button>
                    <Button type="primary" onClick={()=>this.handleOpenModal('modal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={this.handleOpenConfirm}>Confirm</Button>
                </Card>
                <Card title="信息提示框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpenTip('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleOpenTip('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleOpenTip('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleOpenTip('error')}>Error</Button>
                </Card>
                {/* 基础模态框 */}
                <Modal title="Open"
                    visible={this.state.modal1}
                    onCancel={()=>{
                        this.setState({
                            modal1: false
                        })
                    }}>
                    <p>Open----long喵天地</p>
                </Modal>
                <Modal title="自定义页脚按钮"
                    visible={this.state.modal2}
                    okButtonProps={{ disabled: true }}
                    cancelButtonProps={{ disabled: true }}
                    okText= "确定"
                    cancelText= "取消"
                    onCancel={()=>{
                        this.setState({
                            modal2: false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            modal2: false
                        })
                    }}>
                    <p>自定义页脚按钮----long喵天地</p>
                </Modal>
                <Modal title="20px to Top"
                    visible={this.state.modal3}
                    style={{ top: 20 }}
                    onCancel={()=>{
                        this.setState({
                            modal3: false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            modal3: false
                        })
                    }}>
                    <p>20px to Top----long喵天地</p>
                </Modal>
                <Modal title="水平垂直居中"
                    centered
                    visible={this.state.modal4}
                    onCancel={()=>{
                        this.setState({
                            modal4: false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            modal4: false
                        })
                    }}>
                    <p>水平垂直居中----long喵天地</p>
                </Modal>
            </div>
        )
    }
}