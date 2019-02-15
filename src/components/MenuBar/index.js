import React from 'react'
import { Menu } from 'antd';
import MenuConfig from './../../resource/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;

export default class MenuBar extends React.Component{
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    // 渲染菜单
    renderMenu= (data) => {
        return data.map((item) => {
            if(item.children) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>)
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/favicon.png" alt=""/>
                    <h1>2019-React</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
                
            </div>
        )
    }
}