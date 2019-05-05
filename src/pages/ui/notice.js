import React from 'react'
import {Card, Button, notification } from 'antd'
// import './ui.less'


export default class Notice extends React.Component{
    handleNotifications = (type) => {
        notification[type]({
            message: type,
            description: '天噜啦！！！！'
        })
    };
    handleAddBtn = () => {
        const close = () => {
            console.log('自定义关闭按钮提醒框。');
          };
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close()}>
              知道了
            </Button>
          );
        notification.open({
            message: 'Notice',  
            description: '有按钮的提示框啊！',
            btn,
            duration: 2,
            onClose: close
        })
    };
    handlePosition = (type, position) => {
        if(position) {
            notification.config({
                placement: position,
                duration: 2,
              });
        }
        
        notification[type]({
            message: type+'---'+position,  
            description: '通过placement控制提醒框弹出位置'
        })
    };
    render() {
        return(
            <div>
                <Card title="基础通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>{this.handleNotifications('open')}}>Open</Button>
                    <Button type="primary" onClick={()=>{this.handleNotifications('info')}}>Info</Button>
                    <Button type="primary" onClick={()=>{this.handleNotifications('success')}}>Success</Button>
                    <Button type="primary" onClick={()=>{this.handleNotifications('warning')}}>Warning</Button>
                    <Button type="primary" onClick={()=>{this.handleNotifications('warn')}}>Warn</Button>
                    <Button type="primary" onClick={()=>{this.handleNotifications('error')}}>Error</Button>
                </Card>
                <Card title="自定义关闭按钮" className="card-wrap">
                    <Button type="primary" onClick={this.handleAddBtn}>Notice</Button>
                </Card>
                <Card title="设置弹出位置" className="card-wrap">
                    <Button type="primary" onClick={()=>{this.handlePosition('success','topLeft')}}>topLeft</Button>
                    <Button type="primary" onClick={()=> this.handlePosition('info','topRight')}>topRight</Button>
                    <Button type="primary" onClick={()=> this.handlePosition('warning','bottomLeft')}>bottomLeft</Button>
                    <Button type="primary" onClick={()=> this.handlePosition('error','bottomRight')}>bottomRight</Button>
                </Card>
            </div>
        )
    }
}