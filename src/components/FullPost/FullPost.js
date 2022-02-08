import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        postInfo: []
    }
    componentDidUpdate (){
        if(this.props.id)
            if(this.state.postInfo &&  this.state.postInfo.id!==this.props.id)
                axios.get("/posts/"+this.props.id).then(response=>{
                    this.setState({postInfo:response.data})
                })
    }
    deletPostHandler = () =>{
        axios.delete("/posts/"+this.props.id).then(response=>{console.log(response)})
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign:'center'}}>Loading</p>;
        }
        if(this.state.postInfo)
            post = (
                <div className="FullPost">
                    <h1>{this.state.postInfo.title}</h1>
                    <p>{this.state.postInfo.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletPostHandler}>Delete</button>
                    </div>
                </div>

            );
        return post;
    }
}

export default FullPost;