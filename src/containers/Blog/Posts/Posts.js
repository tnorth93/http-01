import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.module.css';

class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount () {
    console.log(this.props);
    axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Tom',
                }
            })
            this.setState({posts: updatedPosts});
            // console.log(response);
        })
        .catch(error => {
            console.log(error);
            // this.setState({error: true});
        });
}

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
}

  render () {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}/>
      });

    return (
      <section className="Posts">
        {posts}
      </section>
    )
    }
  }
}

export default withRouter(post);