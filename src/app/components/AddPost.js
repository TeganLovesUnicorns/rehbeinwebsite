import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Form, TextArea } from 'semantic-ui-react'
import { updateUserPost, addPost } from '../actions'

import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/form.css'

class AddPost extends React.Component {
  //When user clicks add post fire the add post event.
  onClick(){
    this.props.addPost(this.props.userPost);
  }

  //Update user text input as they type by firing this action.
  handleChange(event){
    this.props.updateUserPost(event.target.value);
  }

  render() {
    const { userPost } = this.props;

    return(
      <div>
        <Form>
          <TextArea
            autoHeight
            placeholder='Whats your story?'
            value={userPost}
            onChange={this.handleChange.bind(this)}
          />

        </Form>
        <Button
          onClick={this.onClick.bind(this)}
        >
        Post it...
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserPost: bindActionCreators(updateUserPost, dispatch),
    addPost: bindActionCreators(addPost, dispatch)
  }
};

export default connect(state => state, mapDispatchToProps)(AddPost);