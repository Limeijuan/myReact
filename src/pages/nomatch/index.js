import React from 'react'

export default class NoMatch extends React.Component{
    render() {
        return (
            <div style={{background: '#fff', padding: 10, textAlign: 'center', color: 'red',fontSize: '20px'}}>
                404 not found
            </div> 
        )
    }
}