import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: []
        }

        this.text = this.text.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({params: res.data});
            });
    }

    text() {
        return this.state.params.map((param) => {
           return <tr key={param.id}>
                <td>{param.id}</td>
                <td>
                    <Link to= {`/article/id-${param.id}/description${param.body}`} onClick={this.handleClick}>{param.title}</Link>
                </td>
            </tr>
        });
    }

    handleClick() {
        return this.state.params.map((parameter) =>{
            return parameter.title;
        });
    }

    render() {
        return(
            <div>
                <h1>Lists</h1>
                <table>
                    <tbody>
                        {this.text()}
                    </tbody>
                </table>
            </div>
        );
    }
}