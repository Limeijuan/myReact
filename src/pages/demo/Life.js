import React from 'react';
import './life.css';
import Child from './Child';

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };
    // state = {
    //     count: 0
    // }
    render() {
        let style= {
            background: 'red'
        }
        return <div className="Content" style={{padding: 50}}>
            <p style={style}  className="Content">React生命周期介绍</p>
            <button onClick={this.handleAdd}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>点击一下2</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    };
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    };
    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

}