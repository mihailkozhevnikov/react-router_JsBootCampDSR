import React from 'react';

export default class Article extends React.Component { 
    render() {
        return(
            <div>
                <h1>{this.props.match.params.id}</h1>
                <p>{this.props.match.params.body}</p>
            </div>
        );
    }
}