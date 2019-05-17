import React from 'react';
import Home from './Home';
import About from './About';
import Lists from './Lists';
import Article from './Article';
import  '../menu.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';   

export default class Menu extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about/">About</Link>
                    <Link className="link" to="/lists">Lists</Link>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about/" component={About}/>
                    <Route path="/lists" component={Lists}/>
                    <Route path="/article/:id/:body" component={Article}></Route>
                </div>
            </Router>
        );
    }
}