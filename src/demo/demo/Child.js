import React from 'react';

export default class Child extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };
    render() {
        return <div>
            <p>这里是子组件，测试子组件生命周期：</p>
            <p>parentCount: {this.props.name}</p>
            <p>selfCount: {this.state.count}</p>
        </div>
    };
    componentWillMount() {
        console.log('will mount');
    };
    componentDidMount() {
        console.log('did mount');
    };
    componentWillReceiveProps(newProps) {
        console.log('will props' + newProps.name)
    };
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log(nextProps);
        console.log(nextState);
        return true;
    };
    componentWillUpdate() {
        console.log('will update');
    };
    componentDidUpdate() {
        console.log('did updata');
    } 


}