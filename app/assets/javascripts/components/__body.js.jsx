class Body extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
      this.addNewPost = this.addNewPost.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.deletePost = this.deletePost.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this);
      this.updatePost = this.updatePost.bind(this)
    }
  handleUpdate(post){
    fetch(`http://localhost:3000/api/v1/posts/${post.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({post: post}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updatePost(post)
      })
  }
  updatePost(post){
    let newPost = this.state.postd.filter((f) => f.id !== post.id)
    newPost.push(post)
    this.setState({
      posts: newPosts
    })
  }
  handleDelete(id){
    fetch(`http://localhost:3000/api/v1/posts/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
      this.deletePost(id)
    })
  }
  deletePost(id){
    newPosts = this.state.posts.filter((post) => post.id !== id)
    this.setState({
      posts: newPosts
    })
  }

  handleFormSubmit(message){
    console.log(message)
    let body = JSON.stringify({post: {message: message} })
    fetch('http://localhost:3000/api/v1/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  }).then((response) => {return response.json()})
  .then((post)=>{
    this.addNewPost(post)
  })
  }
  addNewPost(post){
    this.setState({
      posts: this.state.posts.concat(post)
    })
  }
  componentDidMount(){
      fetch('/api/v1/posts.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ posts: data }) });
    }
  render(){
      return(
        <div>
          <NewPost handleFormSubmit={this.handleFormSubmit}/> 
          <AllPosts posts={this.state.posts} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>

        </div>
      )
    }
  }