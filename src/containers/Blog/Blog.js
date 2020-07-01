import React, { Component } from 'react';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
// import Axios from 'axios';
import axios from '../../axios';

class Blog extends Component {
    

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;