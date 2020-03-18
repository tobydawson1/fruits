const NewPost = (props) => {
    let formFields = {}
   
    return(
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.message.value); e.target.reset();}}>
       <textarea ref={input => formFields.message = input} placeholder='Enter your post' />
       <button>Submit</button>
      </form>
    )
  }