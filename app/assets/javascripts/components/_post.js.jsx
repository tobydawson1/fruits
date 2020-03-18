class Post extends React.Component{

constructor(props){
    super(props);
    this.state = {
        editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    }

handleEdit(){
    if(this.state.editable){
        let message = this.message.value
        let id = this.props.post.id
        let post = {id: id, message: message}
        this.props.handleUpdate(post)
    }
    this.setState({
        editable: !this.state.editable
    })
    }
render(){
    let message = this.state.editable ? <input type='text' ref={input => this.message = input} defaultValue={this.props.post.message}/>:<p>{this.props.post.message}</p>
    return(
    <div>
        {message}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.post.id)}>Delete</button>
    </div>
    )      
}
}
