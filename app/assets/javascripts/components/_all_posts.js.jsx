const AllPosts = (props) => {
    var posts = props.posts.map((post) => {
        return(
          <div key={post.id}>
            <p>{(new Date(post.created_at)).toLocaleString()}</p> 
            <Post post={post} 
            handleDelete={props.handleDelete} 
            handleUpdate={props.handleUpdate}/>                   
          </div>
        )
      })
    return(
          <div>
            {posts}
          </div>
            
        )
    }